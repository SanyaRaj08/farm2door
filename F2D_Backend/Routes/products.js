const express = require('express')
const router = express.Router()
const fetchUser = require('../middleware/fetchUser')
const Product = require('../models/products')
const Cart = require('../models/Cart')
const {validationResult} = require('express-validator')

router.get('/fetchAllProducts',fetchUser,  async (req,res)=>{
    try {
            const products = await Product.find({user : req.user.id})
            res.json(products)   
    } catch (error) {
            console.error(error.message);
            res.status(500).send('Internal Server error');   
    }
     
})


router.post('/addToCart/:id', fetchUser, async (req, res) => {
    try {
      const productId = req.params.id;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Create or update the user's cart
      const user = req.user.id;
      let cart = await Cart.findOne({ user });

       if (!cart) {
           const newCart = new Cart({ user, products: [] });
           cart = await newCart.save();
       }

  
      // Check if the product is already in the cart
      const existingProduct = cart.products.find((p) => p.product.toString() === productId);
      if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it
        cart.products.push({ product: productId, quantity: 1 });
      }
  
      // Save the updated cart
      await cart.save();
  
      res.json({ message: 'Product added to cart successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server error');
    }
  });


router.get('/fetchAllProductsofAll', async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server error');
    }
});


//GET total no. of products of a particular user
router.get('/getTotalProducts', fetchUser, async (req, res) => {
try {
  const totalproductsCount = await Product.countDocuments({ user: req.user.id });

  res.json({ totalproductsCount });
} catch (error) {
  console.error(error.message);
  res.status(500).send('Internal Server Error');
}
});

//Add an idea
router.post('/addProduct', fetchUser, async (req, res) => {
try {
    const { name, price, image, quantity} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const product = new Product({
        name,
        price,
        image,
        quantity,
        user: req.user.id
    });
    const savedProduct = await product.save();
    res.json(savedProduct);
} catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server error');
}
});

//DELETE THE Product


router.delete('/deleteProduct/:id', fetchUser, [], async (req, res) => {
    

try {
    // Find the note to be updated
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    if (product.user.toString() !== req.user.id) {
        return res.status(400).send('Not allowed'); 
    }

    // Delete the note
    product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send('Product has been deleted')
} catch (error) {
    console.error(error.message); 
    res.status(500).send('Internal Server error');
}
});

module.exports = router
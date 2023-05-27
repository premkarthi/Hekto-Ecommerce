const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix  + ext)
    }
})
  
const upload = multer({ storage: storage })
  
const router = express.Router()

router.use('/uploads', express.static('uploads'));

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    },
    images: [String],
    category: {
        type: String,   
        required: true
    } 
})  

const Product = mongoose.model('Product', productSchema);

router.post('/api/products', upload.array('images', 12), async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        images: req.files.map(file => file.filename),
        category: req.body.category2
    });
    try {
        await product.save();
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving product to database');
    }
});

router.get('/api/products', async(req, res) => {
    let products = await Product.find()
    const editURlforImage = products.map(item => {
        const edit = { 
            name: item.name,
            description: item.description,
            price: item.price,
            images: item.images.map(image => `http://localhost:2000/uploads/${image}`) ,
            category: item.category
        }
        return edit 
    })
    res.send(editURlforImage)
})


router.get('/api/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      const data = {
        name: product.name,
        description: product.description,
        price: product.price,
        images: product.images.map(image => `http://localhost:2000/uploads/${image}`) ,
        category: product.category
      };
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving product from database');
    }
  });

 
  

module.exports = router

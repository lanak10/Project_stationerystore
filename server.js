require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const method = require('method-override')
const app = express()
const PORT = 3000
const Product = require('./models/products')
const res = require('express/lib/response')

// ====== Connection to Database ======
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Middleware
app.use(method('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())

// ===== Routes =====

// Index
app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('Index', { products: allProducts })
    })
})

// New
app.get('/products/new', (req, res) => {
    res.render('New')
})

// Delete
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).redirect('/products')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (!err) {
            res.status(200).redirect(`/products/${req.params.id}`)
        } else {
            res.status(400).json(err)
        }
    })
})

app.put('/products/:id/buy', async (req, res) => {
    const foundProduct = await Product.findById(req.params.id)
    // console.log(foundProduct.inventory)
    Product.findByIdAndUpdate(req.params.id, {
        inventory: foundProduct.inventory - 1
    }, { new: true }, (err, updatedProduct) => {

        res.redirect(`/products/${req.params.id}`)
    })
})

// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})

// Edit
app.get('/products/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (!err) {
            res.render('Edit', { product: foundProduct })
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', { product: foundProduct })
    })
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
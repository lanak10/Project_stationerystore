const express = require('express')
const products = require('./models/products')
const app = express()
const PORT = 3000

// Middleware

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// ===== Routes =====

// Index
app.get('/products', (req, res) => {
    res.render('Index')
})

// New
app.get('/products/new', (req, res) => {
    res.render('New')
})

// Delete
app.delete('/products/:id', (req, res) => {
    
})

// Update
// Create
// Edit

// Show
app.get('/products/:id', (req, res) => {
    res.render('Show')
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
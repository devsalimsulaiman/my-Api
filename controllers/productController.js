const ProductModel = require('../models/productModel')
const { getPostData } = require('../utils')


// @desc  Gets All Products
// @route GET api/products
async function getProducts(req, res) {
    try {
        const products = await ProductModel.findAll() // it is a promise

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(products))
    }catch(error) {
        console.log(error)
    }
}


// @desc  Gets single Products
// @route GET api/products/:id
async function getProduct(req, res, id) {
    try {
        const product = await ProductModel.findById(id) // it is a promise

        if(!product) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({messege: 'Product Not Found'}))
        }else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(product))
        }
    }catch(error) {
        console.log(error)
    }
}

// @desc  Creates a Product
// @route POST api/products
async function createProduct(req, res) {
    try {
        const body = await getPostData(req)

        const { title, description, price } = JSON.parse(body)

        const product = {
            title,
            description,
            price
        }

        const newProduct = await ProductModel.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' }) // 201 means created
        return res.end(JSON.stringify(newProduct))


    }catch(error) {
        console.log(error)
    }
}

// @desc  Update a Product
// @route PUT api/products/:id
async function updateProduct(req, res, id) {
    try {
        const product = await ProductModel.findById(id)

        if(!product) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({messege: 'Product Not Found'}))
        }else {
            const body = await getPostData(req)

            const { title, description, price } = JSON.parse(body)

        const productData = {
            title: title || product.title,
            description: description || product.description,
            price: price || product.price
        }

        const updateProduct = await ProductModel.update(id, productData)

        res.writeHead(200, { 'Content-Type': 'application/json' }) // 201 means created
        return res.end(JSON.stringify(updateProduct))

        }

        

    }catch(error) {
        console.log(error)
    }
}

// @desc  deletes single Products
// @route DELETE api/products/:id
async function deleteProduct(req, res, id) {
    try {
        const product = await ProductModel.findById(id) // it is a promise

        if(!product) {
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({messege: 'Product Not Found'}))
        }else {
            await ProductModel.remove(id)
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: `Product with the id: ${id} has been removed`}))
        }
    }catch(error) {
        console.log(error)
    }
}


// To make it visible for use out there
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
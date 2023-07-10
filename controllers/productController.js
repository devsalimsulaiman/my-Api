const ProductModel = require('../models/productModel');


// @desc  Gets Banks
// @route GET api/banks
async function getBanks(req, res) {
    try {
        const banks = await ProductModel.getBanks() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(banks))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets hospitals
// @route GET api/hospitals
async function getHospitals(req, res) {
    try {
        const hospitals = await ProductModel.getHospitals() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(hospitals))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets hotels
// @route GET api/hotels
async function getHotels(req, res) {
    try {
        const hotels = await ProductModel.getHotels() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(hotels))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets pharmacies
// @route GET api/pharmacies
async function getPharmacies(req, res) {
    try {
        const pharmacies = await ProductModel.getPharmacies() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(pharmacies))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets professions
// @route GET api/professions
async function getProfessions(req, res) {
    try {
        const professions = await ProductModel.getProfessions() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(professions))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets restaurants
// @route GET api/restaurants
async function getFood(req, res) {
    try {
        const food = await ProductModel.getFood() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(food))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets schools
// @route GET api/schools
async function getSchools(req, res) {
    try {
        const schools = await ProductModel.getSchools() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(schools))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets security
// @route GET api/security
async function getSecurities(req, res) {
    try {
        const securities = await ProductModel.getSecurities() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(securities))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets shopping
// @route GET api/shopping
async function getShopping(req, res) {
    try {
        const shopping = await ProductModel.getShopping() 

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(shopping))
    }catch(error) {
        console.log(error)
    }
}

// @desc  Gets centers
// @route GET api/centers
async function getCenters(req, res) {
    try {
        const centers = await ProductModel.getCenters() 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(centers))
    }catch(error) {
        console.log(error)
    }
}


// @desc  Gets gas
// @route GET api/gas
async function getGas(req, res) {
    try {
        const gas = await ProductModel.getGas() 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(gas))
    }catch(error) {
        console.log(error)
    }
}





// To make it visible for use out there
module.exports = {
    getBanks,
    getCenters,
    getHospitals,
    getHotels,
    getPharmacies,
    getProfessions,
    getFood,
    getSchools,
    getSecurities,
    getShopping,
    getGas
}

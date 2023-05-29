let banks = require('../data/banks');
let centers = require('../data/centers');
let hospitals = require('../data/hospitals');
let hotels = require('../data/hotels');
let pharmacies = require('../data/pharmacies');
let professions = require('../data/professions');
let food = require('../data/food');
let schools = require('../data/schools');
let securities = require('../data/security');
let shopping = require('../data/shopping');

/*
// get trends
function getTrends() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

*/

// get banks
function getBanks() {
    return new Promise((resolve, reject) => {
        resolve(banks)
    })
}

// get hospitals
function getHospitals() {
    return new Promise((resolve, reject) => {
        resolve(hospitals)
    })
}

// get hotels
function getHotels() {
    return new Promise((resolve, reject) => {
        resolve(hotels)
    })
}

// get pharmacies
function getPharmacies() {
    return new Promise((resolve, reject) => {
        resolve(pharmacies)
    })
}

// get professions
function getProfessions() {
    return new Promise((resolve, reject) => {
        resolve(professions)
    })
}

// get restaurants
function getFood() {
    return new Promise((resolve, reject) => {
        resolve(food)
    })
}

// get schools
function getSchools() {
    return new Promise((resolve, reject) => {
        resolve(schools)
    })
}

// get security
function getSecurities() {
    return new Promise((resolve, reject) => {
        resolve(securities)
    })
}

// get shopping
function getShopping() {
    return new Promise((resolve, reject) => {
        resolve(shopping)
    })
}

// get centers
function getCenters() {
    return new Promise((resolve, reject) => {
        resolve(centers)
    })
}


module.exports = {
    // getTrends,
    getBanks,
    getCenters,
    getHospitals,
    getHotels,
    getPharmacies,
    getProfessions,
    getFood,
    getSchools,
    getSecurities,
    getShopping
}
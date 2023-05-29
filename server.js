const http = require('http');
const { getBanks, getCenters, getHotels, getPharmacies, getProfessions, getFood, getHospitals, getSchools, getSecurities, getShopping } = require('./controllers/productController');



const server = http.createServer((req, res) => {
    if(req.url === '/api/banks' && req.method === 'GET') {
        getBanks(req, res)
    } else if(req.url === '/api/centers' && req.method === 'GET') {
        getCenters(req, res)
    }
    else if(req.url === '/api/hospitals' && req.method === 'GET') {
        getHospitals(req, res)
    }
    else if(req.url === '/api/hotels' && req.method === 'GET') {
        getHotels(req, res)
    }else if(req.url === '/api/pharmacies' && req.method === 'GET') {
        getPharmacies(req, res)
    }
    else if(req.url === '/api/professions' && req.method === 'GET') {
        getProfessions(req, res)
    }
    else if(req.url === '/api/food' && req.method === 'GET') {
        getFood(req, res)
    }
    else if(req.url === '/api/schools' && req.method === 'GET') {
        getSchools(req, res)
    }
    else if(req.url === '/api/securities' && req.method === 'GET') {
        getSecurities(req, res)
    }
    else if(req.url === '/api/shopping' && req.method === 'GET') {
        getShopping(req, res)
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
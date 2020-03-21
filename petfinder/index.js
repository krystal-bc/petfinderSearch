// use the config file, which contains the API key and secret
const config = require('./config.json')

//use <npm install --save @petfinder/petfinder-js> to install the Petfinder JS SDK
const petfinder = require('@petfinder/petfinder-js')
const client = new petfinder.Client({ apiKey: config.key, secret: config.secret })

async function getAnimals() {
    try {
        //the maximum number of pets that can be returned per page is 100
        //use{page: #} to specify which page of results to return
        const response = await client.animal.search({limit: 100})
        return response.data.animals
    }
    catch (error) {
        return error
    }
}

async function getPetById(id) {
    try {
        //the maximum number of pets that can be returned per page is 100
        //use{page: #} to specify which page of results to return
        const response = await client.animal.show(id)
        return response.data.animal
    }
    catch (error) {
        return error
    }
}

async function getOrganization(id) {
    try {
        //the maximum number of pets that can be returned per page is 100
        //use{page: #} to specify which page of results to return
        const response = await client.organization.show(id)
        return response.data.organization
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getAnimals,
    getPetById,
    getOrganization
}
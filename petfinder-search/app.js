
const inquirer = require('inquirer')
const petfinder = require('petfinder')

//main function for searching the Petfinder database
async function search(name) {

    //get a list of animals
    const animals = await petfinder.getAnimals()

    //search through the list to find matches
    const matches = _getMatches(name, animals)

    if (matches.length == 0) {
        console.log('No animal names found, please try a different search.')
    } else {
        //allow the user to make a selection from matches
        const choice = await _pickPet(matches)

        //retrieve the pet they selected
        const pet = await petfinder.getPetById(choice.selection)

        //retrieve the organization where the pet is located
        const organization = await petfinder.getOrganization(pet.organization_id)

        //print some information about the pet
        _printPetDetails(pet, organization)
    }
}

//functions to allow for use by command line
module.exports = {
    search
}

//helper method to filter animals with matching names
const _getMatches = (name, animals) => {
    const lname = name.toLowerCase()
    const matches = animals.filter(a => {
        const temp = a.name.toLowerCase()
        if (temp.includes(lname)) {
            return a
        }
    })
    return matches
}

//prompt the user to select a pet from the list of matching results
const _pickPet = async matches => {

    //simplify the search results
    const displayMatches = matches.map(animal => {
        return ({ name: `${animal.name}\n\tspecies: ${animal.type}\tgender:${animal.gender}`, value: animal.id })
    })

    //use inquirer list prompt to get and return a selection
    return inquirer.prompt([{
        type: 'list',
        pageSize: matches.length,
        name: 'selection',
        message: 'select pet to get details:\n',
        choices: displayMatches,
        //return the id of the selected pet
        validate: () => {
            return selection.value
        }
    }])
}

//helper function to print detailed information about the selected pet
const _printPetDetails = (animal, org) => {
    console.log(`${animal.name}
    \tspecies: ${animal.type}
    \tgender: ${animal.gender}
    \tsize: ${animal.size}
    \tage: ${animal.age}
    \tbreed: ${animal.breeds.primary}
    \tcolor: ${animal.colors.primary}
    \tlocation: ${org.name}
                 ${org.address.city},${org.address.state} ${org.address.postcode}
    \tdescription: ${animal.description}`)
}

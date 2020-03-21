# petfinderSearch
A Javascript app to search for a pet by name in the Petfinder API database

How to Use the Card App CLI and Custom Module Dependencies

1. Go into the petfinder folder. Once inside the folder run: npm install. This will install dependencies listed in the package.json.

2. In the same petfinder folder run: npm install --save @petfinder/petfinder-js. This will allow use of the Petfinder API JS SDK. More info at https://github.com/petfinder-com/petfinder-js-sdk

3. In the petfinder config.json file, you must replace the placeholders for key and secret. More info at https://www.petfinder.com/developers/v2/docs/

4. Go into the petfinder-search folder. Once inside the folder run: npm install. This will install dependencies listed in the package.json.

5. In the petfinder-search folder:

To view the help directions for the CLI run:    node cli.js --help.

To run the petfinder-search CLI:     node cli.js search {query}
    
Browse through the search results using the up and down arrow keys and select the highlighted option using the Enter key. Once you hit Enter, you will get a more detailed description of the selected pet, including of the organization where they are located.

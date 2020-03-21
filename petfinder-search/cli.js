const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search <query>',
        desc: 'enter a pet name to search for',
        handler: argv => {
            app.search(process.argv[3]);
        }
    })
    
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;
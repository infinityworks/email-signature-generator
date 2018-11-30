const handlebars = require('handlebars');
const fs = require('fs');

const config = require('./config.json');

handlebars.registerHelper('toUpperCase', (str) => str.toUpperCase());

var template = handlebars.compile(fs.readFileSync('./signature.html', 'utf8'));
var generated = template(config);

fs.writeFileSync('./generated.html', generated, 'utf-8');


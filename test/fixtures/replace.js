var fs = require('fs');
var folder = './tree/';

fs.readdirSync(folder).forEach(function(v){
    var file = fs.readFileSync(folder + v).toString();

    file = file.replace(/( +)("type": "strong",)/g, '$1$2\n$1"markup": "**",');

    fs.writeFileSync(folder + v, file);
});

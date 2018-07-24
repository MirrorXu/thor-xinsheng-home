

const path  = require('path');
const chalk = require('chalk');
const m = require("./module/module1")



console.log("m.path:" , chalk.green( m.p) )
console.log( chalk.red(__dirname)  )
console.log( chalk.red( path.join(__dirname , "../") )  )
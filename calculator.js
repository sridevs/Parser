const fs = require("fs");
const jison = require("jison");

const bnf = fs.readFileSync("./calculator.jison", "utf8");
const calculator = new jison.Parser(bnf);

module.exports = calculator;

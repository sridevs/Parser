const fs = require("fs");
const jison = require("jison");

const bnf = fs.readFileSync("./grammars/md2html.jison", "utf8");
const md2html = new jison.Parser(bnf);

module.exports = md2html;

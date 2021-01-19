var _ = require('lodash');

function abbreviateString(fullString) {
    if(_.isString(fullString)){
        let strings=fullString.split(" ");
        let firstString=strings[0];
        let abbrivative="";
        if(strings.length>1){
            abbrivative=strings[strings.length-1].charAt(0).toUpperCase()+'.';
         }
        return `${firstString} ${abbrivative}`;
    }
        throw "invalid string";
}


module.exports = { abbreviateString };

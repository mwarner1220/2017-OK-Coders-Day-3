var fs = require('fs');

fs.readFile('text.txt', function(err,data){
	if(err){console.log(err)}
	else{
	console.log("print out our lorim hipster ipsum\n" data.toString());
}
});

function printOut(who, callback){
	return callback(what);
	}


function makeLower(str){
	return str.toLowerCase();
}

var result = printOut("TOMMY", makeLower);

var result2 = printOut("timmy", function(x){
	return x.toUpperCase(x).substring(1,4);
	};

console.log(result2);
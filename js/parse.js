var isCyrillic = function (text) {
    return /[а-я]/i.test(text);
}

function test(){//for word to symb
var element = document.getElementById('input_text');

var str = setElement(element);
var sentense = str.split(" ");	
var Symbols = wordsToCharacters(sentense);

testVar(Symbols, 'output_text');
}


function test1(){//for symb to word
var element = document.getElementById('symbols');

var str = setElement(element);
var sentense = str.split("        ");	
var Symbols = charactersToWords(sentense);

testVar(Symbols, 'output_text_ch');
}



function wordsToCharacters(sentense){//Translates words to symbols

	var Symbols = '';

	for (var i = 0; i < sentense.length; i++) {   
    	for (var j = 0; j < sentense[i].length; j++) {//divide sentense to words
    		if(isCyrillic(sentense[i].charAt(j))){
    			Symbols = Symbols + translateRus(sentense[i].charAt(j)) + '   ';
    		}else{
    			Symbols = Symbols + translate(sentense[i].charAt(j)) + '   ';
    		}
		}

		if(i != sentense.length - 1){
			Symbols = Symbols + '        ';
		}
	}

	return Symbols;
}



function charactersToWords(sentense){//Translates symbols to words 

	// var Symbols = '';

	// for (var i = 0; i < sentense.length; i++) {  
	// 	var parts = sentense[i].split("   ");	
	// 	for (var j = 0; j < parts.length; j++) {
	// 		if(parts[j] != ''){	
 //    			Symbols = Symbols + translateChar(parts[j]);
 //    		}
	// 	}
	// 	Symbols = Symbols + ' ';
	// }

	var Symbols = '';

	for (var i = 0; i < sentense.length; i++) { 
	    var parts = sentense[i].split("   "); 
	    for (var j = 0; j < parts.length; j++) {
	    	if(parts[j] != ''){	
    			if(Lang == 'En'){
    				
    				Symbols = Symbols + translateChar(parts[j]);
    			}else
    			if(Lang == 'Ru'){
    				
    				Symbols = Symbols + translateCharRus(parts[j]);
				}else{
					alert('Виберіть мову!');
				}
			}
		}	
		Symbols = Symbols + ' ';
		
	}

	return Symbols;

}

function setElement(element){//defignes that line you wrote into an element
	var str;
	if (element != null) {
	    str = element.value.toLowerCase();
	}
	else {
    	str = null;
	}

	return str;
}


function testVar(str, id){
	if (str == null) {
		alert(str);
	}else
		document.getElementById(id).value = str;
}
function translateChar(Character) {
	var Symbol;
	switch(Character) {
		case '.-':
			Symbol = 'a';
			break;
		case '-...':
			Symbol = '-...';
			break;
		case '-.-.':
			Symbol = 'c';
			break;
		case '-..':
			Symbol = 'd';
			break;
		case '.':
			Symbol = 'e';
			break;
		case '..-.':
			Symbol = 'f';
			break;
		case '--.':
			Symbol = 'g';
			break;
		case '....':
			Symbol = 'h';
			break;
		case '..':
			Symbol = 'i';
			break;
		case '.---':
			Symbol = 'j';
			break;
		case '-.-':
			Symbol = 'k';
			break;
		case '.-..':
			Symbol = 'l';
			break;	
		case '--':
			Symbol = 'm';
			break;
		case '-.':
			Symbol = 'n';
			break;
		case '---':
			Symbol = 'o';
			break;
		case '.--.':
			Symbol = 'p';
			break;	
		case '--.-':
			Symbol = 'q';
			break;
		case '.-.':
			Symbol = 'r';
			break;
		case '...':
			Symbol = 's';
			break;
		case '-':
			Symbol = 't';
			break;	
		case '..-':
			Symbol = 'u';
			break;
		case '...-':
			Symbol = 'v';
			break;
		case '.--':
			Symbol = 'w';
			break;
		case '-..-':
			Symbol = 'x';
			break;	
		case '-.--':
			Symbol = 'y';
			break;
		case '--..':
			Symbol = 'z';
			break;
		case '.----':
			Symbol = '1';
			break;
		case '..---':
			Symbol = '2';
			break;	
		case '...--':
			Symbol = '3';
			break;
		case '....-':
			Symbol = '4';
			break;
		case '.....':
			Symbol = '5';
			break;
		case '-....':
			Symbol = '6';
			break;
		case '--...':
			Symbol = '7';
			break;
		case '---..':
			Symbol = '8';
			break;
		case '----.':
			Symbol = '9';
			break;
		case '-----':
			Symbol = '0';
			break;
		case 'Fulstop':
			Symbol = '.';
			break;
		case 'Coma':
			Symbol = ',';	
			break;	
		case 'tyre':
			Symbol = '-';	
			break;	
		case 'dvokrapka':
			Symbol = ':';	
			break;																			
	}
	return Symbol;
}
	
function translateCharRus(Character) {
	var Symbol;
	switch(Character) {
		case '.-':
			Symbol = 'а';
			break;
		case '-...':
			Symbol = 'б';
			break;
		case '-.-.':
			Symbol = 'ц';
			break;
		case '-..':
			Symbol = 'д';
			break;
		case '.', '.':
			Symbol = 'е';
			break;
		case '..-.':
			Symbol = 'ф';
			break;
		case '--.':
			Symbol = 'г';
			break;
		case '....':
			Symbol = 'х';
			break;
		case '..':
			Symbol = 'и';
			break;
		case '.---':
			Symbol = 'й';
			break;
		case '-.-':
			Symbol = 'к';
			break;
		case '.-..':
			Symbol = 'л';
			break;	
		case '--':
			Symbol = 'м';
			break;
		case '-.':
			Symbol = 'н';
			break;
		case '---':
			Symbol = 'о';
			break;
		case '.--.':
			Symbol = 'п';
			break;	
		case '--.-':
			Symbol = 'щ';
			break;
		case '.-.':
			Symbol = 'р';
			break;
		case '...':
			Symbol = 'с';
			break;
		case '-':
			Symbol = 'т';
			break;	
		case '..-':
			Symbol = 'у';
			break;
		case '...-':
			Symbol = 'ж';
			break;
		case '.--':
			Symbol = 'в';
			break;
		case '-..-':
			Symbol = 'ь';
			break;	
		case '-.--':
			Symbol = 'ы';
			break;
		case '--..':
			Symbol = 'з';
			break;
		case '---.':
			Symbol = 'ч';
			break;
		case '----':
			Symbol = 'ш';
			break;
		case '.':
			Symbol = 'е';
			break;	
		case '..-..':
			Symbol = 'э';
			break;
		case '..--':
			Symbol = 'ю';
			break;
		case '.-.-':
			Symbol = 'я';
			break;
		case '.----':
			Symbol = '1';
			break;
		case '..---':
			Symbol = '2';
			break;	
		case '...--':
			Symbol = '3';
			break;
		case '....-':
			Symbol = '4';
			break;
		case '.....':
			Symbol = '5';
			break;
		case '-....':
			Symbol = '6';
			break;
		case '--...':
			Symbol = '7';
			break;
		case '---..':
			Symbol = '8';
			break;
		case '----.':
			Symbol = '9';
			break;
		case '-----':
			Symbol = '0';
			break;
		case 'Fulstop':
			Symbol = '.';
			break;
		case 'Coma':
			Symbol = ',';	
			break;	
		case 'tyre':
			Symbol = '-';	
			break;	
		case 'dvokrapka':
			Symbol = ':';	
			break;																			
	}
	return Symbol;
}
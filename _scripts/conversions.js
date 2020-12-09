$(function() {
	errorMessage1 = 'Please enter a value';
 	errorMessage2 = 'Please enter a positive numeric value';
	
 	// Numeric regex
	regexNumeric = /^[0-9.]+$/;
	
	// Numeric regex that includes '-' symbol to validate for a negative number
	regexNumericMinus = /^[0-9.-]+$/;

	// Hide all result divs
	$('#lResult,#wResult,#tResult,#aResult,#cResult,#vResult').hide();
 
	function convertValues(u) {
  		l = $('#'+u+'Amount').val();
 		x = $('#'+u+'Unit1').val();
  		y = $('#'+u+'Unit2').val();
  		d = $('#decimals').val();
  
		if (l=='') {
			alert(errorMessage1);
		} else if (!regexNumeric.test(l)) {
			alert(errorMessage2);
		} else {
		   	switch(u) {
			// 25.4 unit is inches which is 1 metric (cm) inch (2.54) x 10
			// 304.8 unit is feet which is 1 metric (cm) foot (30.48) x 10
			// 914.4 unit is yards which is 1 metric (cm) yard (91.44) x 10 
			case 'l': unitArray=[25.4, 304.8, 914.4, 1609344, 1, 10, 1000, 1000000]; break;
			case 'w': unitArray=[28.3495231, 453.59237, 6350.29318, 1016046.91, 907184.74, 1, 1000, 1000000]; break;
			case 'a': unitArray=[40468564.2, 25899881103.36, 8361.2736, 929.0304, 6.4516, 100000000, 10000000000, 10000, 1]; break;
			case 'c': unitArray=[28316.8466, 764554.858, 1000000]; break;
			case 'v': unitArray=[5.91939047, 4.92892159, 17.7581714, 14.7867648, 28.4130742, 29.5735296, 250, 236.588237, 568.261485, 473.176473, 1136.52297, 946.352946, 4546.09188, 3785.41178, 1, 1000]; break;
			default: break;
		}
   		conversion=unitArray[x]/unitArray[y];
   		result=(l*conversion).toFixed(d);
  		$('#'+u+'Result').show();
   		$('#'+u+'Result').text(l+' '+$('#'+u+'Unit1 :selected').text()+' = '+result+' '+$('#'+u+'Unit2 :selected').text());
  		}
	}
	function clearValues(x) {
		$('#'+x+'Result').hide(); $('#'+x+'Amount').val('');
	}
	$("#lConvert").click(function() {
		convertValues('l');
	});
	$("#wConvert").click(function() {
		convertValues('w');
	});
	$("#aConvert").click(function() {
		convertValues('a');
	});
	$("#cConvert").click(function() {
		convertValues('c');
	});
	$("#vConvert").click(function() {
		convertValues('v');
	});
	$("#tConvert").click(function() {
		l = $('#tAmount').val();
		x = $('#tUnit1').val();
		y = $('#tUnit2').val();
		d = $('#decimals').val();
		result = 0;
	  
		if (l=='') {
			alert(errorMessage1);
		} else if (!regexNumericMinus.test(l)) {
			alert(errorMessage2);
		} else {
			if (x==1 && y==2) {
				result=(l-32)/1.8;
			} else if (x==1 && y==3) {
				result=(0.55555*(l-32)+273.15);
			} else if (x==2 && y==1) {
				result=(l*1.8)+32;
			} else if (x==2 && y==3) {
				result=(l*1)+273.15;
			} else if (x==3 && y==1) {
				result=((l-273.15)*1.8)+32;
			} else if (x==3 && y==2) {
				result=(l*1)-273.15;
			} else {
				result=l;
			}
			result=result.toFixed(d);
			$('#tResult').show();
			$("#tResult").text(l+' '+$("#tUnit1 :selected").text()+' = '+result+' '+$("#tUnit2 :selected").text());
		}
	});
	$("#lClear").click(function() {
		clearValues('l');
	});
	$("#wClear").click(function() {
		clearValues('w');
	});
	$("#tClear").click(function() {
		clearValues('t');
	});
	$("#aClear").click(function() {
		clearValues('a');
	});
	$("#cClear").click(function() {
		clearValues('c');
	});
	$("#vClear").click(function() {
		clearValues('v');
	});
});
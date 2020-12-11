var errorMessage1 = 'Please enter a value';
	var errorMessage2 = 'Please enter a positive numeric value';
	 
	// Numeric regex
	var regexNumeric = /^[0-9.]+$/;
	
	// Numeric regex that includes '-' symbol to validate for a negative number
	var regexNumericMinus = /^[0-9.-]+$/;

	// Hide all result divs
	clearValues()
 
	function convertValues(u) {
		l = document.getElementById(u+"Amount").value;
		x = document.getElementById(u+'Unit1').value;
		y = document.getElementById(u+'Unit2').value;
		d = document.getElementById('decimals').value;
  
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
			
			var unit1 = document.getElementById(u+'Unit1');
			var unit2 = document.getElementById(u+'Unit2');
			var unit1Text = unit1.options[unit1.selectedIndex].text;
			var unit2Text = unit2.options[unit2.selectedIndex].text;

			document.getElementById(u+'Result').innerHTML = l + " " + unit1Text +' = '+result+' '+ unit2Text;
			document.getElementById(u+'Result').style.display = "block";
		}
	}
	function clearValues() { 
		document.getElementById("lResult").style.display = "none";
		document.getElementById("wResult").style.display = "none";
		document.getElementById("tResult").style.display = "none";
		document.getElementById("aResult").style.display = "none";
		document.getElementById("cResult").style.display = "none";
		document.getElementById("vResult").style.display = "none";
	}
	document.getElementById("lConvert").onclick = function() {
		convertValues('l')
	};
	document.getElementById("wConvert").onclick = function() {
		convertValues('w')
	};
	document.getElementById("aConvert").onclick = function() {
		convertValues('a')
	};
	document.getElementById("cConvert").onclick = function() {
		convertValues('c')
	};
	document.getElementById("vConvert").onclick = function() {
		convertValues('v')
	};
	document.getElementById("tConvert").onclick = function() {
		l = document.getElementById("tAmount").value;
		x = document.getElementById('tUnit1').value;
		y = document.getElementById('tUnit2').value;
		d = document.getElementById('decimals').value;
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

			var unit1 = document.getElementById('tUnit1');
			var unit2 = document.getElementById('tUnit2');
			var unit1Text = unit1.options[unit1.selectedIndex].text;
			var unit2Text = unit2.options[unit2.selectedIndex].text;

			document.getElementById('tResult').innerHTML = l + " " + unit1Text +' = '+result+' '+ unit2Text;
			document.getElementById('tResult').style.display = "block";
		}
	};
	document.getElementById("lClear").onclick = function() {
		clearValues();
	};
	document.getElementById("wClear").onclick = function() {
		clearValues();
	};
	document.getElementById("tClear").onclick = function() {
		clearValues();
	};
	document.getElementById("aClear").onclick = function() {
		clearValues();
	};
	document.getElementById("cClear").onclick = function() {
		clearValues();
	};
	document.getElementById("vClear").onclick = function() {
		clearValues();
	};
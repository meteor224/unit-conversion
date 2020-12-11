function unitConversion(unit) {
  var unitValue = document.getElementById(unit+"-amount").value;
  var unit1Option = document.getElementById(unit+'-unit-1');
  var unit2Option = document.getElementById(unit+'-unit-2');
  var unit1 = unit1Option.value;
  var unit2 = unit2Option.value;
  var decimalPoints = document.getElementById('decimals').value;
  var regexNumericMinus = /^[0-9.-]+$/;
  // length conversion factors to millimetres
  var inch = 25.4;
  var foot = 304.8;
  var yard = 914.4;
  var mile = 1609344;
  var millimetre = 1;
  var centimetre = 10;
  var metre = 1000;
  var kilometre = 1000000;
  // weight conversion factors to grams
  var ounce = 28.3495231;
  var pound = 453.59237;
  var stone = 6350.29318;
  var ukTon = 1016046.91;
  var usTon = 907184.74;
  var gram = 1;
  var kilo = 1000;
  var metricTon = 1000000;
  // square area conversion factors to millimetres
  var acres = 40468564.2;
  var squareMile = 25899881103.36;
  var squareYard = 8361.2736;
  var squareFeet = 929.0304;
  var squareInche = 6.4516;
  var hectare = 100000000;
  var squareKilometre = 10000000000;
  var squareMetre = 10000;
  var squareCentimetre = 1;
  // cubic area conversion factors to millimetres
  var cubicFoot = 28316.8466;
  var cubicYard = 764554.858;
  var cubicMetre = 1000000;
  // volume conversion factors to millilitres
  var ukTeaspoon = 5.91939047;
  var usTeaspoon = 4.92892159;
  var ukTablespoon = 17.7581714;
  var usTablespoon = 14.7867648;
  var ukFluidOunce = 28.4130742;
  var usFluidOunce = 29.5735296;
  var ukCup = 250;
  var usCup = 236.588237;
  var ukPint = 568.261485;
  var usPint = 473.176473;
  var ukQuart = 1136.52297;
  var usQuart = 946.352946;
  var ukGallon = 4546.09188;
  var usGallon = 3785.41178;
  var millilitre = 1;
  var litre = 1000;

  if (unitValue.length == 0 || unitValue < 0 || isNaN(unitValue)) {
    alert('Please enter a positive number');
  } else {
    if (unit == "temperature") {
      if (unit1==1 && unit2==2) {
        result=(unitValue-32)/1.8;
      } else if (unit1==1 && unit2==3) {
        result=(0.55555*(unitValue-32)+273.15);
      } else if (unit1==2 && unit2==1) {
        result=(unitValue*1.8)+32;
      } else if (unit1==2 && unit2==3) {
        result=(unitValue*1)+273.15;
      } else if (unit1==3 && unit2==1) {
        result=((unitValue-273.15)*1.8)+32;
      } else if (unit1==3 && unit2==2) {
        result=(unitValue*1)-273.15;
      } else {
        result=unitValue;
      }

      result=result.toFixed(decimalPoints);
      document.getElementById(unit + '-result').innerHTML = unitValue + " " + unit1Option.options[unit1Option.selectedIndex].text + ' = ' + result + ' ' + unit2Option.options[unit2Option.selectedIndex].text;
      document.getElementById(unit + '-result').style.display = "block";
    
    } else {
      switch(unit) {
        case 'length': unitArray = [inch, foot, yard, mile, millimetre, centimetre, metre, kilometre]; break;
        case 'weight': unitArray=[ounce, pound, stone, ukTon, usTon, gram, kilo, metricTon]; break;
        case 'square-area': unitArray=[acres, squareMile, squareYard, squareFeet, squareInche, hectare, squareKilometre, squareMetre, squareCentimetre]; break;
        case 'cubic-area': unitArray=[cubicFoot, cubicYard, cubicMetre]; break;
        case 'volume': unitArray=[ukTeaspoon, usTeaspoon, ukTablespoon, usTablespoon, ukFluidOunce, usFluidOunce, ukCup, usCup, ukPint, usPint, ukQuart, usQuart, ukGallon, usGallon, millilitre, litre]; break;
        default: break;
      };

      conversion = unitArray[unit1] / unitArray[unit2];
      result = (unitValue * conversion).toFixed(decimalPoints);
      document.getElementById(unit + '-result').innerHTML = unitValue + " " + unit1Option.options[unit1Option.selectedIndex].text + ' = ' + result + ' ' + unit2Option.options[unit2Option.selectedIndex].text;
      document.getElementById(unit + '-result').style.display = "block";
    };
  };
};

function clearValues() { 
  document.getElementById("length-result").style.display = "none";
  document.getElementById("weight-result").style.display = "none";
  document.getElementById("temperature-result").style.display = "none";
  document.getElementById("square-area-result").style.display = "none";
  document.getElementById("cubic-area-result").style.display = "none";
  document.getElementById("volume-result").style.display = "none";
};
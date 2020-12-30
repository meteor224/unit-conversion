function unitConversion(unit) {
  let unitValue = parseInt(document.getElementById(unit + '-amount').value);
  let unit1Option = document.getElementById(unit + '-unit-1');
  let unit2Option = document.getElementById(unit + '-unit-2');
  let unit1 = unit1Option.value;
  let unit2 = unit2Option.value;
  let decimalPoints = parseInt(document.getElementById('decimals').value);
  let result, unitArray, conversion
  
  // length conversion factors to millimetres
  const inch = 25.4, foot = 304.8, yard = 914.4, mile = 1609344, millimetre = 1, 
    centimetre = 10, metre = 1000, kilometre = 1000000;
  
    // weight conversion factors to grams
  const ounce = 28.3495231, pound = 453.59237, stone = 6350.29318, ukTon = 1016046.91, 
    usTon = 907184.74, gram = 1, kilo = 1000, metricTon = 1000000;
  
    // square area conversion factors to millimetres
  const acres = 40468564.2, squareMile = 25899881103.36, squareYard = 8361.2736, 
    squareFeet = 929.0304, squareInche = 6.4516, hectare = 100000000, 
    squareKilometre = 10000000000, squareMetre = 10000, squareCentimetre = 1;
  
    // cubic area conversion factors to millimetres
  const cubicFoot = 28316.8466, cubicYard = 764554.858, cubicMetre = 1000000;
  
  // volume conversion factors to millilitres
  const ukTeaspoon = 5.91939047, usTeaspoon = 4.92892159, ukTablespoon = 17.7581714, 
    usTablespoon = 14.7867648, ukFluidOunce = 28.4130742, usFluidOunce = 29.5735296, 
    ukCup = 250, usCup = 236.588237, ukPint = 568.261485, usPint = 473.176473, 
    ukQuart = 1136.52297, usQuart = 946.352946, ukGallon = 4546.09188, 
    usGallon = 3785.41178, millilitre = 1, litre = 1000;

  if (unitValue.length == 0 || isNaN(unitValue)) {
    alert('Please enter a number');
  } else {
    if (unit == 'temperature') {
      if (unit1 == 1 && unit2 == 2) {
        result = (unitValue - 32) / 1.8;
      } else if (unit1 == 1 && unit2 == 3) {
        result = (0.55555 * (unitValue - 32) + 273.15);
      } else if (unit1 == 2 && unit2 == 1) {
        result = (unitValue * 1.8) + 32;
      } else if (unit1 == 2 && unit2 == 3) {
        result = (unitValue * 1) + 273.15;
      } else if (unit1 == 3 && unit2 == 1) {
        result = ((unitValue-273.15) * 1.8) + 32;
      } else if (unit1 == 3 && unit2 == 2) {
        result = (unitValue * 1) - 273.15;
      } else if (unit1 == unit2) {
        result = unitValue;
      } else {
        result = unitValue;
      }

      result = result.toFixed(decimalPoints);
      document.getElementById(unit + '-result').innerHTML = unitValue + ' ' + unit1Option.options[unit1Option.selectedIndex].text + ' = ' + result + ' ' + unit2Option.options[unit2Option.selectedIndex].text;
      document.getElementById(unit + '-result').style.display = 'block';
    
    } else {
      switch(unit) {
        case 'length': unitArray = [inch, foot, yard, mile, millimetre, centimetre, metre, kilometre]; break;
        case 'weight': unitArray=[ounce, pound, stone, ukTon, usTon, gram, kilo, metricTon]; break;
        case 'square-area': unitArray=[acres, squareMile, squareYard, squareFeet, squareInche, hectare, squareKilometre, squareMetre, squareCentimetre]; break;
        case 'cubic-area': unitArray=[cubicFoot, cubicYard, cubicMetre]; break;
        case 'volume': unitArray=[ukTeaspoon, usTeaspoon, ukTablespoon, usTablespoon, ukFluidOunce, usFluidOunce, ukCup, usCup, ukPint, usPint, ukQuart, usQuart, ukGallon, usGallon, millilitre, litre]; break;
        default: break;
      }

      conversion = unitArray[unit1] / unitArray[unit2];
      result = (unitValue * conversion).toFixed(decimalPoints);
      document.getElementById(unit + '-result').innerHTML = unitValue + ' ' + unit1Option.options[unit1Option.selectedIndex].text + ' = ' + result + ' ' + unit2Option.options[unit2Option.selectedIndex].text;
      document.getElementById(unit + '-result').style.display = 'block';
    }
  }
}
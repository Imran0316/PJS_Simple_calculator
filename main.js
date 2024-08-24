function calcul() {
  
   const firstValue = parseFloat(document.getElementById("Fvalue").value);
   const sign = document.getElementById("Esign").value;
   const secondValue = parseFloat(document.getElementById("Svalue").value);
   let result;

 
   if (sign === "+") {
       result = firstValue + secondValue;
   } else if (sign === "-") {
       result = firstValue - secondValue;
   } else if (sign === "*") {
       result = firstValue * secondValue;
   } else if (sign === "/") {
       result = firstValue / secondValue;
   } else if (sign === "%") {
    result = firstValue % secondValue;
   }else {
       result = "Invalid sign";
   }

  
   document.getElementById("output").textContent = result;
}

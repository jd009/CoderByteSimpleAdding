(function(){

   function createNumberArray (upperLimit)
   {
      var numberArray = [];
      for(var i =1; i <= upperLimit; i++)
      {
         numberArray.push(i);
      }
      return numberArray;
   }

   function addNumbers (num1, num2)
   {
      return num1 + num2;
   }

   function simpleAdding (upperLimit)
   {
      var arrayToSum = createNumberArray(upperLimit);
      var sum = arrayToSum.reduce(addNumbers);
      return sum;
   }

   var inputNumber1 = document.getElementById("Input Number 1").textContent;
   document.getElementById("Sum 1").innerHTML = simpleAdding(inputNumber1);

   var inputNumber2 = document.getElementById("Input Number 2").textContent;
   document.getElementById("Sum 2").innerHTML = simpleAdding(inputNumber2);
})();
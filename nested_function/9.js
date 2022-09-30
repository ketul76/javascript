function triangle(base,height){        // declaring a function triangle
  // input of this Function is base and hight
  function square(side){               // declaring a nested inner function
    // this square function input is side
    return side*side;
      // pehla 3 ni value side ma avse ane 3 * 3 thase
      //pchi 4 ni value side ma avse ane 4 * 4 thase
  }
  //tena pachi square(base) ni value 9 and square(hight) ni value 16
   return Math.sqrt(square(base) + square(height));
   // etle 16 + 9 = 25 thase pachi teno sqrt 5 output madse
}
console.log(triangle(3,4));   // calling MAin Function.
function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
}

  // Call add() 3 times  
  console.log(add());
  console.log(add());
  console.log(add());
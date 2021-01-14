function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    array.push(sourceArray[i] * -1);
  }
  return array;
}

function mapToNoChange(sourceArray){
  let arr = [];
  for(let i = 0; i < sourceArray.length; i++){
    arr.push(sourceArray[i]);
  }
  return arr;
}

function mapToDouble(sourceArray){
  let array = [];
  for(const i in sourceArray){
    array.push(sourceArray[i] * 2);
  }
  return array;
}

function mapToSquare(sourceArray){
  let array = [];
  for(const i in sourceArray){
    array.push(sourceArray[i] ** 2);
  }
  return array;
}

function reduceToTotal(sourceArray, startingPoint){
  let x;
  startingPoint? x = startingPoint : x = 0;
  for(let i = 0; i < sourceArray.length; i++){
    x += sourceArray[i];
    console.log(x);
  }
  return ;
}

function reduceToAllTrue(sourceArray){
  for(let i = 0; i < sourceArray.length; i++){
    !sourceArray[i]? false : true;
  }
  return true; 
}

function reduceToAnyTrue(sourceArray){}
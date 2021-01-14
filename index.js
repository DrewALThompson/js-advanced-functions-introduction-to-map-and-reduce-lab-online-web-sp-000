function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    let neg = sourceArray[i] * -1;
    array.push(neg);
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

function mapToDouble(sourceArray){}

function mapToSquare(sourceArray){}

function reduceToTotal(sourceArray, startingPoint){}

function reduceToAllTrue(sourceArray){}

function reduceToAnyTrue(sourceArray){}
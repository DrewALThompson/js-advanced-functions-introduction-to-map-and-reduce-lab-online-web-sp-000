function mapToNegativize(sourceArray){
  let array = [];
  for(let i = 0; i < sourceArray.length; i++){
    [i] = [i]*-1;
    array.push([i]);
  }
  array;
}

function mapToNoChange(sourceArray){}

function mapToDouble(sourceArray){}

function mapToSquare(sourceArray){}

function reduceToTotal(sourceArray, startingPoint){}

function reduceToAllTrue(sourceArray){}

function reduceToAnyTrue(sourceArray){}
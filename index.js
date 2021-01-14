function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    let neg = sourceArray[i] * -1;
    array.push(neg);
  }
  array;
  console.log(array);
}

function mapToNoChange(sourceArray){}

function mapToDouble(sourceArray){}

function mapToSquare(sourceArray){}

function reduceToTotal(sourceArray, startingPoint){}

function reduceToAllTrue(sourceArray){}

function reduceToAnyTrue(sourceArray){}
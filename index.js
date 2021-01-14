function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    console.log(sourceArray[i])
    let neg = sourceArray[i] * -1
    console.log(neg)
    array.push(neg);
  }
  array;
}

function mapToNoChange(sourceArray){}

function mapToDouble(sourceArray){}

function mapToSquare(sourceArray){}

function reduceToTotal(sourceArray, startingPoint){}

function reduceToAllTrue(sourceArray){}

function reduceToAnyTrue(sourceArray){}
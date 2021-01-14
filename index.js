function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    console.log([i])
    let neg = [i] * -1
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
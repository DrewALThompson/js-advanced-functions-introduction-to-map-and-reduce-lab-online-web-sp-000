function mapToNegativize(sourceArray){
  let array = [];
  for(const i in sourceArray){
    let ii = [i]* -1;
    array.push(ii);
  }
  array;
}

function mapToNoChange(sourceArray){}

function mapToDouble(sourceArray){}

function mapToSquare(sourceArray){}

function reduceToTotal(sourceArray, startingPoint){}

function reduceToAllTrue(sourceArray){}

function reduceToAnyTrue(sourceArray){}
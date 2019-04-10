// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
          return blockNumber - 42;
    } else {
          return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(blockNumber){
      return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination){
  if (start < destination){
    return (destination - start) *264;
  }  else {
    return (start - destination) *264;
}
}

function calculatesFarePrice(start, destination){
        const distance = distanceTravelledInFeet(start, destination);


    if (distance <= 400){
      return 0;
    } elseif {(ddistance > 400 && distance <= 2000){
      return
    }

    }





}

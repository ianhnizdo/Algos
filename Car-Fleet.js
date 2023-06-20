var carFleet = function (target, position, speed) {
  const sorted = position
    .map((el, i) => [el, speed[i]])
    .sort((a, b) => a[0] - b[0]);

  // console.log(sorted);

  const stack = [];
  // console.log(sorted);
  for (let j = sorted.length - 1; j > -1; j--) {
    stack.push((target - sorted[j][0]) / sorted[j][1]);
    // console.log(stack)
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }
  // console.log(stack)
  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

var carFleet2 = function (target, position, speed) {
  const times = position
    .map((el, i) => [el, speed[i]])
    .sort((a, b) => a[0] - b[0])
    .map((el, i) => (target - el[0]) / el[1]);
  console.log(times);

  let stack = [];

  for (const coord of times) {
    const prev = () => stack[stack.length - 1] <= coord;
    while (stack.length && prev()) stack.pop();
    stack.push(coord);
  }
  return stack.length;
};

const checker = function (coordinate, stack) {};

console.log(carFleet2(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

var carFleet3 = function (target, position, speed) {
  let fleets = 0;
  const map = new Map();

  for (let i = 0; i < position.length; i++) {
    map.set(position[i], speed[i]);
  }

  const arr = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);

  //we now have it sorted, what can happen now is we use a while loop on this until the array is empty
  while (arr.length > 0) {
    let hit = 0;
    //Firstly we need to probably make a loop from beginning to end to update the positions
    //If any position is greater than the vehicle in front then we adjust the speed to that vehicle should it exist
    //Then if we make it to the target or greater we begin the pop procedure, all the vehicles in front should be just one fleet
    for (let i = arr.length - 1; i >= 0; i--) {
      const cur = arr[i];
      const next = i === arr.length - 1 ? null : arr[i + 1];
      //   // console.log(cur, next)

      cur[0] += cur[1];
      if (next && cur[0] >= next[0]) {
        cur[0] = next[0];
        cur[1] = next[1];
      }
    }
    let prev;
    while (arr.length > 0 && arr[arr.length - 1][0] >= target) {
      const pop = arr[arr.length - 1][0];
      arr.pop();
      if (pop !== prev) {
        hit += 1;
      }
      prev = pop;
    }
    fleets += hit;
  }

  return fleets;
};

// console.log('hi')
console.log(carFleet3(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet3(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]));

/*
    while(arr[arr.length-1] !=='-'){
        //This will keep track of how many fleets hit the target. Never be greater than 1.
        let hit = 0;

        for(let i = 0; i<arr.length; i++){
            const cur = arr[i];
            const prev = i===0 ? null : arr[i-1];

            //update the position
            cur[0]=cur[0]+cur[1];

            //This is should one car catch up or exceed another. They need to match
            if(prev && prev !=='-' && cur[0]>=prev[0]){
                //update the position to previous
                cur[0]=prev[0]
                //update the speed to previous
                cur[1]=prev[1]
            }

            if(cur[0]>=target){
                hit= hit>1 ? hit : 1;

                fleets+=hit;
            }

        }
    }

*/

var carFleet = function (target, position, speed) {
  const sorted = position
    .map((el, i) => [el, speed[i]])
    .sort((a, b) => a[0] - b[0]);

  // console.log(sorted);

  const stack = [];
// console.log(sorted);
  for (let j = sorted.length - 1; j > -1; j--) {
    stack.push((target-sorted[j][0])/sorted[j][1])
    // console.log(stack)
    if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
      stack.pop()
    }
  }
  // console.log(stack)
  return stack.length;
};

console.log(carFleet(12, [10,8,0,5,3],[2,4,1,1,3]))
// console.log(carFleet)

// console.log(
//   carFleet(
//     31,
//     [5, 26, 18, 25, 29, 21, 22, 12, 19, 6],
//     [7, 6, 6, 4, 3, 4, 9, 7, 6, 4]
//   )
// );

// var carFleet = function (target, position, speed) {
//   const sorted = position
//     .map((el, i) => [el, speed[i]])
//     .sort((a, b) => a[0] - b[0]);

//   //Now we have the sorted array with the furthest car in front with its correspondding position.

//   const times = Array.from(sorted, (x, i) => (target - x[0]) / x[1]);

//   const stack = [];
//   let hold;
//   console.log(times);
//   if (times.length >= 2) {
//     for (let j = times.length - 1; j >= 0; j--) {
//       const last = times[j];
//       const second = times[j - 1];
//       // console.log(last, second);
//       if(hold && last>hold){
//         stack.push(hold);
//         hold=undefined;
//       }
//       if(second<=last && !hold){
//         hold=last;
//       }
//       else {
//        stack.push(last);
//        // console.log(stack);
//      }

//       // if (second <= last || hold) {
//       //   if (hold && second > hold) {
//       //     stack.push(hold);
//       //     // console.log(stack)
//       //     hold = undefined;
//       //   }
//       //   hold = last;
//       //   // console.log(second, hold);
//       // }
//     }
//   } else return 1;
//   console.log(stack);
//   return stack.length;
// };


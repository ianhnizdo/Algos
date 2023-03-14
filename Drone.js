function calcDroneMinEnergy(route) {
    // your code goes here
    let needed = -Infinity

    let first = route[0][2];

    route.forEach(arr=>{
        let cur = arr[2];
        if(cur-first>needed) needed=cur-first;
    })
    return needed;
  }

  console.log(calcDroneMinEnergy([[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]]))
  console.log(calcDroneMinEnergy([[0,2,2], [3,5,38], [9, 20, 6], [10, 12, 15], [10, 10, 8]]))

  
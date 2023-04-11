var carFleet = function (target, position, speed) {
  const sorted = position
    .map((el, i) => [el, speed[i]])
    .sort((a, b) => a[0] - b[0]);
//   console.log(sorted);

  //Now we have the sorted array with the furthest car in front with its correspondding position.
  const stack = [];

  console.log(sorted)
  const times = Array.from(sorted, (x, i) => (target - x[0]) / x[1]);
  console.log(times);

  if(times.length>=2){
    for(let j=times.length-1;j>=0;j--){
        const last = times[j];
        const second=times[j-1];
        if(second<=last){
            times.pop();
            times.pop();
            times.push(last)
        }
    }
    return times.length;
  }else return 1;

};

// console.log(carFleet(10, [3, 5, 7], [3, 2, 1]));
// console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]));
// console.log(carFleet(100,[0,2,4],[4,2,1]))
console.log(carFleet(31,[5,26,18,25,29,21,22,12,19,6], [7,6,6,4,3,4,9,7,6,4]))
/*

Step 1. Understand the Problem

Input target, position, speed

We have n cars going to the same destination along a one-lane road. Destination is target miles away.

So we basically have cars going to a target destination.

Position and speed, both are arrays of length n. position array details position of the ith car and the speed is the speed of the ith car (mph)

Cars cannot pass car ahead of it as its a one-lane road. It can only catch up to it and drive bumper to bumper at the same speed.
Faster car will slow down to match the slower car's speed.

Distance between two cars is ignored.

Car fleet, a non empty set of cars driving at the same position and same speed. A single car is also a car fleet.

If one car catches up to a car fleet than it is considered a car felet.

Step 2. Examples

target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3]
output 3
car 1, position 10, speed 2
car 2 position 8, speed 4
2mph, in 1 hour it gets to 12
4mph, in 1 hour it gets to 12

car 3, position 0, speed 1
That thing will never catch up to anything ahead and there is nothing behind it

car 4 position 5, speed 1
car 5 position 3, speed 3

Car 5 will most certainly catch up to 4

target=10, position=[3], speed=[3]

That's just one car, the output will automatically be 1

target=100, position-[0,2,4], speed=[4,2,1]

position 0, but speed 4 and 100 miles to go
position 2, speed 2, 98 miles to go
position 4, speed 1, 96 miles to go

Yeah this is one

In one hour
car 1 will have its positon be 4 as will 2. car 3 will be at position 5.

At this point the faster car slows down to 2, by the next turn everyone is going 1
We have only one convoy

Essentially all cars will reach the destination the question is whether or not they will be by themselves or in a fleet of others


Step 3. Method

The trick is how to figure out the number of convoys by keeping track of every cars position at a given time.

We know that at most there can only be one convoy for all the cars.

We know that how many convoys there will be depends on the relation between cars speed and position.

We know that if one car fleet reaches another exactly or seems like it will surpass it then they will merge.

There is a way to do this by finding the difference between a cars position and the target then dividing that differnce by the cars speed. That will tell you how long it will take for a car at present course to reach the target ignoring the one-lane restriction.

Now the big issue is to find out what cars will converge and adjust teh speeds while seeing how that will affect the final result. It is entirely possible that if one fleet converges that it would prevent the convergence with another fleet so we have to adjust what fleet will be encountered first on the road, adjust the faster fleets speed and then see if it will meet the fleet in front. It may or may not

So lets just grab the time needed for every fleet to complete its journey into an array.

Now we need to examine that array

[[3,3],[5,2],[7,1]] position, then speed, target is 10
[2.33,2.5,3]
Its obvious that the car with speed 3 will reach up to the slower cars in front. Rounding up it will take every car 3 seconds to reach the destination.

Cars with larger time will take precedence assuming that they are ahead.

Perhaps the way to do this would be make an object of all the vehicles and then get the entries?

The trick is to get them sorted by positoin but still keep their corresponding speeds

That would require an object
*/

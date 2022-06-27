const nums = [12, 4, 78, 34, 11, 15, 1, 89];


const greaterThan5 = nums.filter((num) => num > 5);
console.log(greaterThan5);

const mapObj = nums.map((num) => {
  return {num: num}
})
console.log(mapObj);

const reducedArray = nums.reduce((acc, cur) => {
  return acc * cur;
})
console.log(reducedArray);


function findMax(...nums) {
  let curMax = nums[0];

  for (const num of nums) {
    if (num > curMax) {
      curMax = num
    }
  }
  return curMax;
}
console.log(findMax(...nums));


function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];

	for (const num of nums) {
		if (num > curMax) {
			curMax = num;
    }
    
    if (num < curMin) {
      curMin = num
    }
	}
  return [curMin, curMax];
}
const [min, max] = (findMinMax(...nums));
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds)
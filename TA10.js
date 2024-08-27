function getSum(nums) {
    const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum);
}

const nums = [1, 2, 3, 4, 5];
getSum(nums);
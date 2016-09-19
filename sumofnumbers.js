/**
 * Solving Experience E26
 * Created by YosupYang on 9/18/16.
 */

const list = [1, 2, 3, 4];

function sumFor(numbers) {
  let sum = 0;

  for (let i of numbers) {
    sum += i;
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(numbers2) {
  let sum2 = 0
  let i2 = 0;
  while (i2 < numbers2.length) {
    sum2 += numbers2[i2];
    i2++;
  }
  return sum2;
}

console.log(sumWhile(list));

function sumRecursion(numbers3)
{
  if (numbers3 === 0)
  {
    return 0;
  }
  return numbers3[0] + sumRecursion(numbers3.slice(1, numbers3.length));
}

console.log(sumRecursion(list));

function sumTheSimpleWay(numbers4)
{
  return _.reduce(numbers4, function memoize(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(list));
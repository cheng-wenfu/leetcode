/**
 * leetcode 1200 最小绝对差
 * 1. 先对数组从小到大排序
 * 2. 初始化最小绝对差 min 为 2e6，然后每两个数值的绝对差 abs，与 min 比较
 *    a. 如果相等，当前数值对 push 进数组
 *    b. abs 小于 min， 清空 result，重新寻找数值对
 * 3. 最后返回 result
 * 排序 O(nlogn) + O(n)
 * 
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a-b)
  min = 2e6
  let result = []
  for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i]
      let b = arr[i + 1]
      let abs = Math.abs(a - b)
      if (abs < min) {
          min = abs
          result = []
          result.push([a, b])
      } else if (abs === min) {
          result.push([a, b])
      }
  }
  return result
};
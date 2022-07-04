/**
 * leetcode 17 电话号码的字符组合
 * 暴力解法
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = []
  for(let i = 0; i < digits.length; i++) {
      let charArr = map[digits[i]]
      if (result.length) {
          result = result.reduce((acc, cur) => {
            let temp = []
            for (let i = 0; i < charArr.length; i++) {
              temp.push(cur + charArr[i])
            }
            acc.push(...temp)
            return acc
          }, [])
      } else {
          result = charArr.split('')
      }
  }
  return result
};

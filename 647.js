/**
 * leetcode 647 回文子串
 */

//--------------------------------------
// 方法1 暴力解法，时间复杂度 O(n^3)
/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  let len = s.length
  let result = len
  for (let i = 2; i <= len; i++) {
      result += countStrsByLen(s, i)
  }
  return result
};

function countStrsByLen (s, len) {
  let result = 0
  for (let i = 0; i < s.length - len + 1; i++) {
      let _s = s.slice(i, i + len)
      if (checkSubStr(_s)) {
          result += 1
      }
  }
  return result
}

// 判断是否为回文串
function checkSubStr (s) {
  let i = 0
  let j = s.length - 1
  while (i < j) {
      if(s[i] !== s[j]) {
          return false
      }
      ++i
      --j
  }
  return true
}

let a = countSubstrings('aaa')
console.log(a)

//----------------------------
// 方法2 ，中心拓展法
// 

function countSubstrings2 (s) {
  const len = s.length
  let ans = 0
  // 总共有 2
  for(let i = 0; i < 2 * len - 1; i++) {
    // 中心点，奇偶树，总共有 2 * n - 1 组回文中心
    let l = Math.floor(i / 2)
    let r = l + i % 2
    while (l >= 0 && r < len && s[l] === s[r]) {
      --l
      ++r
      ans++
    }
  }
  return ans
}
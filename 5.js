// leetcode 5 最长回文子串

/**
 * 中心拓展法
 * @param {string} s 
 */
var longestPalindrome = function (s) {
  let len = s.length
  let ans = ''
  for (let i = 0; i < 2 * len - 1; i++) {
    let l = Math.floor(i / 2)
    let r = l + i % 2
    while (l >= 0 && r < len && s[l] === s[r]) {
        --l
        ++r
    }
    let _ans = s.slice(l+1, r)
    if (_ans.length > ans.length) {
      ans = _ans
    }
  }
  return ans
}

console.log(longestPalindrome('babad'))
/**
 * leetcode 验证回文子串
 * 1. 先将不合法的字符去除，并全部转成小写
 * 2. 双指针法判断是否为回文串
 * 
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const _s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let len = _s.length
  if (len === 0) return  true
  let i  = 0
  let j = len - 1
  while (i < j) {
      if (_s[i] !== _s[j]) return false
      ++i
      --j
  } 
  return true
};
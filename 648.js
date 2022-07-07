/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
  const dictionarySet = new Set()
  for (let i = 0; i < dictionary.length; i++) {
      dictionarySet.add(dictionary[i])
  }
  const words = sentence.split(' ')
  for (let i = 0; i < words.length; i++) {
      const word = words[i]
      for (let j = 0; j < word.length; j++) {
          let str = word.substring(0, 1 + j)
          if (dictionarySet.has(str)) {
              words[i] = str
              break
          }
      }
  }
  return words.join(' ');
};
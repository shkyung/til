/**
 * https://leetcode.com/problems/rearrange-spaces-between-words
 * Runtime: 80 ms, faster than 64.79% of JavaScript online submissions for Rearrange Spaces Between Words.
 * Memory Usage: 38.5 MB, less than 74.65% of JavaScript online submissions for Rearrange Spaces Between Words.
 */
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let isWord = false
  let temp = ''
  const arr = text.split('')

  const { spaceCount, wordCount, wordArr } = arr.reduce(
    (accum, val, i) => {
      if (val === ' ') {
        accum.spaceCount += 1
        if (isWord) {
          accum.wordCount += 1
          isWord = false
          accum.wordArr.push(temp)
          temp = ''
        }
      } else {
        isWord = true
        temp += val
      }
      if (i === arr.length - 1 && isWord) {
        accum.wordCount += 1
        accum.wordArr.push(temp)
        temp = ''
      }
      return accum
    },
    {
      spaceCount: 0,
      wordCount: 0,
      wordArr: []
    }
  )

  const space = ~~(spaceCount / (wordCount - 1))
  const remainSpace =
    wordCount === 1 ? spaceCount : spaceCount % (wordCount - 1)

  let spaceStr = ''
  let remainSpaceStr = ''
  for (let i = 0; i < space; i++) {
    spaceStr += ' '
  }
  for (let j = 0; j < remainSpace; j++) {
    remainSpaceStr += ' '
  }

  return wordArr
    .map((word, i) => {
      if (i === wordArr.length - 1) {
        return word + remainSpaceStr
      } else {
        return word + spaceStr
      }
    })
    .join('')
}

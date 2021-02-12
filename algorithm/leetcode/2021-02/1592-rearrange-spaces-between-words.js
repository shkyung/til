/**
 * https://leetcode.com/problems/rearrange-spaces-between-words
 * Runtime: 72 ms, faster than 95.07% of JavaScript online submissions for Rearrange Spaces Between Words.
 * Memory Usage: 38.8 MB, less than 31.69% of JavaScript online submissions for Rearrange Spaces Between Words.
 */
const getSpaceStr = (n) => Array(n).fill(' ').join('')
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
      function _handleIfWord() {
        accum.wordCount += 1
        isWord = false
        accum.wordArr.push(temp)
        temp = ''
      }
      if (val === ' ') {
        accum.spaceCount += 1
        if (isWord) {
          _handleIfWord()
        }
      } else {
        isWord = true
        temp += val
      }
      if (i === arr.length - 1 && isWord) {
        _handleIfWord()
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
  const spaceStr = getSpaceStr(space)
  const remainSpaceStr = getSpaceStr(remainSpace)

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
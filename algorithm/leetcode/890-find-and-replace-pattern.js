/**
 * https://leetcode.com/problems/find-and-replace-pattern
 * Runtime: 88 ms, faster than 41.30% of JavaScript online submissions for Find and Replace Pattern.
 * Memory Usage: 41.3 MB, less than 26.09% of JavaScript online submissions for Find and Replace Pattern.
 */
/**
 * @param {string[]} word
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const ret = words.reduce((accum, word) => {
    let map = {}

    const changedWord = [...word]
      .map((spell, i) => {
        if (!map[pattern[i]] && !Object.values(map).includes(spell)) {
          map[pattern[i]] = spell
        }
        const match = Object.keys(map).find((key) => map[key] === spell)

        if (match) {
          spell = spell.replace(new RegExp(spell), match)
        }
        return spell
      })
      .join('')

    if (changedWord === pattern) {
      accum.push(word)
    }
    return accum
  }, [])

  return ret
}

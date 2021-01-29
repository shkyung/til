/**
 * https://leetcode.com/problems/design-browser-history
 * Runtime: 188 ms, faster than 96.84% of JavaScript online submissions for Design Browser History.
 * Memory Usage: 48.7 MB, less than 54.21% of JavaScript online submissions for Design Browser History.
 */
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = [homepage]
  this.index = 0
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  if (this.index !== this.stack.length - 1) {
    this.stack = this.stack.slice(0, this.index + 1)
  }
  this.stack.push(url)
  this.index += 1
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (this.index - steps >= 0) {
    this.index -= steps
  } else {
    this.index = 0
  }
  return this.stack[this.index]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  const len = this.stack.length

  if (this.index + steps < len) {
    this.index += steps
  } else {
    this.index = len - 1
  }
  return this.stack[this.index]
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

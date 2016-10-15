
export default class Stack {
  constructor(stack) {
    this.size = 0
    this.head = null
    this.pointer = null
    if (typeof stack === typeof this) {
      this.copy(stack)
    } 
  }

  push(item) {
    if (this.size + 1 <= 10) {
      var node = {
        value: item,
        next: this.head
      }
      this.head = node
      this.size++
      return true
    } else {
      return false
    }
  }

  pop() {
    if (this.head === null) {
      return null
    } else {
      var node = {
        value: this.head.value,
        next: this.head.next
      }
      this.head = node.next
      this.size--
      return node.value
    }
  }

  equal(stack) {
    if (typeof this === typeof stack)
      return this === stack 
    else 
      return false
  }

  similar(stack) {
    if (typeof this != typeof stack) {
      return false      
    } else {
      if (this.isEmpty() && stack.isEmpty()) return true
      if (this.size !== stack.size) return false
      if (this.head.value !== stack.head.value) return false
      if (this.head.next === null && stack.head.next !== null) return false
      if (this.head.next !== null && stack.head.next === null) return false
      var _this = this.head.next, _stack = stack.head.next
      while (_this !== null) {
        if (_this.value !== _stack.value) return false
        _this = _this.next
        _stack = _stack.next
      } 
      return true
    }
  }

  copy(stack) {
    if (typeof this === typeof stack) {
      this.size = stack.size
      this.head = stack.head
      if (this.size > 0) {        
        var body = this.head.next, item = stack.head.next
        while (item !== null && body !== null) {
          body = item
          body = body.next
          item = item.next
        }
      }
    }
  }

  isEmpty() {
    return this.size === 0
  }

  clear() {
    this.size = 0
    this.head = null
  }

  resetPointer() {
    this.pointer = this.head
  }

  clearPointer() {
    this.pointer = null
  }

  getNext() {
    if (this.pointer == null) {
      return null
    } else {
      var result = this.pointer.value
      this.pointer = this.pointer.next
      return result
    }
  }
}

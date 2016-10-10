
export default class Stack {
  constructor(stack) {
    if (typeof stack === typeof this) {
      this.copy(stack)
    } else {
      this.size = 0
      this.head = null
    }
    this.pointer = null
  }

  push(item) {
    var node = {
      value: item,
      next: this.head
    }
    this.head = node
    this.size++
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
    return this === stack
  }

  similar(stack) {
    if (typeof this === typeof stack) {
      var result = false
      if (this.size !== stack.size) return false
      if (this.head !== stack.head) return false
      if (this.size === stack.size) {        
        var body = this.head.next, item = stack.head.next
        if (body !== item) return false
        while (item !== null || body !== null) {
          if (body !== item) return false
          body = body.next
          item = item.next
        }
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  copy(stack) {
    if (typeof this === typeof stack) {
      this.size = stack.size
      this.head = stack.head
      if (this.size > 0) {        
        var body = this.head.next, item = stack.head.next
        while (item !== null || body !== null) {
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

class Group {
  constructor() {
    this.group = []
  }

  add(value) {
    this.group.push(value)
  }

  delete(value) {
    let temp = []
    this.group.forEach(element => {
      if (element !== value) {
        temp.push(element)
      }
    })
    this.group = temp
  }

  has(value) {
    return this.group.includes(value)
  }

  equal(group) {
    this.group.forEach(value => {
      if (!group.has(value)) return false
    })
    return true
  }

  static from(iterable) {
    let newGroup = new Group()
    iterable.forEach(value => {
      newGroup.add(value)
    })
    return newGroup
  }
}

let group1 = new Group()
group1.add(1)
group1.add(2)
group1.add(3)

console.log(group1.has(2))

let group2 = Group.from([1, 2, 3])

console.log(group1.equal(group2))

class GroupIterator {
  constructor(group) {
    this.item = group
    this.current = 0
  }

  next() {
    if (this.current == this.item.group.length) {
      return {done: true}
    }

    this.current += 1
    return {value: `@${this.current}: ${this.item.group[this.current - 1]}`, done: false}
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this)
}

let group3 = Group.from([11, 22, 33, 44, 55])
for (let value of group3) {
  console.log(value)
}
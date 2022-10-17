class Group {
  constructor() {
    this.group = new Set()
  }

  add(value) {
    this.group.add(value)
  }

  delete(value) {
    this.group.delete(value)
  }

  has(value) {
    return this.group.has(value)
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
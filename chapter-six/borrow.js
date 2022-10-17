const thing = {
  hasOwnPropery: () => console.log('not it'),
  isWorking: "true"
}

console.log(Object.getPrototypeOf(thing).hasOwnProperty.call(thing, 'isWorking'))
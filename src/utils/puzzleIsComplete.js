//@flow
const puzzleIsComplete = grid => {
  const values = grid.flat(Infinity)
  let list = {}
  values.map(value => (list[value] = list[value] ? list[value] + 1 : 1))
  Reflect.deleteProperty(list, '0')
  const total = Object.keys(list).reduce((total, key) => total + list[key], 0)
  return total === 81 ? true : false
}

export default puzzleIsComplete

// @flow
import { GRID_SIZE } from '../constants'

const getSquare = (grid, rowNumber, columnNumber) => {
  if (!contains(DIM, rowNumber) || !contains(DIM, columnNumber)) {
    console.error('Row number / column number not in range')
    return
  }

  let rowStart = rowNumber - (rowNumber % 3) // uppermost row index of the box
  let columnStart = columnNumber - (columnNumber % 3) // leftmost col index of the box
  let result = []
  for (let i = 0; i < 3; i++) {
    result[i] = result[i] || []
    for (let j = 0; j < 3; j++) {
      result[i].push(grid[rowStart + i][columnStart + j])
    }
  }
  return result.flat(Infinity)
}

export default getSquare

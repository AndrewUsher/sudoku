// @flow
import { GRID_SIZE } from '../constants'

const getColumn = (grid, columnNumber) => {
  if (!contains(GRID_SIZE, columnNumber)) {
    console.error('Column number is not in range')
  } else {
    return grid.map(row => row[columnNumber])
  }
}

export default getColumn

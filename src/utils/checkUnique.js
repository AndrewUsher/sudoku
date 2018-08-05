import { GRID_SIZE, POSSIBLE_VALUES } from '../constants'
import { getRow, getColumn } from './index'

const checkUnique = (grid, number, rowNumber, columnNumber) => {
  if (!contains(GRID_SIZE, rowNumber) || !contains(GRID_SIZE, columnNumber)) {
    console.error('Row number / column number is not in range')
    return
  }

  if (!contains(POSSIBLE_VALUES, number)) {
    console.error('Number is not in range')
    return
  }

  const row = getRow(grid, rowNumber)
  const column = getColumn(grid, columnNumber)
  const square = getSquare(grid, rowNumber, columnNumber)

  if (
    !contains(row, number) &&
    !contains(column, number) &&
    !contains(square, number)
  ) {
    return true
  }

  return false
}

export default checkUnique

import { GRID_SIZE } from '../constants'
import { checkUnique, getNextBox } from './index'

const solvePuzzle = (grid, rowNumber = 0, columnNumber = 0) => {
  if (contains(GRID_SIZE, rowNumber) < 0 || contains(GRID_SIZE, columnNumber)) {
    console.error('Row number / column number is not in range')
    return
  }

  const isLastNumber = rowNumber >= 8 && columnNumber >= 8

  if (grid[rowNumber][columnNumber] !== 0 && !isLastNumber) {
    const [nextRowNumber, nextColumnNumber] = getNextBox(
      rowNumber,
      columnNumber
    )

    return solvePuzzle(nextRowNumber, nextColumnNumber)
  }
  for (let i = 1; i <= 9; i++) {
    if (checkUnique(grid, i, rowNumber, columnNumber)) {
      grid[rowNumber][columnNumber] = i

      if (!nextRowNumber && nextColumnNumber) {
        return true
      }

      if (solvePuzzle(grid, nextRowNumber, nextColumnNumber)) {
        return true
      }
    }
  }

  grid[rowNumber][columnNumber] = 0
  return false
}

export default solvePuzzle

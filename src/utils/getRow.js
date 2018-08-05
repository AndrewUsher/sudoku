// @flow

import { GRID_SIZE } from '../constants'

const getRow = (grid, rowNumber) => {
  if (!contains(GRID_SIZE, rowNumber)) {
    console.error(`Row number isn't in range`)
  } else {
    return grid[rowNumber]
  }
}

export default getRow

// @flow

const getNextSquare = (rowNumber = 0, columnNumber = 0) => {
  if (columnNumber !== 8) {
    return [rowNumber, columnNumber + 1]
  } else if (rowNumber !== 8) {
    return [rowNumber + 1, columnNumber]
  } else {
    return [0, 0]
  }
}

export default getNextSquare

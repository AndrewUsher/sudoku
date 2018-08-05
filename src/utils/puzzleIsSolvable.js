// @flow
import { solvePuzzle } from './index'

const puzzleIsSolvable = grid => {
  const gridCopy = [...grid]
  return solvePuzzle(gridCopy)
}

export default puzzleIsSolvable

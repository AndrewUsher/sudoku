// @flow
import {
  CHANGE_BOX_VALUE,
  CLEAR_PUZZLE,
  SOLVE_PUZZLE,
  UNDO_MOVE
} from '../types'

const changeBoxValue = (value, column, row) => ({
  type: CHANGE_BOX_VALUE,
  payload: {
    column,
    row
  }
})

const clearPuzzle = () => ({
  type: CLEAR_PUZZLE
})

const solvePuzzle = () => ({
  type: SOLVE_PUZZLE
})

const undoMove = () => ({
  type: UNDO_MOVE
})

import { ActionType, getType } from 'typesafe-actions'
import * as actions from './action'
import State from './state'
export type Action = ActionType<typeof actions>

const initialState = new State()

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case getType(actions.add):
      return Object.assign({}, state, {
        hogehoge: state.hogehoge + action.payload
      })
    default:
      return state
  }
}

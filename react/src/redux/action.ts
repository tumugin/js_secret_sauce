import { action, createStandardAction, createAction } from 'typesafe-actions';

export const add = createAction('ADD', resolve => {
  return (amount: number) => resolve(amount)
})

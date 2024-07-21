import { COLLAPSED, reducer, stateType } from "./reducer"

test("Collapsed should be true", ()=>{
  // Data
  const state : stateType = {collapsed: false}
  // action
  const newState = reducer(state, {type: COLLAPSED});
  // expection
  expect(newState.collapsed).toBe(true)
})

test("Collapsed should be false", ()=>{
  const state: stateType = {collapsed: true};
  const newState = reducer(state, {type: COLLAPSED});
  expect(newState.collapsed).toBe(false)
})

test("Reduce should be throw Error because type Action is incorrect", ()=>{
  const state: stateType = {collapsed: true}
  expect(()=> {reducer(state, {type: "Testing type value"})}).toThrowError()
})







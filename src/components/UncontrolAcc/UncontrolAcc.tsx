import { useReducer, useState } from "react"
import { COLLAPSED, reducer } from "./reducer";

type AccardionType = {
  titleValue: string
}

export function UnControlAcc(props: AccardionType) {
  let [state, dispatch] = useReducer(reducer, {collapsed: false});

    const onClickHandler = () => {
      dispatch({type: COLLAPSED})
    }

    return (
      <div>
        <AccardionTitle title={props.titleValue} onClickHandler={onClickHandler}/>
        {!state.collapsed && <AccardionBody/>}
      </div>
    )
  }

type AccardionTitleProps = {
  title: string
  onClickHandler: ()=>void
}

function AccardionTitle(props: AccardionTitleProps) {
  const cursor = {
    cursor: "pointer"
  }

  return (
    <h3 style={cursor} onClick={props.onClickHandler}>{props.title}</h3>
  )
}

function AccardionBody() {
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  )
}

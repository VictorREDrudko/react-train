import { useState } from "react"

type Accardionprops = {
  titleValue: string
}

export function UnControlAcc(props: Accardionprops) {
  const [collapsed, setCollabsed] = useState(false);
  
  const onClickHandler = () => {
    setCollabsed(!collapsed)
  }

  return (
    <div>
      <AccardionTitle title={props.titleValue} onClickHandler={onClickHandler}/>
      {collapsed ? <AccardionBody/> : ''}
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

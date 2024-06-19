type Accardionprops = {
  titleValue: string
  collapsed: boolean
  setIsCollapsed: ()=>void
}

function Accardion(props: Accardionprops) {
  return (
    <div>
      <AccardionTitle title={props.titleValue} onClick={props.setIsCollapsed}/>
      {!props.collapsed && <AccardionBody/>}
    </div>
  )
}

type AccardionTitleProps = {
  title: string
  onClick: ()=>void
}

function AccardionTitle(props: AccardionTitleProps) {
  return (
    <h3 onClick={props.onClick}>{props.title}</h3>
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

export default Accardion 
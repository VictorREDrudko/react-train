type Accardionprops = {
  titleValue: string
  collapsed: boolean
}

function Accardion(props: Accardionprops) {
  return (
    <div>
      <AccardionTitle title={props.titleValue}/>
      {!props.collapsed && <AccardionBody/>}
    </div>
  )
}

type AccardionTitleProps = {
  title: string
}

function AccardionTitle(props: AccardionTitleProps) {
  return (
    <h3>{props.title}</h3>
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
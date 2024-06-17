function Accardion(props: any) {
  return (
    <div>
      <AccardionTitle title={props.title}/>
      <AccardionBody/>
    </div>
  )
}

function AccardionTitle(props: any) {
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
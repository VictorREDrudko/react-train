import { ItemsType } from "../../App"

export type AccardionProps = {
  titleValue: string
  collapsed: boolean
  setIsCollapsed: ()=>void
  items: ItemsType[]
  onClick: (id: string) => void
}


function Accardion(props: AccardionProps) {
  return (
    <div>
      <AccardionTitle title={props.titleValue} onClick={props.setIsCollapsed}/>
      {!props.collapsed && <AccardionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}

type AccardionTitleProps = {
  title: string
  onClick: ()=>void
}

export function AccardionTitle(props: AccardionTitleProps) {
  return (
    <h3 onClick={props.onClick}>{props.title}</h3>
  )
}




// ******************************************* BODY
type AccardionBodyType = {
  items: ItemsType[]
  onClick: (id: string) => void
}

export function AccardionBody(props: AccardionBodyType) {
  return (
    <ul>
      {props.items.map(el => <li onClick={() => props.onClick(el.id)} key={el.id}>{el.nameUser}</li>)}
    </ul>
  )
}

export default Accardion 
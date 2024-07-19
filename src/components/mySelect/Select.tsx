import { useState } from "react"
import style from "./Select.module.css"

export type ItemType = {
  title: string
  id: string
}

type SelectType = {
  value?: string
  onChange: (id: string)=> void
  items: ItemType[]
}

export const Select = ({value, onChange, items} : SelectType) => {
  // State 
  const [activeItem, setActiveItem] = useState(false);
  const [hovered, setHovered] = useState(value);

  // Выбранный item
  const changedItem = items.find(i => i.id === value);
  const hoveredItem = items.find(i => i.id === hovered);

  // открытие / закрытие items
  const onClickActiveItemHandler = () => {
    setActiveItem(!activeItem)
  }

  const onClickItem = (value: string)=>{onChange(value); setActiveItem(!activeItem)}

  const onKeyUpHandler = () => {
    
  }

  return (
    <div>
      <div className={style.selected} tabIndex={0} onKeyUp={onKeyUpHandler}>
        <h3 className={style.value} onClick={onClickActiveItemHandler}>{changedItem ? changedItem.title : ''}</h3>
        {activeItem && 
        <div className={style.items}>
          {items.map(el => <div onMouseEnter={() => setHovered(el.id)} className={hoveredItem === el ? style.item : ''} onClick={()=>onClickItem(el.id)} key={el.id}>{el.title}</div>)}
        </div>}
      </div>
    </div>
  )
}
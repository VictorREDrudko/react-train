import { useEffect, useState, KeyboardEvent } from "react"
import style from "./Select.module.css"

// Types
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
  const [visibleItems, setVisibleItems] = useState(false);
  // State для какого элемента применен hover (исходя из id элемента)
  // onMouseEnter - событие наведения, изменяет State
  // onKeyUp - событие нажатия стрелок вверх/вниз, изменяет State
  const [hoveredElementId, setHoveredElementId] = useState(value);

  // Показ выбранного item
  const showSelectedItem = items.find(i => i.id === value);
  // Применение hover для Item
  const hoveredItem = items.find(i => i.id === hoveredElementId);

  // callback функция примениться каждый раз, как изменятся зависимости
  // hoveredElementId должен всегда соответствовать value
  useEffect(()=>{
    setHoveredElementId(value)
  }, [value])

  // Показать/скрыть items
  const toggleItems = () => {
    setVisibleItems(!visibleItems)
  }

  // Выбирает новый элемент (item) и закрывает окно items
  const onClickItem = (id: string)=>{
    onChange(id); 
    setVisibleItems(!visibleItems);
  }

  // Логика нажатия клавиш
  const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if(event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      for(let i = 0; i < items.length; i+=1) {
        if(items[i].id === hoveredElementId) {
          const element = event.key === 'ArrowDown'? items[i+1] : items[i-1]
          if(element) {
            onChange(element.id);
            return
          }
        }
      }
      if(!showSelectedItem) {
        onChange(items[0].id);
      }
    }

    if(event.key === 'Enter' || event.key === 'Escape') {
      setVisibleItems(false);
    }

  }

  return (
    <div>
      <div className={style.wrapperSelect} tabIndex={0} onKeyUp={onKeyUpHandler}>
        <span className={style.value} onClick={toggleItems}>{showSelectedItem ? showSelectedItem.title : ''}</span>

        {visibleItems && 
        <div className={style.items}>
          {items.map(el => 
          <div  key={el.id}
                className={hoveredItem === el ? style.item : ''}
                onClick={()=>onClickItem(el.id)} 
                onMouseEnter={() => setHoveredElementId(el.id)} 
          > {el.title} </div>)}
        </div>}

      </div>
    </div>
  )
}
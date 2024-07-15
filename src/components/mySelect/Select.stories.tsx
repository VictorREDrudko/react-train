import { userEvent } from "@storybook/test"
import { useState } from "react"
import styled from "styled-components"

export default {
  title: "mySelect",
}

// Types
type ItemType = {
  title: string
  id: number
}

type SelectType = {
  value: any
  onChange: ()=>void
  items: ItemType[]
}

// Data
const cityBLR :ItemType[] = [ {id: 1, title: "Minsk"}, {id: 2, title: "Brest"}, {id: 3, title: "Gomel"}, {id: 4, title: "Grodno"} ]
// const cityBLR :ItemType[] = [ {id: 1, title: "Minsk"} ]

// my select
export const Select = ({value, onChange}: SelectType) => {
  const [items, setItems] = useState<ItemType[]>(cityBLR)
  const [disable, setDisabled] = useState(true)
  const [dubClick, setDubClick] = useState(true)

  const styleOpen = disable ? {display: "none"} : {display: "flex", flexDiraction: "column"}

  const onClickHandler = () => {
    setDisabled(false)
  }

  const onBlurHandler = () => {
    setDisabled(true)
  }

  const onClickItemHandler = (id: number) => {
    setDubClick(!dubClick);
    dubClick ? setItems(items.filter(el => el)) : setItems(items.filter(el => id === el.id))
  }

  return (
    <div>
      <CityStyle onClick={onClickHandler} onBlur={onBlurHandler}>
        <SpanStyle>City</SpanStyle>
        <WrapperStyle>
          {items.map(el => {
            return <ItemStyle onClick={() => onClickItemHandler(el.id)} style={styleOpen} key={el.id}>{el.title}</ItemStyle>
          })}
        </WrapperStyle>
        <Line></Line>
      </CityStyle>
    </div>
  )
}

const WrapperStyle = styled.div`
  max-width: 200px;
`

const CityStyle = styled.div`
  max-width: 200px;
  font-size: 14px;
  font-weight: 400;
  /* border: 1px solid #cccbc7; */
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #F0EFEC;
  }
`
const SpanStyle = styled.span`
  display: inline-block;
  position: relative;

  &::after {
  content: '▼';
  position: absolute;
  left: 180px;
  top: 10px;
}
`


const ItemStyle = styled.div`
  font-size: 24px;
  font-weight: 600;
  /* border: 1px solid #cccbc7; */
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #cccbc7;
  }
`

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #cccbc7;
  margin: 15px 0 0 0;
`
import { userEvent } from "@storybook/test"
import { useState } from "react"
import styled from "styled-components"
import { ItemType, Select } from "./Select"
import { action } from '@storybook/addon-actions';

export default {
  title: "mySelect",
  components: Select
}

const items1: ItemType[] = [ 
  {id: "1", title: "Minsk"}, 
  {id: "2", title: "Brest"}, 
  {id: "3", title: "Gomel"}, 
  {id: "4", title: "Grodno"} 
]

export const SelectWhithValue = ()=> {
  const [value, setValue] = useState("2");
  return (
    <div>
      <Select value={value} onChange={setValue} items={items1}/>
    </div>
  )
}

export const SelectWithoutValue = ()=> {
  const [value, setValue] = useState('');
  return (
    <div>
      <Select value={value} onChange={setValue} items={items1}/>
    </div>
  )
}

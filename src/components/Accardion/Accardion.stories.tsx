import { Meta, StoryObj } from '@storybook/react/*';
import Accardion from './Accardion';
import { useState } from 'react';
// Устаревший способ использования action
import { action } from '@storybook/addon-actions';
import { ItemsType } from '../../App';

// *****Синтаксис storyboock******
// const meta: Meta<typeof Accardion> = {
//   component: Accardion,
// };

// export default meta;

// ******Синтаксис React******
export default {
  component: Accardion,
}


// *****Способ создания историй с CONTROLS*****
type Story = StoryObj<typeof Accardion>

export const FirstStory = {
  args: {
    titleValue: "---MENU---",
    collapsed: true,
  }
}

// *****Использование action*****
const callbackHundler = action("RRRRRRRR")
const onclickHandler = action("Click")

const items: ItemsType[] = [
  {
    id: "1",
    nameUser: "Tom"
  },
  {
    id: "2",
    nameUser: "Bill"
  },
  {
    id: "3",
    nameUser: "Andry"
  },
]


// *****Способ создания историй без CONTROLS*****
export const CloseAccardion = () => {
  return (
    <Accardion titleValue={"Close menu"} collapsed={true} setIsCollapsed={callbackHundler} items={[]} onClick={onclickHandler}/>
  )
}

export const OpenAccardion = () => {
  return (
    <Accardion titleValue={"Close menu"} collapsed={false} setIsCollapsed={()=>{}} items={items} onClick={onclickHandler}/>
  )
}

export const ClickAccardion = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Accardion titleValue={"Close menu"} collapsed={collapsed} setIsCollapsed={()=>{setCollapsed(!collapsed)}} items={items} onClick={onclickHandler}/>
  )
}
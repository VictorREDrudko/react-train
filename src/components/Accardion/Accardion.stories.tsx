import { Meta, StoryObj } from '@storybook/react/*';
import Accardion from './Accardion';
import { useState } from 'react';
// Устаревший способ использования action
import { action } from '@storybook/addon-actions';

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

// *****Способ создания историй без CONTROLS*****
export const CloseAccardion = () => {
  return (
    <Accardion titleValue={"Close menu"} collapsed={true} setIsCollapsed={callbackHundler}/>
  )
}

export const OpenAccardion = () => {
  return (
    <Accardion titleValue={"Close menu"} collapsed={false} setIsCollapsed={()=>{}}/>
  )
}

export const ClickAccardion = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <Accardion titleValue={"Close menu"} collapsed={collapsed} setIsCollapsed={()=>{setCollapsed(!collapsed)}}/>
  )
}
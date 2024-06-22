import { useState } from "react";
import { Switch } from "./Switch";
import { action } from '@storybook/addon-actions';

export default {
  title: "Switch component",
  component: Switch,
}

const clickSwitch = action("click");

export const SwitchOf = () => {
  return (
    <Switch switching={false} setOn={clickSwitch}/>
  )
}

export const SwitchOn = () => {
  return (
    <Switch switching={true} setOn={clickSwitch}/>
  )
}

export const SwitchClick = () => {
  const [on, setOn] = useState(false)

  return (
    <Switch switching={on} setOn={setOn}/>
  )
}
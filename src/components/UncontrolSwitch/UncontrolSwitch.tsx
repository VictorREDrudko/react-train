import { useState } from "react"
import s from "./../Switch/Switch.module.css"

type UncontrolSwitchProps = {
  onChange: (on: boolean)=>void
}

export const UncontrolSwitch = (props: UncontrolSwitchProps) => {
  const [on, setOn]= useState<boolean>(false)

  const onClickhandlerOn = ()=> {setOn(true); props.onChange(true)}
  const onClickhandlerOff = ()=> {setOn(false); props.onChange(false)}
  const styleOn = `${s.selector} ${on ? s.isOn : ''}`
  const styleOff = `${s.selector} ${on ? '' : s.isOff}`
  const styleCircle = on ? `${s.circle} ${s.circleOn}` : `${s.circle} ${s.circleOf}`

  return (
    <div className={s.wrapper}>
        <div onClick={onClickhandlerOn} className={styleOn}>On</div>
        <div onClick={onClickhandlerOff} className={styleOff}>Off</div>
        <div className={styleCircle}></div>
    </div>
  )
}
import { useState } from "react"
import s from "./../Switch/Switch.module.css"

export const UncontrolSwitch = () => {
  const [on, setOn]= useState<boolean>(false)

  return (
    <div className={s.wrapper}>
        <div onClick={()=> {setOn(true)}} className={`${s.selector} ${on ? s.isOn : ''}`}>On</div>
        <div onClick={()=> {setOn(false)}} className={`${s.selector} ${on ? '' : s.isOff}`}>Off</div>
        <div className={on ? `${s.circle} ${s.circleOn}` : `${s.circle} ${s.circleOf}`}></div>
    </div>
  )
}
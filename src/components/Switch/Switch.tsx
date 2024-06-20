import s from "./Switch.module.css"

type SwitchProps = {
  switching: boolean
  setOn: (value: boolean)=>void
}

export const Switch = (props: SwitchProps) => {
  return (
    <div className={s.wrapper}>
        <div className={`${s.selector} ${props.switching ? s.isOn : ''}`} onClick={()=>props.setOn(true)}>On</div>
        <div className={`${s.selector} ${props.switching ? '' : s.isOff}`} onClick={()=>props.setOn(false)}>Off</div>
        <div className={props.switching ? `${s.circle} ${s.circleOn}` : `${s.circle} ${s.circleOf}`}></div>
    </div>
  )
}
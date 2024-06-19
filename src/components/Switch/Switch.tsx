import s from "./Switch.module.css"

type SwitchProps = {
  switching: boolean
}

export const Switch = (props: SwitchProps) => {
  return (
    <div className={s.wrapper}>
        <div className={`${s.selector} ${props.switching ? s.isOn : ''}`}>On</div>
        <div className={`${s.selector} ${props.switching ? '' : s.isOff}`}>Off</div>
        <div className={props.switching ? `${s.circle} ${s.circleOn}` : `${s.circle} ${s.circleOf}`}></div>
    </div>
  )
}
import s from "./Switch.module.css"

type SwitchProps = {
  switching: boolean
}

export const Switch = (props: SwitchProps) => {
  return (
    <div className={s.wrapper}>
      {props.switching ?
      <>
        <div className={s.isOn}>On</div>
        <div className={s.selector}>Off</div>
        <div className={s.circleOn}></div>
      </> : 
      <>
        <div className={s.selector}>On</div>
        <div className={s.isOff}>Off</div>
        <div className={s.circleOff}></div>
      </>}

    </div>
  )
}
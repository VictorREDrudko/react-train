import s from "./Switch.module.css"

type SwitchProps = {
  switching: boolean
  setOn: (value: boolean)=>void
}

export const Switch = (props: SwitchProps) => {
  const onClickHandlerOn = ()=>props.setOn(true);
  const onClickHandlerOff = ()=>props.setOn(false);
  const styleOn = `${s.selector} ${props.switching ? s.isOn : ''}`;
  const styleOff = `${s.selector} ${props.switching ? '' : s.isOff}`;
  const styleCircle = props.switching ? `${s.circle} ${s.circleOn}` : `${s.circle} ${s.circleOf}`;

  return (
    <div className={s.wrapper}>
        <div className={styleOn} onClick={onClickHandlerOn}>On</div>
        <div className={styleOff} onClick={onClickHandlerOff}>Off</div>
        <div className={styleCircle}></div>
    </div>
  )
}
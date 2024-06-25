import { title } from "process";
import { useRef, useState } from "react";

export default {
  title: "Input",
  // components: ''

}

export const UncontrolledInput = () => {
  return <input/>
}



export const TrackValueUncontrolledInput = () => {
  let [valueInput, setValueInput] = useState('')

  return (
    <>
      <input type="text" onChange={(event)=> setValueInput(event.currentTarget.value)}/> 
      <div>{valueInput}</div>
    </>
  )
}



export const getValueInput = () => {
  const [value, setValue] = useState('');
  const refInput = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = refInput.current as HTMLInputElement
    setValue(el.value)
  }

  return (
    <>
      <input type="text" ref={refInput}/>
      <div>{value}</div>
      <div>
       <button onClick={save}>GET VALUE</button>
      </div>
    </>
  )
}
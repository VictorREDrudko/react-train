import { title } from "process";
import { ChangeEvent, useRef, useState } from "react";
import { action } from '@storybook/addon-actions';

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


export const controlImput = () => {
  const [newValue, setNewValue] = useState('');
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewValue(event.currentTarget.value);
  }

  return (
    <input type="text" value={newValue} onChange={onChangeHandler}/>
  )
}


export const controlCheckbox = () => {
  const [isChecked, setIsChecked]= useState(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.currentTarget.checked)
  }

  return (
    <input type="checkbox" checked={isChecked} onChange={onChangeHandler}/>
  )
}


export const controlSelect = ()=> {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.currentTarget.value);
  }

  return (
    <select value={selected} onChange={onChangeHandler}>
      <option value={1}>RED</option>
      <option value={2}>GREEN</option>
      <option value={3}>BLUE</option>
      <option value={4}>DARK</option>
    </select>
  )
}
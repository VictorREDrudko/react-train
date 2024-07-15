import { userEvent } from "@storybook/test"
import { ChangeEvent, useRef, useState } from "react"

export default {
  title: "Input",
}

// Не контролируемый input (value не задано)
export const UncontrolledInput = () => {
  return (
    <>
      <input type="text"/>
    </>
  )
}

// Не контролируемый input (value получаем, но в input ничего не меняем) БЕЗ КНОПКИ
export const UncontrolledInputGetValue = () => {
  const [value, setValue] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return (
    <>
      <input type="text" onChange={onChangeHandler}/>
      <div>{value}</div>
    </>
  )
}

// Не контролируемый input (value получаем, но в input ничего не меняем) С КНОПКОЙ
export const UncontrolledInputGetValueWithButton = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value) 
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onClickHandler}>save</button>
      <div>{value}</div>
    </>
  )
}

// Контролируемый input (однонаправленный поток данных input -> onChange -> State -> input)
export const ControlledInput = () => {
  const [value, setValue] = useState<string>('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return(
    <>
      <input type="text" value={value} onChange={onChangeHandler}/>
    </>
  )
}

// Контролируемый checkbox 
export const ControlledCheckbox = () => {
  const [value, setValue] = useState<boolean>(false)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.checked)
  }

  return(
    <>
      <input type="checkbox" checked={value} onChange={onChangeHandler}/>
    </>
  )
}

// Контролируемый select
export const controlledSelect = () => {
  const [value, setValue] = useState<string>("1");

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value)
  }

  return (
    <>
      <select value={value} onChange={onChangeHandler}>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Valencia</option>
        <option value={"3"}>New York</option>
        <option value={"4"}>Tokio</option>
      </select>
    </>
  )
 }



// import { title } from "process";
// import { ChangeEvent, useRef, useState } from "react";
// import { action } from '@storybook/addon-actions';

// export default {
//   title: "Input",
//   // components: ''

// }

// export const UncontrolledInput = () => {
//   return <input/>
// }



// export const TrackValueUncontrolledInput = () => {
//   let [valueInput, setValueInput] = useState('')

//   return (
//     <>
//       <input type="text" onChange={(event)=> setValueInput(event.currentTarget.value)}/> 
//       <div>{valueInput}</div>
//     </>
//   )
// }



// export const getValueInput = () => {
//   const [value, setValue] = useState('');
//   const refInput = useRef<HTMLInputElement>(null)

//   const save = () => {
//     const el = refInput.current as HTMLInputElement
//     setValue(el.value)
//   }

//   return (
//     <>
//       <input type="text" ref={refInput}/>
//       <div>{value}</div>
//       <div>
//        <button onClick={save}>GET VALUE</button>
//       </div>
//     </>
//   )
// }


// export const controlImput = () => {
//   const [newValue, setNewValue] = useState('');
//   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     setNewValue(event.currentTarget.value);
//   }

//   return (
//     <input type="text" value={newValue} onChange={onChangeHandler}/>
//   )
// }


// export const controlCheckbox = () => {
//   const [isChecked, setIsChecked]= useState(true);
//   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     setIsChecked(event.currentTarget.checked)
//   }

//   return (
//     <input type="checkbox" checked={isChecked} onChange={onChangeHandler}/>
//   )
// }


// export const controlSelect = ()=> {
//   const [selected, setSelected] = useState<string | undefined>(undefined);
//   const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSelected(event.currentTarget.value);
//   }

//   return (
//     <select value={selected} onChange={onChangeHandler}>
//       <option value={1}>RED</option>
//       <option value={2}>GREEN</option>
//       <option value={3}>BLUE</option>
//       <option value={4}>DARK</option>
//     </select>
//   )
// }
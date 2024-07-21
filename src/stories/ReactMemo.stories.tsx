import React from "react";
import { useState } from "react";

export default {
  title: "React-Memo",
}

type UsersType = string[]

// Компанента 1
const Counter = (props : {count: number}) => {
  return (
    <div>{props.count}</div>
  )
}

// Компанента 2
const Users = (props: {users: UsersType}) => {
  return (
    <ul>
      {props.users.map((el, index) => <li key={index}>{el}</li>)}
    </ul>
  )
}

// обернем компоненту Users в React Memo
const UsersMemo = React.memo(Users)


// Компанента увеличивает users
export const CounterUsers = () => {
  // State
  let [counter, setCounter] = useState(0);
  const [users, setUsers] = useState<UsersType>(["Rob", "Stas", "Den"])

  return (
    <>
      <button onClick={()=> setCounter(counter+=1)}>counter</button>
      <button onClick={()=> setUsers([...users, "Sveta"])}>add user</button>
      <Counter count={counter}/>
      <UsersMemo users={users}/>
    </>
  )
}
import React, { useCallback, useMemo, useState } from "react";

export default {
  title: "Use-callback",
}

// types
type BooksType = string[]

type CountMemoType = {
  changeCount: ()=>void
  counter: number
}

type BookMemoType = {
  addBook: ()=>void
  books: BooksType
}

// parent component
export const BooksCounter = () => {
  console.log("parent component")

  let [counter, setCounter] = useState(0);
  const [books, setBooks] = useState<BooksType>(["Aliaze", "Start", "Money"])

  const addBook = () => {
    setBooks([...books, "Adelveise"])
  }

  const AddBookMemo = useMemo(()=> {
    return addBook;
  }, [books])

  const changeCountUseCallback = useCallback(() => {
    setCounter(counter+=1);
  }, [counter])

  return (
    <div>
      <Count changeCount={changeCountUseCallback} counter={counter}/>
      <Book addBook={AddBookMemo} books={books}/>
    </div>
  )
}



// child Memo component #1
const CountMemo = (props: CountMemoType) => {
  console.log("child component #1")
  return (
    <div>
      <button onClick={props.changeCount}>+</button>
      <span>  {props.counter}</span>
    </div>
  )
}


// child Memo component #2
const BookMemo = (props: BookMemoType) => {
  console.log("child component #2")
  return (
    <div>
      <ul>
        {props.books.map((el, index) => <li key={index}>{el}</li>)}
      </ul>
      <button onClick={()=> props.addBook()}>Add book</button>
    </div>
  )
}

// REACT MEMO
const Book = React.memo(BookMemo);
const Count = React.memo(CountMemo);


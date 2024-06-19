export type ValueProps = 0 | 1 | 2 | 3 | 4 | 5

type RatingProps = {
  value: ValueProps
  setValueRating: (currentValueStar: ValueProps)=>void
}

export function Rating(props: RatingProps) {
    return (
      <div>
        <Star selected={props.value > 0} onClick={props.setValueRating} currentValueStar={1}/>
        <Star selected={props.value > 1} onClick={props.setValueRating} currentValueStar={2}/>
        <Star selected={props.value > 2} onClick={props.setValueRating} currentValueStar={3}/>
        <Star selected={props.value > 3} onClick={props.setValueRating} currentValueStar={4}/>
        <Star selected={props.value > 4} onClick={props.setValueRating} currentValueStar={5}/>
      </div>
    )
}




type StarProps = {
  currentValueStar: ValueProps
  selected: boolean
  onClick: (currentValueStar: ValueProps)=>void
}


function Star(props: StarProps) {
  return (
    <span onClick={()=>{props.onClick(props.currentValueStar)}}>{props.selected ? <b>Star </b> : "Star "}</span>
  )
}
type RatingProps = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {
  if(props.value === 1) {
    return (
      <div>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
      </div>
    )
  }

  if(props.value === 2) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
    )
  }

  if(props.value === 3) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
    )
  }

  if(props.value === 4) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
      </div>
    )
  }

  if(props.value === 5) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
      </div>
    )
  }

  return (
    <div>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>
  )
}




type StarProps = {
  selected: boolean
}

function Star(props: StarProps) {
  return (
    props.selected ? <span><b>Star </b></span> : <span>Star </span>
  )
}
import { useState } from "react";
import { Rating, ValueProps } from "./Rating";

export default {
  component: Rating,
}

export const RatingZero = () => {
  return (
    <Rating value={0} setValueRating={()=>{}}/>
  ) 
}

export const Rating1 = () => {
  return (
    <Rating value={1} setValueRating={()=>{}}/>
  ) 
}

export const Rating2 = () => {
  return (
    <Rating value={2} setValueRating={()=>{}}/>
  ) 
}

export const Rating3 = () => {
  return (
    <Rating value={3} setValueRating={()=>{}}/>
  ) 
}

export const Rating4 = () => {
  return (
    <Rating value={4} setValueRating={()=>{}}/>
  ) 
}

export const Rating5 = () => {
  return (
    <Rating value={5} setValueRating={()=>{}}/>
  ) 
}

export const RatingClick = () => {
  const [valueRating, setValueRating] = useState<ValueProps>(0)

  return (
    <Rating value={valueRating} setValueRating={setValueRating}/>
  ) 
}
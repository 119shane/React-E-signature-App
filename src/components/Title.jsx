import React from 'react'


export default function Title(props) {
  return (
    <div>
    <h1 className={"title text_center"}>{!props.text ? "Title" : props.text}</h1>
    <h1 className={"sub_title text_center"}>{!props.text2 ? "Set Date" : props.text2}</h1>
    </div>
  )
}

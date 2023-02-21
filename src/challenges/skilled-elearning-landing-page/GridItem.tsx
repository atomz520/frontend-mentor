import React from 'react'

type GridItemType = {
  image: string,
  title: string,
  paragraph: string,
};

const GridItem = (props: GridItemType): JSX.Element => {
  return (
    <div className="border-r-3">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <button></button>
    </div>
  )
}

export default GridItem
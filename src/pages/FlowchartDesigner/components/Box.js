/**
 *Time: 2020/6/30
 *Author: zore.wang
 *Description: 文件功能描述
 */
import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const Box = ({ isDropped, name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      console.log(item, dropResult)
      // if (item && dropResult) {
      //
      //   alert(`You dropped ${item.name} into ${dropResult.name}!`)
      // }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  console.log(isDropped, name, '-----')
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
}

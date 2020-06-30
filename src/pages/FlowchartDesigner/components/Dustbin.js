/**
 *Time: 2020/6/30
 *Author: zore.wang
 *Description: 文件功能描述
 */
import React, { useState, useCallback } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const Dustbin = ({ accept, lastDroppedItem, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const [list, seList] = useState([])
  const isActive = canDrop && isOver
  console.log(accept, 'accept')
  console.log(lastDroppedItem, 'lastDroppedItem')
  console.log(onDrop, 'onDrop')

  let backgroundColor = '#222'
  // if (lastDroppedItem) {
  //   seList([...list, lastDroppedItem])
  // }
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {isActive
        ? 'Release to drop'
        : `This dustbin accepts: ${accept.join(', ')}`}
      {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )}
    </div>
  )
}

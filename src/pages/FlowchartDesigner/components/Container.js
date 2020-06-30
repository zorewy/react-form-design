/**
 *Time: 2020/6/30
 *Author: zore.wang
 *Description: 文件功能描述
 */
import React, { useState, useCallback } from 'react'
import { Dustbin } from './Dustbin'
import { Box } from './Box'
import { ItemTypes } from './ItemTypes'
import update from 'immutability-helper'
export const Container = () => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.BOX], lastDroppedItem: null },
  ])
  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" isDropped={isDropped(name)}/>
        <Box name="Banana" isDropped={isDropped(name)}/>
        <Box name="Paper" isDropped={isDropped(name)}/>
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

// export const Container = memo(function Container() {
//
//   return (
//     <div>
//       <div style={{ overflow: 'hidden', clear: 'both' }}>
//         <Box name="Glass" />
//         <Box name="Banana" />
//         <Box name="Paper" />
//       </div>
//       <div style={{ overflow: 'hidden', clear: 'both' }}>
//         <Dustbin  lastDroppedItem={lastDroppedItem} onDrop={(item) => handleDrop(item)}/>
//       </div>
//     </div>
//   )
// })

/**
 *Time: 2020/6/29
 *Author: zore.wang
 *Description: 流程图设计器
 */

import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './components/example'

const FlowchartDesigner = (props) => {
  return <DndProvider backend={HTML5Backend}>
    <Example/>
  </DndProvider>
}

export default FlowchartDesigner

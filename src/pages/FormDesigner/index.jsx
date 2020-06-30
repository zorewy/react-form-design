/**
 *Time: 2020/6/29
 *Author: zore.wang
 *Description: 表单设计器
 */

import React, { useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Row, Col, Card, Tag } from 'antd';
import { ReactSortable } from "react-sortablejs";
const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const initData = {
  'menu': [
    {
      title: '基础控件',
      list: [
        {
          id: 1,
          name: "单行文本",
          icon: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            dataType: 'text',
            placeholder: '请输入'
          }
        },
        {
          id: 2,
          name: "多行文本",
          icon: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            disabled: false,
            dataType: 'text',
            placeholder: '请输入'
          }
        },
        {id: 3, name: "日期", icon: ''},
        {id: 4, name: "数字", icon: ''},
        {id: 5, name: "单选框", icon: ''},
        {id: 6, name: "复选框", icon: ''},
        {id: 7, name: "下拉框", icon: ''},
        {id: 8, name: "是/否", icon: ''},
        {id: 9, name: "附件", icon: ''},
        {id: 10, name: "图片", icon: ''},
        {id: 11, name: "地址", icon: ''},
        {id: 12, name: "位置", icon: ''},
        {id: 13, name: "人员单选", icon: ''},
        {id: 14, name: "人员多选", icon: ''},
        {id: 15, name: "部门单选", icon: ''},
        {id: 16, name: "部门多选", icon: ''}
      ]
    },
    {
      title: '布局控件',
      list: [
        {id: 1, name: "单行文本", icon: ''},
        {id: 2, name: "多行文本", icon: ''},
        {id: 3, name: "日期", icon: ''},
        {id: 4, name: "数字", icon: ''},
        {id: 5, name: "单选框", icon: ''},
        {id: 6, name: "复选框", icon: ''},
        {id: 7, name: "下拉框", icon: ''},
        {id: 8, name: "是/否", icon: ''},
        {id: 9, name: "附件", icon: ''},
        {id: 10, name: "图片", icon: ''},
        {id: 11, name: "地址", icon: ''},
        {id: 12, name: "位置", icon: ''},
        {id: 13, name: "人员单选", icon: ''},
        {id: 14, name: "人员多选", icon: ''},
        {id: 15, name: "部门单选", icon: ''},
        {id: 16, name: "部门多选", icon: ''}
      ]
    },
    {
      title: '系统控件',
      list: [
        {id: 1, name: "单行文本", icon: ''},
        {id: 2, name: "多行文本", icon: ''},
        {id: 3, name: "日期", icon: ''},
        {id: 4, name: "数字", icon: ''},
        {id: 5, name: "单选框", icon: ''},
        {id: 6, name: "复选框", icon: ''},
        {id: 7, name: "下拉框", icon: ''},
        {id: 8, name: "是/否", icon: ''},
        {id: 9, name: "附件", icon: ''},
        {id: 10, name: "图片", icon: ''},
        {id: 11, name: "地址", icon: ''},
        {id: 12, name: "位置", icon: ''},
        {id: 13, name: "人员单选", icon: ''},
        {id: 14, name: "人员多选", icon: ''},
        {id: 15, name: "部门单选", icon: ''},
        {id: 16, name: "部门多选", icon: ''}
      ]
    },
    {
      title: '高级控件',
      list: [
        {id: 1, name: "单行文本", icon: ''},
        {id: 2, name: "多行文本", icon: ''},
        {id: 3, name: "日期", icon: ''},
        {id: 4, name: "数字", icon: ''},
        {id: 5, name: "单选框", icon: ''},
        {id: 6, name: "复选框", icon: ''},
        {id: 7, name: "下拉框", icon: ''},
        {id: 8, name: "是/否", icon: ''},
        {id: 9, name: "附件", icon: ''},
        {id: 10, name: "图片", icon: ''},
        {id: 11, name: "地址", icon: ''},
        {id: 12, name: "位置", icon: ''},
        {id: 13, name: "人员单选", icon: ''},
        {id: 14, name: "人员多选", icon: ''},
        {id: 15, name: "部门单选", icon: ''},
        {id: 16, name: "部门多选", icon: ''}
      ]
    }
  ],
  content: [],
  config: {}
}

const FormDesigner = (props) => {
  const [cardActive, setCradActive] = useState('tab1')
  const [list, setList] = useState([
    { id: 1, name: "单行文本" },
    { id: 2, name: "多行文本" },
    { id: 3, name: "日期" },
    { id: 4, name: "数字" },
    { id: 5, name: "单选框" },
    { id: 6, name: "复选框" },
    { id: 7, name: "下拉框" },
    { id: 8, name: "是/否" },
    { id: 9, name: "附件" },
    { id: 10, name: "图片" },
    { id: 11, name: "地址" },
    { id: 12, name: "位置" },
    { id: 13, name: "人员单选" },
    { id: 14, name: "人员多选" },
    { id: 15, name: "部门单选" },
    { id: 16, name: "部门多选" },
  ])
  return <PageHeaderWrapper>
    <Row>
      <Col flex="248px">
        <Card
          bordered={false}
          title="基础控件"
          headStyle={{
            padding: 12
          }}
          bodyStyle={{
            padding: 12
          }}
        >
          <ReactSortable  list={list} setList={setList}>
            {list.map(item => (
              <Tag style={{
                cursor: 'grabbing'
              }} key={item.id}>{item.name}</Tag>
            ))}
          </ReactSortable>
        </Card>

      </Col>
      <Col flex="auto">
        <ReactSortable list={list} setList={setList}>
          {list.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </ReactSortable>
      </Col>
      <Col flex="272px">
        <Card

              activeTabKey={cardActive}
              onTabChange={e => setCradActive(e)}
              tabList={[
                {
                  key: 'tab1',
                  tab: '控制属性',
                },
                {
                  key: 'tab2',
                  tab: '表单属性',
                }
              ]}
        >
          {
            contentList[cardActive]
          }
        </Card>
      </Col>
    </Row>
  </PageHeaderWrapper>

}

export default FormDesigner

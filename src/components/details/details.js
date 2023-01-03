import React from 'react'
import "./details.css"
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
const { Option } = Select;

const Details=()=>{
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
    <>
    <div className='details'>
        <form>
        <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item label="Apartment Type">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Space>
      </Form.Item>
      

      <Form.Item label="BHK Type">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Province is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Input.Group>
      </Form.Item>
      <Form.Item label="Floor">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Space>
      </Form.Item>
      <Form.Item label="Total Floor">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Space>
      </Form.Item>
      <Form.Item label="Property Type">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Space>
      </Form.Item>
      <Form.Item label="Floor">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[
              {
                required: true,
                message: 'Username is required',
              },
            ]}
          >
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          
        </Space>
      </Form.Item>
      <Form.Item
        label="Built up Area"
        style={{
          marginBottom: 0,
        }}
      >
        <Form.Item
          name="year"
          rules={[
            {
              required: true,
            },
          ]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
          }}
        >
            <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[
              {
                required: true,
                message: 'Province is required',
              },
            ]}
          >
             <Input id='areaInput'/>
          </Form.Item>
          
          
        </Input.Group>
 
        </Form.Item>
        
      </Form.Item>
      
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </form>
    </div>
    </>
  )
}

export default Details





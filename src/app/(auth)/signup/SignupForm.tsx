'use client'

import Image from "next/image"
import type { FormProps } from 'antd'
import { Button, Input, Form, message, Row, Col, Checkbox } from "antd"
import Link from "next/link"

type FieldType = {
  username?: string
  email?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const SignupForm = () => {
  return (  
    <div className="py-10">
      <div className="flex flex-col items-center">
        <Image src={'/logo.svg'} width={200} height={200} alt="logo"/>
        <h1 className=" text-3xl font-medium">Sign Up</h1>
        <p className="text-slate-500 text-sm mt-3">Already have a account! Sign in to start.
          <Link href={'/signin'}>
            <span className="text-blue-600 font-medium"> Sign In</span>
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 -ml-[100px]">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 1200, minInlineSize: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[15, 15]}>
            <Col span={48} md={24}>
              <Form.Item
                className="text-[20px]"
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input 
                  className=" text-base" 
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col span={48} md={24}>
              <Form.Item
                className="text-[20px]"
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Please enter info!' }]}
              >
                <Input 
                  className=" text-base" 
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
              <Col span={48} md={24}>
                <Form.Item
                  className="text-[20px]"
                  label="Password"
                  name="password"
                  hasFeedback
                  rules={[{ required: true, message: 'Please enter info!' }]}
                >
                  <Input.Password 
                    className=" text-base" 
                  />
                </Form.Item>
              </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col span={48} md={24}>
              <Form.Item
                className="text-[20px]"
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[{ required: true, message: 'Please enter info!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                          return Promise.resolve()
                      }
                      return Promise.reject(new Error('Password not validated!'))
                    },
                  })
                ]}
              >
                <Input.Password 
                  className="text-base" 
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col span={12} md={12}>
              <Form.Item>
                <Checkbox className="ml-[200px] min-w-[200px]">Agree with policies</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[15, 15]}>
            <Col span={24} md={12}>
              <Form.Item>
                <Button className='ml-[200px] bg-black text-white font-medium mt-2 flex justify-center items-center px-8 py-6' type="primary" htmlType="submit">Sign Up</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
 
export default SignupForm;
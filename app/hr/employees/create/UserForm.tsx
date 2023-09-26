'use client'
import {Button, Form, Input} from "antd";


const UserForm = ({onSubmit}) => {

    const onFinish = (values: any) => {
        console.log('Success:', values);

        onSubmit && onSubmit(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();
    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
        >
            <Form.Item
                label="E-mail"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Name"
                name="firstName"
                rules={[{required: true, message: 'Please input your name!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Last name"
                name="lastName"
                rules={[{required: true, message: 'Please input your last name!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your last name!'}]}
            >
                <Input/>
            </Form.Item>


            <Form.Item
                label="Confirm password"
                name="confirmPassword"
                rules={[{required: true, message: 'Please input your last name!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserForm;
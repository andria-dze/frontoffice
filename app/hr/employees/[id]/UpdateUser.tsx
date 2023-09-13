import {Button, Form, Input} from "antd";

const UpdateUser = ({user}) => {
    const onFinish = (data) => {
        console.log('update', data);
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
            initialValues={user}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
        >
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

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UpdateUser;
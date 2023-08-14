'use client'
import {CSSProperties} from "react";
import {Layout, Menu, theme} from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from "next/link";
import {R_EMPLOYEES, R_HOME, R_HR, R_MEDICAL} from '@/constants/routes'

const siderStyle: CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
};
const Sider = () => {
    return (
        <Layout.Sider style={siderStyle}>
            <div className='p-0 fs-7' style={{lineHeight: '1', padding: 8}}>
                <Link href={R_HOME}><HomeOutlined /> Home</Link>

            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[
                {
                    key: 'hr',
                    icon: <TeamOutlined/>,
                    label: <Link href={R_HR}>HR</Link>,
                    children: [
                        {
                            key: 'employees',
                            icon: <UserOutlined/>,
                            label: <Link href={R_EMPLOYEES}> Employees</Link>,
                        }
                    ],
                }, {
                    key: 'medical',
                    icon: <DesktopOutlined/>,
                    label: <Link href={R_MEDICAL}>Medical</Link>,
                }
            ]}/>
        </Layout.Sider>
    );
};

export default Sider;
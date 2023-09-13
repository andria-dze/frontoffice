'use client'
import {CSSProperties, useState} from "react";
import {Layout, Menu, theme} from 'antd';
import {
    DashboardOutlined,
    DesktopOutlined,
    FileOutlined,
    HomeOutlined,
    TeamOutlined, UserAddOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Link from "next/link";
import {R_CREATE_EMPLOYEES, R_EMPLOYEES, R_HOME, R_HR, R_MEDICAL} from '@/app/_constants/routes'

const siderStyle: CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
};

const Sider = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout.Sider style={siderStyle} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

            <div className='p-0 fs-7' style={{lineHeight: '1', padding: 8}}>
                <Link href={R_HOME}><HomeOutlined/> Home</Link>

            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[
                {
                    key: 'hr',
                    icon: <TeamOutlined/>,
                    label: <div>HR</div>,
                    children: [
                        {
                            key: 'hrDashboard',
                            icon: <DashboardOutlined/>,
                            label: <Link href={R_HR}>Dashboard</Link>,
                        },
                        {
                            key: 'employees',
                            icon: <UserOutlined/>,
                            label: <Link href={R_EMPLOYEES}>Employees</Link>,
                        }, {
                            key: 'addEmployee',
                            icon: <UserAddOutlined/>,
                            label: <Link href={R_CREATE_EMPLOYEES}>Add New Employee</Link>,
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
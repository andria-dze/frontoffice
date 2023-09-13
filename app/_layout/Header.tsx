'use client'
import {CSSProperties} from "react";
import {Layout, Menu, theme} from 'antd';


const headerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
};

const Header = ({children}) => {
    return (
        <Layout.Header style={headerStyle}>
            Header
        </Layout.Header>
    );
};

export default Header;
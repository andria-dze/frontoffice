'use client'
import {CSSProperties} from "react";
import {Layout, Menu, theme} from 'antd';


const Content = ({children}) => {
    return (
        <Layout.Content style={{padding: '16px 24px'}}>
            {children}
        </Layout.Content>
    );
};

export default Content;
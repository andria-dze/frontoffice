'use client'
import {CSSProperties} from "react";
import {Layout, Menu, theme} from 'antd';


const Content = ({children}) => {
    return (
        <Layout.Content >
            {children}
        </Layout.Content>
    );
};

export default Content;
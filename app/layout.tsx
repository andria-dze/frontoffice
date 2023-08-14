import React from 'react';
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ConfigProvider, Layout, Space} from 'antd';
import Sider from "@/app/layout/Sider";
import Content from "@/app/layout/Content";
import Header from "@/app/layout/Header";
import StyledComponentsRegistry from "@/app/layout/AntdRegistry";
import theme from "@/app/layout/themeConfig";
import RecoilRootProvider from "@/data/RecoilRootProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Medical ERP',
    description: 'Generated by biological AI',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
                <RecoilRootProvider>
                    <Layout className={inter.className}>
                        <Sider>Sider</Sider>
                        <Layout>
                            <Header/>
                            <Content>
                                {children}
                            </Content>
                        </Layout>
                    </Layout></RecoilRootProvider>

            </ConfigProvider>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

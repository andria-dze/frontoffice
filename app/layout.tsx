import './globals.css'
import type {Metadata} from 'next'
import {ConfigProvider, Layout, Space} from 'antd';
import Sider from "@/app/_layout/Sider";
import Content from "@/app/_layout/Content";
import Header from "@/app/_layout/Header";
import StyledComponentsRegistry from "@/app/_layout/AntdRegistry";
import theme from "@/app/_layout/themeConfig";
import RecoilRootProvider from "@/app/_data/RecoilRootProvider";

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
        <html lang="en" id='root'>
        <body>
        <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
                <RecoilRootProvider>
                    <Layout style={{minHeight: '100vh'}}>
                        <Sider>Sider</Sider>

                        <Layout>
                            <Header/>
                            <Content>
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                </RecoilRootProvider>

            </ConfigProvider>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}

import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export function CustomTheme(props: Props) {
  const { children, window } = props;
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'left' }}>
        Copyright © 2021 Trend Micro Incorporated. All rights reserved.
      </Footer>
    </Layout>
  );
}
export default CustomTheme;

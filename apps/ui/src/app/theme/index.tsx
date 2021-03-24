import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Avatar, BackTop, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

interface Props {
  children: React.ReactElement;
}

export function CustomTheme(props: Props) {
  const { children } = props;
  return (
    <Layout>
      <BackTop />
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="pc-logo">
          <img src="./assets/logo-tm_white.png" alt="tm-logo" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="4" style={{float: 'right'}}>
            <Avatar size={48} icon={<UserOutlined />} />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>{children}</Content>
      <Footer className="pc-footer">
        Copyright © 2021 Trend Micro Incorporated. All rights reserved.
      </Footer>
    </Layout>
  );
}
export default CustomTheme;

import React from 'react';

import styles from './app.module.scss';
// import { Route } from 'react-router-dom';
import { UiTheme } from '@tmbc/ui/theme';
import { Row, Col } from 'antd';
import Introduction from './components/Introduction';

export function App() {
  return (
    <UiTheme>
      <Row>
        <Col flex="3" style={{ border: '#0000FF 2px solid' }}>
          <Introduction />
        </Col>
        <Col flex="2" style={{ border: '#0000FF 2px solid', padding: '20px' }}>
          <h2>X Terminal</h2>
        </Col>
      </Row>
    </UiTheme>
  );
}

export default App;

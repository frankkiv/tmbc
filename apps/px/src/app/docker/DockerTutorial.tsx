import React from 'react';
import { UiTheme } from '@tmbc/ui/theme';
import { Row, Col } from 'antd';
import Introduction from './Introduction';

export function DockerTutorial() {

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

export default DockerTutorial;

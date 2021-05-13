import React from 'react';
import { UiTheme } from '@tmbc/ui/theme';
import { Row } from 'antd';
import { PxBrief } from './PxBrief/PxBrief';
import { PxMain } from './PxMain/PxMain';
// import Introduction from './../components/Introduction';

export function QwiklabTutorial() {

  return (
    <UiTheme>
      <Row
        style={{
          height: '100%',
        }}
      >
        <Row
          style={{
            height: '100%',
          }}
        >
          <PxBrief />
        </Row>
        <Row>
          <PxMain />
        </Row>
      </Row>
    </UiTheme>
  );
}

export default QwiklabTutorial;

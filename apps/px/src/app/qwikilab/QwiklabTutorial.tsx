import React, { useEffect, useState } from 'react';
import { UiTheme } from '@tmbc/ui/theme';
import { Row, Col, Anchor, Typography } from 'antd';
import { sections } from './mockData';
// import Introduction from './../components/Introduction';

const { Link } = Anchor;
const { Title, Paragraph } = Typography;

export function QwiklabTutorial() {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <UiTheme>
      <Row
        style={{
          height: '100%',
        }}
      >
        <Col flex="none" style={{ border: 'black 2px solid', padding: '40px' }}>
          <h1>Timmer block</h1>
          <h1>Resource block</h1>
        </Col>
        <Col
          flex="1"
          style={{
            border: '#0000FF 2px solid',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <article
            style={{
              border: '#0000FF 2px solid',
              flex: ' 1 1 auto',
              overflowY: 'auto',
              minHeight: '0px',
            }}
          >
            {sections.map((section, index) => (
              <>
                <Title level={2} id={'px' + index}>
                  {section.title}
                </Title>
                <Paragraph>{section.context}</Paragraph>
              </>
            ))}
          </article>

        </Col>
        <Col flex="3" style={{ border: '#0000FF 2px solid', padding: '20px' }}>
          <Anchor targetOffset={targetOffset}>
            {sections.map((section, index) => (
              <Link href={'./qwiklab#px' + index} title={section.title} />
            ))}
          </Anchor>
        </Col>
      </Row>
    </UiTheme>
  );
}

export default QwiklabTutorial;

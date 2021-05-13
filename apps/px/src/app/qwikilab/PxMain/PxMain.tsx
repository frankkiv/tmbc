import React, { useEffect, useState } from 'react';
import { Row, Col, Anchor, Typography, Affix } from 'antd';
// import './PxMain.scss';
import { sections } from './mockData';

const { Link } = Anchor;
const { Title, Paragraph } = Typography;

export function PxMain() {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined
  );
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <>
      <Col flex="1.5" style={{ border: 'black 2px solid', padding: '20px' }}>
        <Affix offsetTop={80}>
          <h1>Timmer block</h1>
          <h1>Resource block</h1>
        </Affix>
      </Col>
      <Col
        flex="4"
        style={{
          border: '#0000FF 2px solid',
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
      <Col flex="2" style={{ border: '#0000FF 2px solid', padding: '20px' }}>
        <Affix offsetTop={80}>
          <Anchor targetOffset={targetOffset}>
            {sections.map((section, index) => (
              <Link href={'./qwiklab#px' + index} title={section.title} />
            ))}
          </Anchor>
        </Affix>
      </Col>
    </>
  );
}

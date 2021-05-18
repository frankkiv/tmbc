import React, { useEffect, useState } from 'react';
import {
  Col,
  Anchor,
  Typography,
  Affix,
  Space,
  Card,
  Input,
  Tooltip,
} from 'antd';
// import './PxMain.scss';
import { sections } from './mockData';
import { PxResource } from '../PxResource/PxResource';

const { Link } = Anchor;
const { Title, Paragraph } = Typography;

export function PxMain() {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined
  );
  const [pxState, setPxState] = useState<'initializing' | 'ready' | 'error'>(
    'initializing'
  );
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPxState('ready');
    }, 5000);
  }, []);
  return (
    <>
      <Col flex="none" style={{ border: 'black 2px solid', padding: '20px' }}>
        <Affix offsetTop={80}>
          <Space direction="vertical">
            <Card style={{ width: 350 }}>
              <p>Timer Block</p>
            </Card>
            <PxResource state={pxState} />
          </Space>
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

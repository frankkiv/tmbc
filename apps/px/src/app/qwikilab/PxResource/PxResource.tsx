import React from 'react';
import { Card, Input, Button } from 'antd';
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import './PxResource.scss';

export function PxResource(props: {
  state: 'initializing' | 'ready' | 'error';
  resources?: [];
}) {
  const onIconClick = () => alert('copied!');
  const openConsole = () => alert('clicked!');

  if (props.state === 'initializing')
    return (
      <Card className="rs-block">
        <h4> Provisiong lab resources </h4>
        <LoadingOutlined
          spin
          style={{ fontSize: '100px', width: '100%', margin: '2rem 0 2rem 0' }}
        />
        <h4> Est. time remaining 1 minute </h4>
      </Card>
    );
  if (props.state === 'error')
    return (
      <Card className="rs-block">
        <h4>
          There is an error when loading the resource, please retry the PX
        </h4>
      </Card>
    );
  if (props.state === 'ready')
    return (
      <>
        <Card className="rs-block">
          <Button className="console-button" onClick={openConsole}>
            Open Console
          </Button>
          <div className="rs-title">S3 Bucket</div>
          <Input
            placeholder=""
            className="rs-context"
            value="test"
            disabled
            suffix={<CopyOutlined onClick={onIconClick} />}
          />
          <div className="rs-title">AWS account</div>
          <Input
            placeholder=""
            className="rs-context"
            value="test"
            disabled
            suffix={<CopyOutlined onClick={onIconClick} />}
          />
          <div className="rs-title">AWS password</div>
          <Input
            placeholder=""
            className="rs-context"
            value="test" 
            disabled
            suffix={<CopyOutlined onClick={onIconClick} />}
          />
        </Card>{' '}
      </>
    );
}

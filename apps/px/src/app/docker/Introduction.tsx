import React, { useEffect, useState } from 'react';
import { Row, Col, Steps } from 'antd';
import { instructions} from './mockData';
const { Step } = Steps;
/* eslint-disable-next-line */
export interface IntroductionProps {}

export function Introduction(props: IntroductionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const onClickStep = (current) => {
    console.log('onChange:', current);
    setCurrentStep(current);
  };

  return (
    <Row>
      <Col flex="none" style={{ border: 'black 2px solid', padding: '20px' }}>
        <h2>Steps</h2>
        <Steps
          direction="vertical"
          size="small"
          current={currentStep}
          onChange={onClickStep}
        >
          {instructions.map((step)=>
            <Step title={step.title} description={step.description} />
          )}
        </Steps>
      </Col>
      <Col flex="auto" style={{ border: 'black 2px solid', padding: '20px' }}>
        <h2>{instructions[currentStep]?.title}</h2>
        <p>{instructions[currentStep]?.description}</p>
      </Col>
    </Row>
  );
}

export default Introduction;

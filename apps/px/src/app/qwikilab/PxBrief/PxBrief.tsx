import React from 'react';
import { Row, Col } from 'antd';
import './PxBrief.scss';

export function PxBrief() {
  return (
    <section className="banner">
      <div className="px-info">
        <div>
          <h1 className="px-title">
            Cloud One Network Security: Edge Protection Deployment
          </h1>
          <p className="px-sub-title">
            This Product Experience will guide you through the process of
            deploying Cloud One Network Security to your existing AWS VPC
          </p>
        </div>
        <div>pic</div>
      </div>
      <Row justify="space-around" className="px-brief">
        <Col span={12}>
          <h5>What you'll learn</h5>
          <p>
            。 How to deploy Cloud One Network security on AWS using the Edge
            Protection Deployment Model <br />。 How to verify the deployment is
            working
          </p>
        </Col>
        <Col span={12}>
          <h5>What we'll provide</h5>
          <p>
            a temporary AWS account with a well defined and documented
            architecture which you will use to deploy Cloud One Network security
          </p>
        </Col>

        <Col span={12}>
          <h5>What you'll need to have</h5>
          <p>A Cloud One Account. You can create one fore free here.</p>
        </Col>
        <Col span={12}>
          <h5>Prerequisites</h5>
          <p>
            。 Familiarity with AWS Networking Model and Amazon VPC ingress
            routing
            <br />。 A general understanding of Cloud Formation Templates
          </p>
        </Col>
      </Row>
    </section>
  );
}

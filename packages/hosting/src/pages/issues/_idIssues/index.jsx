import React from "react";
import { Col, Row, Typography } from "antd";

export const IssuesIntegration = () => {
  return <Issue />;
};

const Issue = () => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={3}>EQUIPO</Typography.Title>
      </Col>
    </Row>
  );
};

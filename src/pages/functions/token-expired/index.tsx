import { useMutation } from '@tanstack/react-query';
import { Card, Row, Col, Typography, Button } from 'antd';

import demoService from '@/api/services/demoService';

export default function TokenExpired() {
  const tokenExpiredMutation = useMutation(demoService.mockTokenExpired);
  const mockTokenExpired = () => {
    tokenExpiredMutation.mutate();
  };
  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Typography.Text>
            Clicking a button to simulate a token expiration scenario.
          </Typography.Text>
        </Col>
        <Col span={24} md={12}>
          <Button type="primary" onClick={mockTokenExpired}>
            Simulate Token Expired
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

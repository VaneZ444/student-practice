import { Card, Typography } from 'antd';
import React from 'react';

export const TournamentsPage: React.FC = () => (
  <div style={{ padding: 24 }}>
    <Typography.Title level={3}>Текущие турниры</Typography.Title>
    <Card>
      <Typography.Text>Информация о турнирах появится здесь</Typography.Text>
    </Card>
  </div>
);

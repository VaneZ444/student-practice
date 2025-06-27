import { Card, Typography } from 'antd';

export const MainPage: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={3}>Главная</Typography.Title>
      <Card>
        <Typography.Text>Задание для студентов</Typography.Text>
      </Card>
    </div>
  );
};

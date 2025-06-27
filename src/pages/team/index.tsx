import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, theme, Typography } from 'antd';
import React from 'react';

export const TeamPage: React.FC = () => {
  const { token } = theme.useToken();

  return (
    <div style={{ padding: token.paddingLG }}>
      <Typography.Title level={3}>Состав команды</Typography.Title>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: token.margin,
        }}
      >
        {[1, 2, 3, 4, 5].map((member) => (
          <Card key={member} hoverable>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: token.margin }} />
              <div>
                <Typography.Text strong>Игрок {member}</Typography.Text>
                <Typography.Text type="secondary">
                  {member === 1 ? 'Капитан' : 'Участник'}
                </Typography.Text>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

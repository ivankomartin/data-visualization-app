import React from 'react';
import { Avatar, Space, Typography, Button } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';

const { Title } = Typography;

const styles = {
    card: {
        border: '1px solid #F0EFEF',
        borderRadius: '7px',
        padding: '20px 15px 15px',
        width: '100%',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0
    },
    cardChart: {
        padding: '40px',
    },
    iconSize: {
        width: '20px',
        height: '20px'
    }
} as { [key: string]: React.CSSProperties };

interface ICardProps {
    title?: string;
    children?: React.ReactNode;
}

export const ChartCard: React.FC<ICardProps> = (props) => {
    const { title, children } = props;
    return (
        <div style={styles.card}>
            <Title style={styles.title}>{title}</Title>
            <div style={styles.cardChart}>
                {children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar size={20} icon={<UserOutlined />} />
                <Button type="text" icon={<MessageOutlined />} style={styles.iconSize}  />
            </div>
        </div>
    );
};

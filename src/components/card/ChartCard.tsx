import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const styles = {
    card: {
        border: '1px solid #F0EFEF',
        borderRadius: '7px',
        padding: '20px 15px 7px',
        maxHeight: '500px',
        width: '100%',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0
    },
    cardChart: {
        padding: '40px',
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
        </div>
    );
};

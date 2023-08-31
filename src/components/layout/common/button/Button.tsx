import React, { ReactNode } from 'react';
import { Button as AntdButton, Badge } from 'antd';

const styles = {
    actionButton: {
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        padding: 0,
    },
    actionButtonText: {
        marginRight: '5px',
    },
    badge: {
        marginRight: '5px',
        fontSize: 11,
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
} as { [key: string]: React.CSSProperties };

interface ButtonProps {
    label: string;
    icon: ReactNode;
    color: string;
    count?: string | number;
}

export const Button: React.FC<ButtonProps> = ({ label, count, icon, color }) => (
    <AntdButton type="text" style={styles.actionButton}>
        <span style={styles.actionButtonText}>{label}</span>
        {count && (
            <Badge
                count={count}
                style={{ ...styles.badge, backgroundColor: color }}
            />
        )}
        {icon}
    </AntdButton>
);

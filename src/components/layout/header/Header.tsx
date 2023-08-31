import React from 'react';
import { Layout, Typography } from 'antd';
const { Header: AntHeader } = Layout;
const { Title } = Typography;

const styles = {
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        boxShadow: '0px 5px 20px rgba(0,0,0,0.1)',
        height: 'inherit',
        minHeight: '50px',
        padding: 0,
        zIndex: 100
    },
    contentContainer: {
        padding: '0 15px',
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%',
    },
    appTitle: {
        fontSize: '16px',
        margin: 0,
    }
} as { [key: string]: React.CSSProperties };

const Header: React.FC = () => {  
    return (
        <AntHeader style={styles.header}> 
            <div style={styles.contentContainer}>
                <Title style={styles.appTitle}>Data Visualization App</Title>
            </div>
        </AntHeader>
    );
};

export default Header; 

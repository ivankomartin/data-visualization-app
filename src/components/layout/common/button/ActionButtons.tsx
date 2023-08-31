import { Space } from 'antd';
import { DownloadOutlined, MenuOutlined, FilterOutlined } from '@ant-design/icons';
import {Button} from './Button';

const styles = {
    card: {
        border: '1px solid #F0EFEF',
        borderRadius: '7px',
        padding: '20px 15px 7px'
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: 0
    },
    iconCustomStyle: {
        marginLeft: '7px',
        color: 'green',
        fontSize: '20px'
    },
    spaceCustomStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '40px',
        flexWrap: 'wrap'
    }
} as { [key: string]: React.CSSProperties };

export const ActionButtons: React.FC = () => {

    const buttons = [
        {
            label: 'Export to PDF',
            icon: <DownloadOutlined style={styles.iconCustomStyle} />,
            color: '#52c41a',
        },
        {
            label: 'Notes',
            count: '3',
            icon: <MenuOutlined style={styles.iconCustomStyle} />,
            color: 'gray',
        },
        {
            label: 'Filter',
            count: '9+',
            icon: <FilterOutlined style={styles.iconCustomStyle} />,
            color: '#52c41a',
        },
    ];

    return (
        <Space style={styles.spaceCustomStyle} size={[30, 0]}>
            {buttons.map((button, index) => (
                <Button key={index} {...button} />
            ))}
        </Space>
    );
};

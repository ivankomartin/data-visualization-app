import React from 'react';
import { Col, Layout as antdLayout, Row, Typography } from 'antd';
import { ActionButtons } from '@/components/layout/common/button/ActionButtons';
import { ColumnChart } from '@/components/chart/ColumnChart';
import { DonutChart } from '@/components/chart/DonutChart';
import { Layout } from '@/components/layout/layout/Layout';

const { Content } = antdLayout;
const { Title } = Typography;

const styles = {
    contentContainer: {
        padding: '0 15px',
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%',
    },
    pageTitle: {
        fontSize: '20px',
        margin: '0 30px 0 0',
    },
} as { [key: string]: React.CSSProperties };

const Main: React.FC = () => {
    return (
        <Layout>
            <Content style={styles.contentContainer}>
                <div style={{ marginTop: 20, marginBottom: 10 }}>
                    <Row wrap={false}>
                        <Col flex="none">
                            <Title style={styles.pageTitle}>Page title</Title>
                        </Col>
                        <Col flex="auto"><ActionButtons /></Col>
                    </Row>
                </div>
                <Row gutter={[15, 15]}>
                    <Col xs={24} sm={12}>
                        <ColumnChart />
                    </Col>
                    <Col xs={24} sm={12}>
                        <DonutChart />
                    </Col>
                </Row>
            </Content>
        </Layout>
    ); 
}; 

export default Main;

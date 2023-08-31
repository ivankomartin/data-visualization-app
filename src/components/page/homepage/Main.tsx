import React from 'react';
import { Col, Layout as antdLayout, Row, Typography } from 'antd';
import { ActionButtons } from '@/components/layout/common/button/ActionButtons';
const { Content } = antdLayout;
const { Title } = Typography;

  
import dynamic from "next/dynamic";
import { Layout } from '@/components/layout/layout/Layout';
import { ChartCard } from '@/components/card/ChartCard';
import { IChartData } from '@/interface/IChartData';
const AreaChart = dynamic((): any => import('@/components/chart/AreaChart'), { ssr: false })
const PieChart = dynamic((): any => import('@/components/chart/PieChart'), { ssr: false }) 

const contentContainer: React.CSSProperties = {
    padding: '0 15px',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',
}
const pageTitle: React.CSSProperties = {
    fontSize: '20px',
    margin: '0 30px 0 0',
}

interface IMainProps {
    data: IChartData[]; 
}

export const Main: React.FC<IMainProps> = ({ data }) => {
    return (
        <Layout>
            <Content style={contentContainer}>
                <>
                    <div style={{ marginTop: 20, marginBottom: 10 }}>
                        <Row wrap={false}>
                            <Col flex="none">
                                <Title style={pageTitle}>Page title</Title>
                            </Col>
                            <Col flex="auto"><ActionButtons /></Col>
                        </Row>
                    </div>
                    <Row gutter={[15, 15]}>
                        <Col xs={24} sm={12}>
                            <ChartCard title='Confirmed Rate Over Time'>
                                     <AreaChart data={data} />
                                </ChartCard>
                        </Col>
                        <Col xs={24} sm={12}>
                            <ChartCard title='Death Rate by Month for the Year 2022 - Jan / May'>
                                <PieChart data={data} />
                            </ChartCard>
                        </Col>
                    </Row>
                </>
            </Content >
        </Layout> 
    );  
}; 

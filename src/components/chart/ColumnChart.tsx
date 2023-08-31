import React, { useEffect, useRef, memo } from 'react';
import { Column } from '@antv/g2plot';

interface IData {
    type: string;
    sales: number;
}

const data: IData[] = [
    { type: '1', sales: 38 },
    { type: '2', sales: 52 },
    { type: '3', sales: 61 },
    { type: '4', sales: 145 },
    { type: '5', sales: 48 },
    { type: '6', sales: 38 },
    { type: '7', sales: 38 },
    { type: '8', sales: 38 },
];
const ColumnChart: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const columnPlot = new Column(containerRef.current, {
                data,
                xField: 'type',
                yField: 'sales',
                label: {
                    position: 'middle',
                    style: {
                        fill: '#FFFFFF',
                        opacity: 0.6,
                    },
                },
                xAxis: {
                    label: {
                        autoHide: true,
                        autoRotate: false,
                    },
                },
                meta: {
                    type: { alias: '类别' },
                    sales: { alias: '销售额' },
                },
            });

            columnPlot.render();

            return () => {
                columnPlot.destroy();
            };
        }
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default memo(ColumnChart);
import React, { useEffect, useRef, memo, useMemo } from 'react';
import { Pie } from '@antv/g2plot';
import { IDataPieChart } from '@/interface/IChartData';

interface IAggregatedData {
    [key: number]: number;
}

interface IPieChartProps {
    data: IDataPieChart[];
    width?: number | string;
    height?: number | string;
}

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const PieChart: React.FC<IPieChartProps> = ({ data, width='100%', height='400px' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredData = data.filter((item) => {
        const year = new Date(item.date).getFullYear();
        return year === 2022;
    });

    const pieData = useMemo(() => {
        const aggregatedData: IAggregatedData = {};
        filteredData.forEach((item) => {
            const month = new Date(item.date).getMonth();
            if (!aggregatedData[month]) {
                aggregatedData[month] = 0;
            }
            aggregatedData[month] += item.deathRate;
        });

        return Object.keys(aggregatedData).map((month) => ({
            month: monthNames[parseInt(month)],
            deathRate: Math.round(aggregatedData[parseInt(month)]),
        }));
    }, [filteredData]);

    useEffect(() => {
        if (containerRef.current) {
            const columnPlot = new Pie(containerRef.current, {
                appendPadding: 10,
                data: pieData,
                angleField: 'deathRate',
                colorField: 'month',
                radius: 0.9,
                label: {
                    type: 'inner',
                    offset: '-30%',
                    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                    style: {
                        fontSize: 14,
                        textAlign: 'center',
                    },
                },
                tooltip: {
                    formatter: (datum) => {
                        return { name: datum.month, value: datum.deathRate.toFixed(2) };
                    },
                },
                interactions: [{ type: 'element-active' }],
            });

            columnPlot.render();

            return () => {
                columnPlot.destroy();
            };
        }
    }, [pieData]);

    return <div ref={containerRef} style={{ width, height }}></div>;
};

export default memo(PieChart);

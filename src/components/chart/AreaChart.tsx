import React, { useEffect, useRef, memo } from 'react';
import { Area } from '@antv/g2plot';
import { IdataAreaChart } from '@/interface/IChartData';

interface IAreaChartProps {
    data: IdataAreaChart[];
    width?: number | string;
    height?: number | string;
}
const AreaChart: React.FC<IAreaChartProps> = ({ data, width ='100%', height ='400px' }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const area = new Area(containerRef.current, {
                data,
                xField: 'date',
                yField: 'confirmedRate',
                xAxis: {
                    range: [0, 1],
                },
            });
            area.render();

            return () => {
                area.destroy();
            };
        }
    }, [data]);

    return <div ref={containerRef} style={{ width, height }}></div>;
};

export default memo(AreaChart);
import React, { useEffect, useRef, memo } from 'react';
import { Area } from '@antv/g2plot';

const data = [
    {
        "timePeriod": "2006 Q3",
        "value": 1
    },
    {
        "timePeriod": "2006 Q4",
        "value": 1.08
    },
    {
        "timePeriod": "2007 Q1",
        "value": 1.17
    },
    {
        "timePeriod": "2007 Q2",
        "value": 1.26
    },
    {
        "timePeriod": "2007 Q3",
        "value": 1.34
    },
    {
        "timePeriod": "2007 Q4",
        "value": 1.41
    },
    {
        "timePeriod": "2008 Q1",
        "value": 1.52
    },
    {
        "timePeriod": "2008 Q2",
        "value": 1.67
    },
    {
        "timePeriod": "2008 Q3",
        "value": 1.84
    },
    {
        "timePeriod": "2008 Q4",
        "value": 2.07
    },
    {
        "timePeriod": "2009 Q1",
        "value": 2.39
    },
    {
        "timePeriod": "2009 Q2",
        "value": 2.71
    },
    {
        "timePeriod": "2009 Q3",
        "value": 3.03
    },
    {
        "timePeriod": "2009 Q4",
        "value": 3.33
    },
    {
        "timePeriod": "2010 Q1",
        "value": 3.5
    },
    {
        "timePeriod": "2010 Q2",
        "value": 3.37
    },
    {
        "timePeriod": "2010 Q3",
        "value": 3.15
    },
    {
        "timePeriod": "2010 Q4",
        "value": 3.01
    },
    {
        "timePeriod": "2011 Q1",
        "value": 2.8
    },
    {
        "timePeriod": "2011 Q2",
        "value": 2.8
    },
    {
        "timePeriod": "2011 Q3",
        "value": 2.84
    },
    {
        "timePeriod": "2011 Q4",
        "value": 2.75
    }
]


const AreaChart: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const area = new Area(containerRef.current, {
                data,
                xField: 'timePeriod',
                yField: 'value',
                xAxis: {
                    range: [0, 1],
                },
            });
            area.render();

            return () => { 
                area.destroy()
            }
        }
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default memo(AreaChart);
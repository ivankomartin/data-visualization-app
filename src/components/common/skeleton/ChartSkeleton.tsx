import { Skeleton } from "antd";

const ChartSkeleton: React.FC = () =>
    <Skeleton.Button style={{ height: 300}} active={true} size={'large'} shape={'default'} block={true} />

export default ChartSkeleton;

import { FC, ReactNode } from "react";
import Header from "../header/Header";
import { Layout as LayoutAntd, Space } from 'antd';
import Main from "../main/Main"

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <LayoutAntd>
                <Header />
                <Main>{children}</Main>
           </LayoutAntd>
        </Space>
    )
}
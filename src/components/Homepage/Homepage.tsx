import React from "react";
import { Header as HeaderTab } from "../Header";
import MainContent from "./HomepageBody";
import { Footer as FooterContent } from "../Footer";
import { HomepageTitle } from "../../constants";
import { Layout, Typography } from 'antd';

import './styles.css'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Homepage = () => {
    return (
        <Layout>
            <Layout className="header-content-layout">
                {/* <Header className="homepage-header">
                    <HeaderTab />
                </Header> */}
                <Content className="homepage-content">
                    <MainContent />
                </Content>
            </Layout>
            {/* <FooterContent /> */}
        </Layout>
    )
}

export default Homepage;

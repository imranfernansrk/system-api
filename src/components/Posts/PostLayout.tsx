import React from "react";

import "./styles.css";
import { Row, Col } from "antd"


const PostLayout = (children: JSX.Element[]) => {
    return (
        <Row>
            <Col span={4} style={{ backgroundColor: 'aqua' }}>
            </Col>
            <Col span={16}>
                {}
            </Col>
            <Col span={4} style={{ backgroundColor: 'aqua' }}>
            </Col>
        </Row>
    )
}

export default PostLayout;
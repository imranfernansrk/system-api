import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchPostCommentsDatas } from "../../actions";
import { SystemAPIModels } from "../../models";
import CommentsContent from "./CommentsContent";

import "./styles.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { Row, Col } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";


const Comments = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const postcommentsData: [] | any = useSelector<SystemAPIModels.RootState>(state => state.posts);
    const [showPosts, setShowPosts] = useState<boolean>(false)
    useEffect(() => {
        const postId = sessionStorage.getItem('postId')
        if (postId != null) {
            let id: number = +postId;
            actionDispatch(fetchPostCommentsDatas(id));
        }
    }, [])
    const onShowPostsLayout = () => {
        sessionStorage.removeItem('postId');
        setShowPosts(true);
    }

    if (showPosts) {
        return (
            <Redirect to="/posts" />
        )
    }
    return (
        <Row>
            <Col span={4} style={{ backgroundColor: 'aqua' }}>
            </Col>
            <Col span={16}>
                <Layout className="comments-container">
                    <Header className="comments-header">
                        <LeftCircleOutlined onClick={() => onShowPostsLayout()} className="comments-header-back" />
                        <span className="comments-header-title">Comments</span>
                    </Header>
                    <Content className="comments-content">
                        <CommentsContent
                            postcommentsData={postcommentsData} />
                    </Content>
                </Layout>
            </Col>
            <Col span={4} style={{ backgroundColor: 'aqua' }}>
            </Col>
        </Row>
    )
}

export default Comments;
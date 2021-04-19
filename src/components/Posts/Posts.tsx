import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchPostDatas, addPostData } from "../../actions";
import PostsContent from "./PostsContent";
import { SystemAPIModels } from "../../models";

import "./styles.css";
import { Row, Col } from "antd"
import Title from "antd/lib/typography/Title";


const Posts = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const postsData: [] | any = useSelector<SystemAPIModels.RootState>(state => state.posts);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [postObject, setPostObject] = useState({
        id: "",
        title: ""
    });

    useEffect(() => {
        actionDispatch(fetchPostDatas());
    }, [])
    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        setPostObject({ ...postObject, [fieldName]: e.target.value });
    }
    const onSubmitEvent = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();
        actionDispatch(addPostData(postObject));
    }
    const onCardChange = (e: string) => {
        console.log("Tabs", e)
    }
    const onSelectComments = (postId: number) => {
        sessionStorage.setItem('postId', postId.toString());
        setShowComments(true);
    }
    if (showComments) {
        return (<Redirect to="/comments" />)
    }
    const height = window.innerHeight + 'px';

    return (
        <div>
            {
                (postsData.length == 0) ? (<div>Loading</div>) :
                    (
                        <div>
                            {/* <form onSubmit={(e) => onSubmitEvent(e)}>
                                <input type="text" placeholder="Enter Id" name="id" onChange={(e) => onChangeEvent(e)} />
                                <input type="text" placeholder="Enter Title" name="title" onChange={(e) => onChangeEvent(e)} />
                                <button onSubmit={(e) => onSubmitEvent(e)} type="submit">Submit</button>
                            </form> */}
                            <Row style={{height: height}} className="post-menu-sidebar">
                                <Col span={4}>
                                    <Title level={5} className="post-sidebar-title">
                                        Post Menu Options
                                    </Title>
                                </Col>
                                <Col span={16} className="post-list-container ">
                                    <PostsContent
                                        postsData={postsData}
                                        onSelectComments={onSelectComments} />
                                </Col>
                                <Col span={4} style={{ backgroundColor: 'black', height: '100%' }}>
                                    <Title level={5} className="post-sidebar-title">
                                        Chat List
                                    </Title>
                                </Col>
                            </Row>
                        </div>
                    )
            }
        </div>
    )

}
export default Posts;
import React, { Dispatch, SetStateAction } from "react";

import "./styles.css";
import { Button, Card } from "antd"
import { CommentOutlined, HeartOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";

interface Props {
    postsData: [],
    onSelectComments: Dispatch<number>,
}
const PostsContents = ({ postsData, onSelectComments }: Props) => {

    return (
        <div>
            {
                (postsData.length == 0) ? (<div>Loading</div>) :
                    (
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {
                                postsData && postsData.map(
                                    (post: any) =>
                                        <li
                                            id={post.id}
                                            key={post.id}>
                                            <Card className="main-card-container"
                                                hoverable>
                                                <Card
                                                    title={
                                                        (
                                                            <>
                                                                <UserOutlined style={{ fontSize: "30px" }} />
                                                                <span>Username</span>
                                                            </>
                                                        )
                                                    }
                                                    className="post-card"
                                                    actions={[
                                                        <HeartOutlined title="hai" className="post-options-button" key="likes" />,
                                                        <CommentOutlined onClick={()=>onSelectComments(post.id)} className="post-options-button" key="comments" />,
                                                        <ShareAltOutlined className="post-options-button" key="share" />,
                                                    ]}>
                                                    <>
                                                        <img alt='' src={post.postImageURL} width='100%' height='auto' />
                                                    </>
                                                </Card>
                                                <div className="post-describe">
                                                    <p style={{ fontWeight: 'bold' }}>{post.likes} likes</p>
                                                    <p><b>Username</b> {post.caption}</p>
                                                    <Button type='link' onClick={()=>{onSelectComments(post.id)}}>View all comments</Button>
                                                </div>
                                            </Card>
                                        </li>
                                )
                            }
                        </ul>
                    )
            }
        </div>
    )
}

export default PostsContents;
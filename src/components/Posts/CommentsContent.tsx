interface Props {
    postcommentsData: [],
}

const CommentsContent = ({postcommentsData}: Props) => {
    return (
        <div>
            {
                (postcommentsData.length == 0) ? (<div>Loading</div>) :
                    (
                        <ul className="comments-lists">
                            {
                                postcommentsData.map((postComment: any) =>
                                    <li key={postComment.id}>
                                        <div>
                                            <p>{postComment.body}</p>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>

                    )
            }
        </div>
    )
}

export default CommentsContent;
import CommentsCard from "./CommentsCard";
import { useState } from "react";

function VideoInfo({ videoData }) {
    const [videoInfo, setVideoInfo] = useState(videoData);
    const [visible, setVisible] = useState(true);

    function handleLikes() {
        const video = {...videoInfo};
        video.upvotes = video.upvotes + 1;
        setVideoInfo(video)
    }

    function handleDislikes() {
        const video = {...videoInfo};
        video.downvotes = video.downvotes + 1;
        setVideoInfo(video)
    }

    function handleHiding() {
        setVisible(!visible)
    }

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={ videoInfo.embedUrl }
                frameBorder="0"
                allowFullScreen
                title={ videoInfo.title }
            />
        <h1> { videoInfo.title } </h1>
        <span> { videoInfo.views } views | Uploaded { videoInfo.createdAt } </span>
        <button onClick={handleLikes}> { videoInfo.upvotes} 👍 </button>
        <button onClick={handleDislikes}> { videoInfo.downvotes} 👎 </button>
        <button onClick={handleHiding}> {visible ? "Hide Comments" : "Show Comments"} </button>
        { visible ? <CommentsCard comments={videoInfo.comments} /> : " " }
        </div>
    )
}

export default VideoInfo;
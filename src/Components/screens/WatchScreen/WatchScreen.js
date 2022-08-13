import React from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../videoMetaData/VideoMetaData";
import Comments from "../../Comments/Comments";
import VideoHorizontal from "../../VideoHorizontal/VideoHorizontal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideoById } from "../../../redux/actions/videos.action";
import Comment from "../../Comment/Comment";

const WatchScreen = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getVideoById(id))
  },[dispatch,id])

  const {video,loading} = useSelector(state => state.selectedVideo)

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          {/* <iframe
            width="100vw"
            height="100%"
            frameBorder="0"
            title="my video"
            allowFullScreen
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe> */}

          <iframe
            title={video?.snippet?.title}
            frameBorder="0"
            allowFullScreen
            height="660"
            width="100%"
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>

          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kFNmPGgox8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>

          {
            !loading ? <VideoMetaData video={video} videoID={id} /> : <h6>Loading...</h6> 
          }

        {/* <VideoMetaData /> */}
      {/* <Comments /> */}
      {
        !loading ? <Comments video={video} videoID={id}/> : <h6>Loading...</h6>
      }
      </Col>

      

      <Col lg={4}>
      <div className="videoHorizontal">
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
        </div>
      </Col>

    </Row>

  );
};

export default WatchScreen;

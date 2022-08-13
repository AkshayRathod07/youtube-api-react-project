import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Video from "../../video/Video";
import CategoriesBar from "../../Categories/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import SkeltonVideo from "../../skelton/SkeltonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategories(activeCategory));
    }
  };
  // console.log(activeCategory);
  return (
    <Container>
      <CategoriesBar />
     
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div className="spinner-border text-danger mx-auto"></div>}
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeltonVideo/>
                </Col>
              ))}
        </InfiniteScroll>
      
    </Container>
  );
};

export default HomeScreen;

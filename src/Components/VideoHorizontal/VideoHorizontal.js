import React from "react";
import "./_VideoHorizontal.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { Col, Row } from "react-bootstrap";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-item-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage src="/img/avatar.png" alt="thumbnail" effect="blur" width='50px  ' className="videoHorizontal__thumbnail" wrapperClassName="videoHorizontal__thumbnail-wrapper" />
        <span className="video__top__duration">{_duration}</span>
      </Col>

      <Col xs={6} md={6} className="videoHorizontal__right p-0">
          <p className="videoHorizontal__title mb-1">
              Be a Ethical hacker in  1s   day
          </p>
          <div className="videoHorizontal__details">
          
          <AiFillEye /> {numeral(100000).format("0.a")} Views •
        
        {moment('2020-9-1').fromNow()}
          </div>
          <div className="videoHorizontal__channel d-flex align-items-center my-1" >
              <p>Akshay Coder</p>
          </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;

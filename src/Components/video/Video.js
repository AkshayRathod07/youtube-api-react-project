import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import "./_Video.scss";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      publishedAt,
      channelId,
      channelTitle,
      title,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, seDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || id;

  const history = useHistory();

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      seDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();

  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      // console.log(items);
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const handleVideoClick = () => {
    history.push(`/watch/${_videoId}`)
    // console.log(_videoId);
  };

  return (
    <div className="video" onClick={handleVideoClick}>
      <div className="video__top">
        {/* <img
          src={medium.url}
          alt=""
        /> */}
        <LazyLoadImage src={medium.url} alt="thumbnail" effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>

      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span> {moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        {/* <img
          src={channelIcon?.url}
          alt="channelIcon"
        /> */}
        <LazyLoadImage src={channelIcon?.url} alt="channelIcon" effect="blur" />

        <p>{channelTitle} </p>
      </div>
    </div>
  );
};

export default Video;

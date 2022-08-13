import React, { useEffect } from "react";
import "./_VideoMetaData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from 'react-show-more-text';
import { useDispatch, useSelector } from "react-redux";
import { getChannelDetails } from "../../redux/actions/Channel.action";

const VideoMetaData = ({video :{snippet,statistics}, videoId}) => {

  const {channelTitle,channelId,description,title,publishAt } = snippet;

  const {viewCount,likeCount,dislikeCount } = statistics;


 const  dispatch = useDispatch();

//  const {snippet:channelSnippet,statistics:channelStatistics} =useSelector(21   => state.channelDetails.channel)
const {
  snippet: channelSnippet,
  statistics: channelStatistics,
} = useSelector(state => state.channelDetails.channel)


  useEffect(()=>{

    dispatch(getChannelDetails(channelId))  

  },[dispatch,channelId])

  return (
    <div>
      <div className="videoMetaData py-2">
        <div className="videoMetaData__top">
          <h5>{title}</h5>

          <div className="d-flex justify-content-between align-items-center py-1">
            <span>
              {numeral(viewCount).format("0.a")} Views •
              {moment({publishAt}).fromNow()}
            </span>

            <div>
              <span className="mr-3" >
                <MdThumbUp size={26} className="mr-1" />
                {numeral(likeCount).format("0.a")}
              </span>
              <span className="mr-3">
                <MdThumbDown size={26} className="mr-1" />
                {numeral(dislikeCount).format("0.a")}
              </span>
            </div>
          </div>
        </div>
        <div className="videoMetaData__channel d-flex justify-content-between align-item-center my-2 py-3">
          <div className="d-flex ">
            <img
              src={channelSnippet?.thumbnails?.medium?.url}
              alt="avatar"
              className="rounder-circle mr-3"
              // width="50px"
            />
            <div className="d-flex flex-column">
              <span>{channelTitle}</span>
              <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} subscribers</span>
            </div>
          
          </div>
          <button className="btn border-0 p-2 m-2">Subscribe</button>

        </div>
        <div className="videoMetaData__description">
          <ShowMoreText
          lines={3}
          more={'SHOW MORE'}
          less={'SHOW LESS'}
          anchorClass={'showMoreText'}
          expanded={false}
          >
        {description}
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;

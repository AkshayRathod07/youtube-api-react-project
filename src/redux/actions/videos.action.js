import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCCESS } from "../actionType"

export const getPopularVideos = () => async (dispatch, getState) => {
    try{
        // LOGIC
        dispatch({
            type:HOME_VIDEOS_REQUEST
        })
       const {data} = await  request('/videos',{
            params: {
                part: 'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'IN',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
            },
        })
         
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:'All'

            },
        })


    }catch(error){

        console.log(error.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        })

    }
}


export const getVideosByCategories = (keyword) => async (dispatch,getState) => {
    try{
        // LOGIC
        dispatch({
            type:HOME_VIDEOS_REQUEST
        })
       const {data} = await  request('/search',{
            params: {
                part: 'snippet',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
                q:keyword,
                type:'video'
            },
        })
         
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword
            },
        })


    }catch(error){

        console.log(error.message);
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payload:error.message
        })

    }
}

export const getVideoById = (id) => async dispatch=>{
    try{
        dispatch({
            type:SELECTED_VIDEOS_REQUEST  
        })
        const {data} = await request('/videos',{
            params:{
                part: 'snippet,statistics',
                id:id,
            }
        })
        dispatch({
            type:SELECTED_VIDEOS_SUCCESS,
            payload:data.items[0],
        })
    }catch(error){
        console.log(error.message);
        dispatch({
            type:SELECTED_VIDEOS_FAIL,
            payload:error.message,
        })
    }
}
export default {
    getFootprint: (state) => state.footprint,
    getSystemNews: (state) => state.system_news,
    getVideoList: (state) => state.video_list,
    getMessageList: (state) => state.message_list,
    getReviewList: (state) => state.review_list,
    getLiveList: (state) => {state.live_list;console.log(state.live_list)}
}
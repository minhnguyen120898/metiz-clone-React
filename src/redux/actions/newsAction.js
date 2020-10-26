import Axios from "axios";

export const fetchNews =  () => {
   
    return async (dispatch) => {
        const res = await Axios.get("http://localhost:3333/news");
        dispatch(setNews(res.data));
    }
}

export const setNews = (news) => {
    return {
        type: "SET_NEWS",
        newsData : news
    }
}
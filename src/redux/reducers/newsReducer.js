
const initialState = {
    news: [],
    loading: false,
    error: false,
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS" : {
            return {
                ...state,
                news : action.newsData
            }
        }
        default : {
            return state;
        }
    }
}

export default newsReducer;
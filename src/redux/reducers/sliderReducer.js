
const initialState = {
    sliders: [],
    error: false,
    loading: false,
};

const sliderReducer = (state = initialState ,action) => {
    switch (action.type) {
        case "FETCH_SLIDER":{
            return {
                ...state,
                sliders : action.dataSlider,
            }
        }        
        default: 
            return state;
    }
}

export default sliderReducer;
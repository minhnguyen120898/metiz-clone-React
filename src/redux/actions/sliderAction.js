import Axios from "axios";

export const fetchSlider = () => {
    
    return async (dispatch) => {
        const res = await Axios.get(`http://localhost:3333/sliders`);
    
        dispatch(setSlider(res.data));
    };
}

export const setSlider = (sliders) => {
    return {
        type: 'FETCH_SLIDER',
        dataSlider: sliders,
    }
}
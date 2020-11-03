import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActor, getImage, getName, getProducer, getRatings, getReleaseDate, getTime, getType } from '../../redux/actions/adminMovieAction';
import Footer from '../partials/footer.component';
import HeaderTopbar from '../partials/headerTopBar.coponent';

function AddMovie() {

    const dispatch = useDispatch();
    const {
        image,
        name,
        producer,
        time,
        ratings,
        actor,
        releaseDate,
        type 
    } = useSelector(state => state.adminMovie);

    const onSubmit = () => {

    }

    return (
        <>
            <HeaderTopbar />
            <div className="admin-movie-add-edit">
                <form onSubmit={onSubmit}>
                    <label>Image</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => dispatch(getImage(e.target.value))}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => dispatch(getName(e.target.value))}
                    />
                    <label>Ratings</label>
                    <input
                        type="text"
                        value={ratings}
                        onChange={(e) => dispatch(getRatings(e.target.value))}
                    />
                    <label>Time</label>
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => dispatch(getTime(e.target.value))}
                    />
                    <label>Producer</label>
                    <input
                        type="text"
                        value={producer}
                        onChange={(e) => dispatch(getProducer(e.target.value))}
                    />
                    <label>Type</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => dispatch(getType(e.target.value))}
                    />
                    <label>Actor</label>
                    <input
                        type="text"
                        value={actor}
                        onChange={(e) => dispatch(getActor(e.target.value))}
                    />
                    <label>Release Date</label>
                    <input
                        type="date"
                        value={releaseDate}
                        onChange={(e) => dispatch(getReleaseDate(e.target.value))}
                    />         
                    <button className="submit" type="submit">
                            Add 
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default AddMovie;
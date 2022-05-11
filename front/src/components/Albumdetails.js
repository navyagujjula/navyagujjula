import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {  getAlbum } from '../redux/albumActions'
import { albumFeatureKey } from "../redux/albumreducer";


const AlbumDetails = () => {
    const { albumId } = useParams()
    const dispatch = useDispatch();
    const singlealbum = useSelector((state) => { return state[albumFeatureKey] });
    console.log(singlealbum);


    useEffect(() => {
        dispatch(getAlbum(albumId))
        // return () => {
        //     dispatch(removeSelectedAlbum());
        // }
        }, [albumId])
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card m-3 p-2" key={singlealbum._id}>
                        <div className="card-header bg-black text-white text-uppercase fw-bold">{singlealbum.albumName}</div>
                        <div className="card-body">
                            <h5 className="card-title text-dark"><span className="fw-bold text-dark">lyricist:</span>  {singlealbum.lyricist}</h5>
                            <p className="card-text"><span className="fw-bold text-dark">musicDirector:</span>
                                {singlealbum.musicDirector}
                            </p>
                            <p className="card-text"><span className="fw-bold text-dark">movieDirector:</span>
                                {singlealbum.movieDirector}
                            </p>
                            <p className="card-text">
                                <span className="fw-bold text-dark">releaseDate:</span>
                                {singlealbum.releaseDate}
                            </p>
                            <p className="card-text">
                                <span className="fw-bold text-dark">productionHouse:</span>
                                {singlealbum.productionHouse}
                            </p>
                            <p>
                                <span className="fw-bold text-dark">price:</span>
                                {singlealbum.price}
                            </p>
                            <p>
                                <span className="fw-bold text-dark">Singer:</span>
                                {singlealbum.singer}
                            </p>


                        </div>
                    </div>
                    <Link to='/albums'>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default AlbumDetails;
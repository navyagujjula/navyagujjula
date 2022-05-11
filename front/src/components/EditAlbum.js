import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbum, updateInput, updateAlbum } from '../redux/albumActions'
import { albumFeatureKey } from "../redux/albumreducer";


const EditAlbum = () => {
    let { albumId } = useParams();
    let dispatch = useDispatch();
    let [submitted, setSubmitted] = useState(false)
    let navigate = useNavigate();

    let selectedAlbumInfo = useSelector((state) => {
        return state[albumFeatureKey];
    })

    let { album } = selectedAlbumInfo;
     
    console.log("FROM EDIT",album);

    let hadleInput = (e) => {
        console.log("From navya", e.target.value);
        dispatch(updateInput(e.target.name, e.target.value))
    }
    let handleSubmit = (e) => {
        e.prevenetDefault();
        dispatch(updateAlbum(albumId, album))
        setSubmitted(true)
    }
    
    useEffect(() => {
        dispatch(getAlbum(albumId))
    }, [albumId])
    return (
        <>
            {submitted ? (navigate('/albums')) : (
                <div className='container w-50 h-75' >
                    <div className='row '>
                        <div className='col'>
                            <pre>{JSON.stringify(album)}</pre>
                            <form className="form-control bg-light" onSubmit={handleSubmit}>
                                <h1 className='heading m-2'>Albums</h1>
                                <p className='para'>Add your albums here</p>
                                <div className="row">
                                    <div className="col m-2">
                                        <input type="text" className="form-control" required placeholder="AlbumName" name="albumName" value={album.albumName} onChange={hadleInput} />
                                    </div>
                                    <div className="col m-2">
                                        <input type="text" className="form-control" required placeholder="Lyricist" name="lyricist" value={album.lyricist} onChange={hadleInput} />
                                    </div>
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="MusicDirector" name="musicDirector" value={album.musicDirector} onChange={hadleInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="MovieDirector" name="movieDirector" value={album.movieDirector} onChange={hadleInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="ReleaseDate" name="releaseDate" value={album.releaseDate} onChange={hadleInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="ProductionHouse" name="productionHouse" value={album.productionHouse} onChange={hadleInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="number" className="form-control " required placeholder="Price" name="price" value={album.price} onChange={hadleInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="Singer" name="singer" value={album.singer} onChange={hadleInput} />
                                </div>

                                <div className="col m-3">
                                    <input className='btn btn-primary' type='submit' value="UPDATE" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>)}
        </>
    );
}
export default EditAlbum;
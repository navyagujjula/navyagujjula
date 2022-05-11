import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { deleteAlbum, getAllAlbums } from '../redux/albumActions'
import { albumFeatureKey } from "../redux/albumreducer";

const Albums = () => {
  let dispatch = useDispatch();

  const albumsInfo = useSelector((state) => { return state[albumFeatureKey] });
  let { albums } = albumsInfo

  const handleDelete =(albumId)=>{
    dispatch(deleteAlbum(albumId))
  }

  useEffect(() => {
    dispatch(getAllAlbums())
  }, [])
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {albums.length > 0 ? (
            <>
              {albums.map((album) => {
                return (
                  <div className="card m-3 p-2" key={album._id}>
                    <div className="card-header bg-info text-white text-uppercase fw-bold">{album.albumName}</div>
                    <div className="card-body">
                      <h5 className="card-title text-dark"><span className="fw-bold text-dark">lyricist:</span>  {album.lyricist}</h5>
                      <p className="card-text"><span className="fw-bold text-dark">musicDirector:</span>
                        {album.musicDirector}
                      </p>
                      <p className="card-text"><span className="fw-bold text-dark">movieDirector:</span>
                        {album.movieDirector}
                      </p>
                      <p className="card-text">
                        <span className="fw-bold text-dark">releaseDate:</span>
                        {album.releaseDate}
                      </p>
                      <p className="card-text">
                        <span className="fw-bold text-dark">productionHouse:</span>
                        {album.productionHouse}
                      </p>
                      <p>
                        <span className="fw-bold text-dark">price:</span>
                        {album.price}
                      </p>
                      <p>
                        <span className="fw-bold text-dark">Singer:</span>
                        {album.singer}
                      </p>
                      {/* <Link to={`/albums/${album._id}`} className="btn btn-primary">
                        View Details
                      </Link> */}

                      <Link to={`/albums/${album._id}`} className="btn btn-dark m-3">
                        Edit Album
                      </Link>

                      <button onClick={handleDelete.bind(this,album._id)} className="btn btn-danger p-2">Delete</button>

                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Albums;
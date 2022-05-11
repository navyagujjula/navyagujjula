import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAlbum } from "../redux/albumActions";



const AddAlbum = () => {
    let [submit, setSubmit] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let [album, setAlbumm] = useState({
        albumName: "",
        lyricist: "",
        musicDirector: "",
        movieDirector: "",
        releaseDate: "",
        productionHouse: "",
        price: "",
        singer: "",
    })

    let updateInput = (event) => {
        setAlbumm({
            ...album, 
            [event.target.name]: event.target.value
        }
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createAlbum(album))
        console.log(album);
        setSubmit(true)
        navigate('/albums')
    }
    return (
        <>
            {submit ? (navigate('/albums')) : (
                <div className='container w-50 h-75' >
                    <div className='row '>
                        <div className='col'>
                        <pre>{JSON.stringify(album)}</pre>
                            <form className="form-control bg-light" onSubmit={handleSubmit}>
                                <h1 className='heading m-2'>Albums</h1>
                                <p className='para'>Add your albums here</p>
                                <div className="row">
                                    <div className="col m-2">
                                        <input type="text" className="form-control" required placeholder="AlbumName" name="albumName" onChange={updateInput} />
                                    </div>
                                    <div className="col m-2">
                                        <input type="text" className="form-control" required placeholder="Lyricist" name="lyricist" onChange={updateInput} />
                                    </div>
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="MusicDirector" name="musicDirector" onChange= { updateInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="MovieDirector" name="movieDirector" onChange={updateInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="ReleaseDate" name="releaseDate" onChange={updateInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="ProductionHouse" name="productionHouse" onChange={updateInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="number" className="form-control "  required placeholder="Price" name="price" onChange={updateInput} />
                                </div>
                                <div className='col m-2'>
                                    <input type="text" className="form-control " required placeholder="Singer" name="singer" onChange={updateInput} />
                                </div>
                               
                                    <div className="col m-3">
                                        <input className='btn btn-primary' type = 'submit' value="ADD ALBUM"/>
                                    </div>
                            
                            </form>
                        </div>
                    </div>
                </div>)}
        </>
    );
}
export default AddAlbum;
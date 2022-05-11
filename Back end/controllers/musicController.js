import MusicForm from '../models/music'

//Creating Album
export const createAlbum = async (req, res) => {
    let newAlbum = {
        albumName: req.body.albumName,
        lyricist: req.body.lyricist,
        musicDirector: req.body.musicDirector,
        movieDirector: req.body.movieDirector,
        releaseDate: req.body.releaseDate,
        productionHouse: req.body.productionHouse,
        price: req.body.price,
        singer: req.body.singer
    }
    try {

        //checking whether user details exists
        let album = await MusicForm.findOne({ albumName: newAlbum.albumName })

        if (album) {
            return res.status(400).json({
                msg: "album already exists"
            })
        }
        album = new MusicForm(newAlbum);
        album = await album.save();
        res.status(201).json({
            result: "Album Created Successfully",
            album: album
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
}

//Getting all albums details
export const albumsDetails = async (req, res) => {
    try {
        let albums = await MusicForm.find();
        res.status(200).json(albums)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
}
//Getting single album
export const singleAlbum = async (req, res) => {
    let albumId = req.params.id;

    try {
        let album = await MusicForm.findById(albumId);
        res.status(200).json(album)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }
}
//Updating the Album
export const updateAlbum = async (req, res) => {
    let albumId = req.params.id;
    let updatealbum = {
        albumName: req.body.albumName,
        lyricist: req.body.lyricist,
        musicDirector: req.body.musicDirector,
        movieDirector: req.body.movieDirector,
        releaseDate: req.body.releaseDate,
        productionHouse: req.body.productionHouse,
        price: req.body.price,
        singer: req.body.singer
    }

    try {
        //checking whether album exists or not
        let album = await MusicForm.findById(albumId);
        if (!album) {
            res.status(400).json({
                msg: "album details doesnot exists"
            })
        }

        //Updating db
        album = await MusicForm.findByIdAndUpdate(
            albumId, {
            $set: updatealbum
        }, { new: true }
        )
        res.status(201).json({
            msg: "Album details updated successfully",
            album: album
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }

}
//Deleting album
export const deleteAlbum = async (req, res) => {
    let albumId = req.params.id;
    let album = await MusicForm.findById(albumId)
    try {

        //Checking album details exists or not
        if (!album) {
            return res.status(400).json({
                msg: "Album details doesnot exists"
            })
        }
        //deleting album details

        album = await MusicForm.findByIdAndDelete(albumId)
        res.status(201).json({
            result: "Album deleted successfully",
            album: album
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        })
    }

}
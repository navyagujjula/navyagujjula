import express from 'express'
const router = express.Router();
import { createAlbum,albumsDetails, singleAlbum,updateAlbum,deleteAlbum} from '../controllers/musicController'

//Creating Album form using POST
router.post('/createalbum', createAlbum)

//getting all albums
router.get('/albums',albumsDetails)

//getting single album by its id
router.get('/albums/:id',singleAlbum)

//Updating album details
router.put('/albums/:id',updateAlbum)

//Deleting album
router.delete('/albums/:id',deleteAlbum)



export default router;
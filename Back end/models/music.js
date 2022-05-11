import mongoose from "mongoose";

const {Schema} = mongoose;

const musicSchema = new Schema({
    albumName:{
        type: String,
        trim:true,
        required:true
    },
    lyricist:{
        type:String,
        trim:true,
        required:true
    },
    musicDirector:{
        type:String,
        trim:true,
        required:true
    },
    movieDirector:{
        type:String,
        trim:true
    },
    releaseDate:{
        type:String,
        trim:true,
        required:true
    },
    productionHouse:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    singer:{
        type:String,
        trim:true,
        required:true
    }
});
export default mongoose.model("MusicForm",musicSchema);
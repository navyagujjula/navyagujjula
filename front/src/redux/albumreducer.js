import * as albumActions from './albumActions';

export const albumFeatureKey = "albums";


let initialState = {
    errorMessage:"",
    albums:[],
    album:{}

}

const albumreducer =(state=initialState,{type,payload}) =>{

       switch(type)
    {
        //get all albums
        case albumActions.GET_ALL_ALBUMS:
            return{
                ...state
            }


         //get all albums success
         case albumActions.GET_ALL_ALBUMS_SUCCESS:
             return{
                 ...state,
                 albums: payload

             }

          //get all albums failure
          case albumActions.GET_ALL_ALBUMS_FAILURE:
              return{
                  ...state,
                  errorMessage: payload
              } 


              //get single album

              case albumActions.GET_ALBUM:
                  return{
                      ...state
                  }


              //get single album success
              case albumActions.GET_ALBUM_SUCCESS:
                return{
                    ...state,
                   album:payload
   
                }

                case albumActions.REMOVE_SELECTED_ALBUM:
                    return{};

              //get single album failure

              case albumActions.GET_ALBUM_FAILURE:
                return{
                    ...state,
                    errorMessage: payload
                } 

                //create album

                case albumActions.CREATE_ALBUM:
                    return{
                        ...state
                       
                    }

                 //create ALBUM success
                 case albumActions.CREATE_ALBUM_SUCCESS:
                    return{
                        ...state
                       
                    }


                  //create album failure

                  case albumActions.CREATE_ALBUM_FAILURE:
                    return{
                        ...state,
                       
                    }


                    //update input
                    case albumActions.UPDATE_INPUT:
                        return{
                            ...state,
                            album: {
                                ...state.album,
                                [payload.key]:payload.value
                            }
                        }


                    //update album

                    case albumActions.UPDATE_ALBUM:
                        return{
                            ...state,
                            
                           
                        }
    

                    //update album success
                    case albumActions.UPDATE_ALBUM_SUCCESS:
                        return{
                            ...state,
                        }
    

                    //update album failure
                    case albumActions.UPDATE_ALBUM_FAILURE:
                        return{
                            ...state,
                           
                        }
    

                        //DELETE album

                    case albumActions.DELETE_ALBUM:
                        return{
                            ...state,
                           
                        }
    

                    //DELETE ALBUM success
                    case albumActions.DELETE_ALBUM_SUCCESS:
                        return{
                            ...state,
                           
                        }
    

                    //DELETE ALBUM failure
                    case albumActions.DELETE_ALBUM_FAILURE:
                        return{
                            ...state,
                           
                        }
  

              default:
                  return state;


    }
}


export { albumreducer};
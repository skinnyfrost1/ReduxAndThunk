const initialState = {
    loading :false,
    posts:[],
    tableToggle:false
}
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const ascynReducer =(state = initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                loading:false,
                posts:action.payload,
                error:''
            }
        case FETCH_POSTS_FAILURE:
            return {
                loading:false,
                posts:[],
                error: action.payload
            }
        default:
            return state;

    }
}


export default ascynReducer;
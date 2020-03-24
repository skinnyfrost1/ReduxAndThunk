
import axios from 'axios';

const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';


export const fetchPostsRequest = ()=>{
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = posts =>{
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}


export const fetchPostsFailure = error =>{
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const fetchPosts = ()=>{
    return dispatch=>{
      dispatch(fetchPostsRequest())
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{
          console.log(response);
        const posts = response.data.map(post => post.id)
        dispatch(fetchPostsSuccess(posts))
      })
      .catch(error=>{
        dispatch(fetchPostsFailure(error.message))
      })
    }
  }




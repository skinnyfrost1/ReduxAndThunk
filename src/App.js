import React from 'react';
import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { fetchPosts } from './actions/ascyncActions';
// import axios from 'axios';
import Postinfo from './Postinfo/Postinfo';
// import {fetchPosts} from './actions/ascyncActions';


const counter = useSelector(state => state.counter)
// const isLogged = useSelector(state => state.isLogged)
const posts = useSelector(state => state.asc.posts)
const dispatch = useDispatch();


class App extends Component {




  // const tableStyle = {
  //   maxWidth: "75%",
  //   margin: "auto"
  // }


  // let postinfo = null;
  // if (this.state.showposts) {
  // postinfo = ((
  //   <table className="postTable" style={tableStyle} border="1">
  //     <thead>
  //       <tr >
  //         <th>userId</th>
  //         <th>id</th>
  //         <th>title</th>
  //         <th>body</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {
  //         posts.map((post, index) => {
  //           return <Postinfo userId={post.userId}
  //             id={post.id}
  //             title={post.title}
  //             body={post.body}
  //             key={post.id} />
  //         })
  //       }
  //     </tbody>
  //   </table>
  // ))

  // }
  // else {
  //   postinfo = null;
  // }


  return() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>Counter {counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(fetchPosts())}>??????</button>
        <div>show something.. </div>
        {/* <div>{posts}</div>
       */}
        <div>
          {
            posts.map((post, index) => {
              return <Postinfo userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
                key={post.id} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;

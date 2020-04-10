import React, { useState } from 'react';


/* ------------------------ useState ------------------------ */ 
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  function handelClick() {
    setCount( count + 2 );
  }

  function changeCount() {
    setCount( 0 );
  }

  return(
    <div>
      <div>{count}</div>
      <button onClick={changeCount}>reset</button>
      <button onClick={handelClick}>+2</button>
    </div>
  )
}

// class Counter extends React.Component{
//   state = {
//     count: 0,
//     name: '',
//   }

//   addClick = () => {
//     this.setState({ count: this.state.count + 2 })
//   }

//   render() {
//     return(
//       <div>
//         <div>{this.state.count}</div>
//         <button onClick={this.addClick}>+2</button>
//       </div>
//     )
//   }
// }
/* ------------------------ end ------------------------ */ 

export default Counter;
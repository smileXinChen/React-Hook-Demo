import React, { useState, createContext, useContext } from 'react';
import Item from './Item';

/* --------------- 同一页面中使用useContext --------------- */ 

// const Text = createContext();
// export default function() {
//     const [count, setCount] = useState(0);
//     return(
//         <div>
//             <Text.Provider value={{ count, setCount }}>
//                 <button onClick={ () => setCount(count + 1) }>+1</button>
//                 <Item/>
//             </Text.Provider>
//         </div>
//     )
// }

// function Item() {
//     const { count, setCount } = useContext(Text);
//     return(
//         <div>
//             item_count: { count }
//             <br />
//             <button onClick={ () => setCount(count -1) }>-1</button>
//         </div>
//     )
// }
/* ------------------------------------------------ */ 

export const Text = createContext();
export default function() {
    const [ count, setCount ] = useState(0);
    return(
        <div>
            <button onClick={ () => setCount( count + 1 ) }>+1</button>
            <Text.Provider value={{ count, setCount }}>
                <Item/>
            </Text.Provider>
        </div>
    )
}
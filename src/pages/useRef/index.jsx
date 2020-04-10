// import React, { useRef, useEffect } from 'react';

// export default function() {

//     const inputValue = useRef();

//     useEffect(() => {
//         inputValue.current.value = 2;
//     })

//     const handelClick = () => {
//         inputValue.current.focus();
//     }

//     return(
//         <div>
//             <input ref={inputValue} type="text" />
//             <br />
//             <button onClick={handelClick}>click</button>
//         </div>
//     )
// }

// import React, { useRef, useEffect } from 'react';

// export default function() {

//     const inputValue = useRef();

//     useEffect(() => {
//         inputValue.current.value = 1;
//     })

//     const handleClick = () => {
//         inputValue.current.focus();
//         console.log(inputValue.current.value, 'inputValue.current.value');
//     }

//     return(
//         <div>
//             <input ref={inputValue} type="text"/>
//             <br />
//             <button onClick={handleClick}>click</button>
//         </div>
//     )
// }
import React, { useRef, useEffect } from 'react';

export default function() {
    const inputValue = useRef();

    useEffect(() => {
        inputValue.current.value = 1;
    })

    const handelClick = () => {
        inputValue.current.focus();
        console.log(inputValue.current.value, 'value+++++');
    }

    return(
        <div>
            <input ref={inputValue} type="text" />
            <br />
            <button onClick={handelClick}>click</button>
        </div>
    )
}
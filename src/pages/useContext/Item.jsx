import React, { useContext } from 'react';
import { Text } from './index';

export default function() {
    const { count, setCount } = useContext(Text);
    return(
        <div>
            item_count: { count }
            <br/>
            <button onClick={ () => setCount( count - 1 ) }>-1</button>
        </div>
    )
}
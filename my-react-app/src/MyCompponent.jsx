import React,{useState,useEffect} from 'react'
function MyComponent(){
    const [count,setCount]=useState(0);

    return(<>
            <p>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            </>  
    );
}
export default MyComponent
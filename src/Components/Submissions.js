import React, { useEffect, useRef, useState } from 'react';
import Data from './Data';
function Submissions(id){
    const [submissions, setSubmissions] = useState([])
    var arr = Object.values(localStorage);
    arr.shift();
     for(let i = 0;i<arr.length;i++){
        arr[i] = JSON.parse(arr[i]);
    }
    console.log(arr);
    // arr.map((value, index)=>console.log(value))
    return(
        <>
        <div className='container'>
            <Data data={arr}/>
        </div>
        </>
    );
}
export default Submissions;
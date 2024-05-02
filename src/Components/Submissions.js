import React, { useEffect, useRef, useState } from 'react';
import Data from './Data';
function Submissions(id){
    var arr = Object.values(localStorage);
    arr.shift();
     for(let i = 0;i<arr.length;i++){
        arr[i] = JSON.parse(arr[i]);
    }
    return(
        <>
        <div className='container'>
            <Data data={arr}/>
        </div>
        </>
    );
}
export default Submissions;

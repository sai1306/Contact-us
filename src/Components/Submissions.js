import React, { useEffect, useState } from 'react';
import Data from './Data';
function Submissions(){
    const [submissions, setSubmissions] = useState([])
    useEffect( ()=>{
        for(let i = 1;i<=localStorage.getItem('id');i++){
            let obj = localStorage.getItem(i);
            obj = JSON.parse(obj);
            setSubmissions([...submissions, obj]);
        }
        console.log(submissions);
    }, []);
    return(
        <>
        <div className='container'>
            <ul>
                {submissions.map((submission, index)=>{
                    <li key={index}>
                        <Data submission={submission} />
                    </li>
                })}
            </ul>
        </div>
        </>
    );
}
export default Submissions;
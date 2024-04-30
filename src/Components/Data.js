import React, { useEffect, useState } from 'react';
function Data(props){
    return(
        <>
         <div>
      <h2>Submission Details:</h2>
      <p>Name: {props.submission.name}</p>
      <p>Email: {props.submission.email}</p>
      <p>Message: {props.submission.message}</p>
      <p>CV: {props.submission.cv}</p>
    </div>
        </>
    );
}
export default Data;
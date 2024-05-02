import React, { useEffect, useState } from 'react';
function Data(props){
    return(
        <>
         <div className="p-5 table-responsive">
         <h1 className='multi'>Applicants Details</h1>
      <table className=" table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index )=> (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td>
                <a href={item.cv}>{item.name}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    );
}
export default Data;

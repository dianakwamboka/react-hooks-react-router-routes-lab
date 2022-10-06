import React from "react";
import { Directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
    <h1>Directors Page</h1>
    {Directors.map((director, index) => 
      <div key={index}>
        <h4>{director.name}</h4>
        <ul>
          {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    )}
  </div>;
}

export default Directors;
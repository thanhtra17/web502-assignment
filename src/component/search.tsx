import React from "react";
 type Prop = {}

 const Search = (prop: Prop) =>{
     return  (
        <form className="d-flex">
        <input className="form-control w-50 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
     )
 }
 export default Search
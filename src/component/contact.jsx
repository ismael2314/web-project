import { useState } from "react";
import { Loading } from "./loading";

export const Contacts = (props) => {
    const [phone,setPhone]=useState();
    const [searchResult,setSearchResult]=useState([{name:"name",phone:"000"}]);

    // form submitting 
    const formHandler=(event)=>{
        event.preventDefault();
        console.log("form submmited",phone, searchResult.length)
    }
  return (
    <div>
    <div
      className="modal fade"
      id="contacts"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Contacts
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body gap-1 d-flex flex-column">
          <form onSubmit={formHandler}>
            <div className="btn-group w-100">
                
                    <input type="tel"  className="form-control" placeholder="Phone number" onChange={(e)=>{
                        setPhone(e.target.value)
                    }} title="phone number"/>
                    <button className="btn btn-primary"
                        style={{background:"#0cb6b6", border:"#0cb6b6"}}
                        type="submit"
                        title="Search"
                        // data-bs-toggle="modal"
                        // data-bs-target="#composer"
                        >
                        <i className="fa-solid fa-search"></i>
                    </button>
            </div>
            </form>
            <div>
              
            </div>
            <div id="contact-list" 
            style={{maxHeight: "300px",overflowY: "auto"}}
            >
                <table className="table w-100 m-0 bg-light table-borderless table-striped table-hover">
                <thead
                className="border border-0 border-white text-white"
                style={{background:"#0cb6b6"}}
                >
                <tr>
                <td>CustomerName</td>
                    <td>PhoneNumber</td>
                    <th>
                        <input type="checkbox" name="" id="" />
                    </th>
                </tr>
                </thead>
            <thead>
              
              {
                searchResult.length<=0?<p className="text-center alert alert-warning"> no result</p>:
                searchResult.map(
                    (result,index)=>{
                        return(
                        <tr>
                            <td>{result.name}</td>
                            <td>{result.phone}</td>
                            <td><input type="checkbox" name="phone[]" value={result.phone}/></td>
                        </tr>
                        )
                    }
                )
            }
            </thead>
          </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#loading"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
    <Loading text="Loading..."/>
    </div>
  );
};

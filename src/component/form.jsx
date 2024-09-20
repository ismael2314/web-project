import { useState } from "react";


export const Forms = (props) => {
    
    return (
        <div className={props.className}>
            <h4>Compose Message</h4>  
            <form className="my-2 d-flex flex-column gap-1">
                <div className="btn-group w-100">
                    <input
                        type="tel"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Phone number"
                        title="phone number"
                    />
                    <button
                        className="btn btn-primary"
                        style={{background:"#0cb6b6", border:"#0cb6b6"}}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#contacts"
                        title="Select phone number"
                    >
                        
                        <i className="fa-solid fa-list"></i>
                    </button>
                    <button
                className="btn btn-primary"
                title="Send to all"
                style={{background:"#0cb6b6",border:"#0cb6b6"}}
              >
                <i className="fa-solid fa-user-group"></i>
              </button>
                </div>
                <div className="border p-2 px-4 rounded-pill d-none">selected phones</div>
                <div className="btn-group w-100">
                    <textarea
                        className="w-100 form-control"
                        rows="15"
                        style={{resize: "none"}}
                        placeholder="write your message"
                        title="SMS text"
                        
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary w-100 d-flex justify-content-between align-items-center"
                    type="button"
                    title="Compose SMS"
                    style={{background:"#0cb6b6", border:"#0cb6b6"}}
                >
                    Compose<i className="fa-solid fa-message"></i>
                </button>
            </form>
        </div>
    );
};
Forms.defaultProps = {className:"col-12 col-md-3 "}

import { useState } from "react";

export const Progress = (props)=>{
    const batchList = props.batchList;
    const [count,setCount] = useState(0);
    return(
        <div className={props.className}>
            <h4>Progress report</h4>
             <div className=" rounded w-100" 
             style={{maxHeight:"440px", overflowY: "auto"}}
             >
                <table className=" border rounded position-relative  table w-100 m-0 bg-light table-borderless table-striped table-hover">
                    <thead className=" position-static border border-0 border-white text-white" 
                    style={{background:"#0cb6b6"}}
                    >
                        <tr >
                            <td>#</td>
                            <td>Batch</td>
                            <td>ElapsedTime</td>
                            <td>Status</td>
                            <td>Detail</td>
                        </tr>   
                    </thead>
                <tbody>
                    { 
                        
                        batchList.length>0 ? batchList.map((batch,index)=>{
                            return(
                            <tr key={index}>
                                <td >{index+1}</td>
                                <td>{batch.batch}</td>
                                <td>{batch.elapsedtime}</td>
                                <td>{batch.status.includes("1")?<span className="text-success"><i className="fa fa-check-circle mx-1"></i>Success</span>:<span className="text-danger"><i className="fa fa-times-circle mx-1"></i>Failed</span>}</td>
                                <td><a className="" href='/fre' target="_blank">Batch Details</a></td>
                            </tr>)
                            setCount(count++)
                        }):<tr ><td className="text-center" colspan={5}>No batchs has been exuted yet</td></tr>
                    }         
                </tbody>
                </table>
            </div>
        </div>            
    )
}
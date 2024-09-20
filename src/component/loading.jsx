
export const Loading = (props)=>{
    return(
        <div className="modal fade" id="loading" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {props.text}
          </div>
        </div>
      </div>
    )
}
Loading.defaultProps = {text:"Loading"}

export const Login = ()=>{
    return (
        <div className="container border rounded col-9 col-md-3 my-5 border-1  py-3">
            <p className="text-center display-6 fw-bold">LogIn</p>
            <hr/>
                <form className="d-flex flex-column gap-2 p-2">
                    <div className='d-flex flex-column gap-2'>
                        <label>E-mail</label>
                        <input type="email" name="email" id="email" className="form-control form-control-sm" placeholder="E-mail" />    
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <label>Password</label>
                        <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="Password" />    
                    </div>
                    <div>
                        <button className="btn btn-sm btn-dark w-100" >Login</button>
                    </div>
                </form>
                <hr/>
                <a href="/signup" >I don't have account?</a>
        </div>
    );

}

export const Signup = ()=>{

    return (
        <div className="container border rounded col-9 col-md-4 col-lg-3 my-5 border-1 py-3">
            <p className="text-center display-6 fw-bold">SignUp</p>
            <hr/>
                <form className="d-flex flex-column gap-2 p-2">
                    <div>
                        <label>E-mail</label>
                        <input type="email" name="email" id="email" className="form-control form-control-sm" placeholder="E-mail" />    
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="Password" />    
                    </div>
                    <div>
                        <label>Confirm-Password</label>
                        <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="Confirm" />    
                    </div>
                    <div>
                        <button className="btn btn-sm btn-dark" >SignUp</button>
                    </div>                    
                </form>
                <hr/>
                <a href="/login" >I have account?</a>
        </div>
    );

}
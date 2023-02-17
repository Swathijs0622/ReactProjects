import React from "react";

function Login(){
    return(
        <div id='demo'>
        <form>
          <input className='css-input' type="text" placeholder='Username' />
          <input className='css-input' type="text" placeholder='Password'/>
          <input className="buttonClass" type="submit"/>
        </form>
      </div>
    )
}

export default Login;
import {Link} from 'react-router-dom';
function Login(){
    return(
        <>
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password" />
                <button>Login</button>
                <div className='error'>This is an error!</div>
            </form>
            
            <span>You don't have an account? <Link to='/register'><div id='create'>Create one!</div></Link> </span>
            
        </div>
        </>
    );
}

export default Login;
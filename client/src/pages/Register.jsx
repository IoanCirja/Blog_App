import {Link} from 'react-router-dom';
function Login(){
    return(
        <>
        <div className="auth">
            <h1>Login</h1>
            <form action="">
                <input required type="text" placeholder="username"/>
                <input required type="email" placeholder="email" />
                <input requred type="text" placeholder="password" />
                <button>Register</button>
                <div className='error'>This is an error!</div>
            </form>
            
            <span>Do you have an account? <Link to='/login'><div id='create'>Login</div></Link> </span>
            
        </div>
        </>
    );
}

export default Login;
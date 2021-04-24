import React from 'react';

// import { Link } from 'react-router-dom';

import { checkUser } from '../services/session';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginDetails: {
                handle: '',
                password: ''
            },
            error: null,
            loginStatus: false,

        }
    }

    handleInputChange(field, event) {
        this.setState({
            loginDetails: {
                ...this.state.loginDetails,
                [field]: event.target.value
            }
        });
    }

    async handleLoginClick(event) {
        event.preventDefault();
        const { history } = this.props;
        const { handle, password } = this.state.loginDetails;

        try {
            this.setState({ 
                loginStatus: true, 
                error: null
            });

            const result = await checkUser({
                handle,
                password
            });

            if (result.error) {
                throw new Error(result.error);
            }
            if (!result.token) {
                throw new Error('no token- try again');
            }

            localStorage.setItem('twitter_clone_token', result.token);
            history.push('/');
            }
             catch (error) {
            this.setState({ error, loginStatus: false })
        }
    }

    render() {

        const { error, loginStatus } = this.state;

        return(

            <div style={{textAlign: 'center'}}>
                <h1>Login</h1>
                <form> 
                    <label>
                        Handle:
                        <input 
                        type="text"
                        value={this.state.loginStatus.handle}
                        onChange={this.handleInputChange.bind(this, 'handle')}
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                        type="password"
                        value={this.state.loginStatus.password}
                        onChange={this.handleInputChange.bind(this, 'password')}
                        />
                    </label>
                    <div>
                       <button onClick={this.handleLoginClick.bind(this)}>Login</button> 
                    </div>
                    <div>
                        {loginStatus && <p>Logging in...</p>}
                        {error && <p>Unable to log in: {error.message}</p>}
                    </div>
                    {/* <div>
                        <Link to="/signup">Sign up</Link>
                    </div> */}
                </form>                    
            </div>
        )
    }
}

export default Login;


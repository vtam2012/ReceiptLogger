import React,{ Component } from 'react';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        );
    }
}

export default Login;
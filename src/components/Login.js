import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.authLogin = this.authLogin.bind(this);
	}

//	componentDidMount() {
//
//    }

    UserList() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(this.state)
        };
        fetch('http://127.0.0.1:5000/login', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ status: data.status }));
        console.log(this.state)
    }

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	authLogin(e) {
		e.preventDefault();
		console.log('Logging you in');
		console.log(this.state);
        this.UserList();
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.authLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>

				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default Login;

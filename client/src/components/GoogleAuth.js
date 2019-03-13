import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId: '1036090379974-hq13n7q3tthqicuad6uns31225ejn08d.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onAuthChange = (isSignedIn) => {
		return isSignedIn === true ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
	};
	onSignInClick = () => {
		this.auth.signIn();
	};
	onSignOutClick = () => {
		this.auth.signOut();
	};
	renderAuthButton = () => {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	};
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}
const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
};
export default connect(mapStateToProps, actions)(GoogleAuth);

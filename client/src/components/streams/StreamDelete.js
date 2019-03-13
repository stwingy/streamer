import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
class StreamDelete extends React.Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchStream(this.props.match.params.id);
	}
	renderActions() {
		return (
			// React.Fragment =multiple elements but no dom presence can write <> </>
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className="ui negative button"
				>
					Delete
				</button>
				<Link to="/" className="ui  button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}
	renderContent() {
		if (!this.props.stream) {
			return <div>Are You Sure You Want To Delete This Stream...............?</div>;
		}
		return `Are You Sure You Want To Delete the stream with title: ${this.props.stream.title}`;
	}
	render() {
		return (
			<Modal
				title="Delete Stream"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => {
					history.push('/');
				}}
			/>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);

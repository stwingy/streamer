import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	onSubmit = (formValues) => {
		//console.log(formValues);
		//we have reducedwhat is in form values to title/description
		//action needs id as well
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		if (!this.props.stream) {
			return <div>...Loading</div>;
		}
		return (
			<div>
				<h3>Edit A Stream</h3>
				{/* initialValues special reduxForm prop
				initialValues={this.props.stream} passes id & userId as well =not needed
				title/description are name of Field in reduxform(streamForm) */}
				{/* <StreamForm initialValues={{ title: 'edit', description: 'change' }} onSubmit={this.onSubmit} /> */}
				<StreamForm
					initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownprops) => {
	return {
		stream: state.streams[ownprops.match.params.id]
	};
};
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);

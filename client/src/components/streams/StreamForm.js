import React from 'react';
//capital F Field=component
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
	renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	};
	renderInput = ({ input, label, meta }) => {
		//console.log('meta ', meta);
		// return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};
	onSubmit = (formValues) => {
		//event.preventDefault() not needed redux-form does it
		console.log(formValues);
		this.props.onSubmit(formValues);
	};
	render() {
		console.log(this.props);
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<Field name="title" component={this.renderInput} label="Enter Title" />
				<Field name="description" component={this.renderInput} label="Enter Description" />
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}
const validate = (formValues) => {
	//error prop name must be same as Field name
	const errors = {};
	if (!formValues.title) errors.title = 'You Must Enter A Title';
	if (!formValues.description) errors.description = 'You Must Enter A Description';
	return errors;
};
export default reduxForm({ form: 'streamForm', validate: validate })(StreamForm);

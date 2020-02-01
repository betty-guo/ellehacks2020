import React, { Component } from 'react' ;

export default class charityform extends React.Component {
	state = {
		charityName: "",
		mission: "",
		needs: ""
	};

	change = e => {
		this.props.onChange({ [e.target.name]: e.target.value });
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		this.setState({
			charityName: "",
			mission: "",
			needs: ""
	});
	this.props.onChange({
		charityName: "",
			mission: "",
			needs: ""
	});
};
	render() {
		return (
			<form>
				<input
				name="charityName"
				placeholder=""
				value={this.state.charityName}
				onChange={e=>this.change(e)}
				/>
				<br />
				<input
				mission="mission"
				placeholder=""
				value={this.state.mission}
				onChange={e=>this.change(e)}
				/>
				<br />
				<input
				 needs="needs"
				placeholder=""
				value={this.state.needs}
				onChange={e=>this.change(e)}
				/>
				<br />
				<br />
				 <button onClick={e => this.onSubmit(e)}>Submit</button>
			</form>
		)
	}
}

//class charityform extends Component {
//	render() {
//		return (
//		<div className="">);
//	}
//}

//export default charityform;
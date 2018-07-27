class HelloWorld extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Hello World!',
		};
	}

	render() {
		return (
			<div className="app">
				<h1 className="app__title">{this.state.title}</h1>
			</div>
		);
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

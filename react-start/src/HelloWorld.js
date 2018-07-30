class HelloWorld extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Rise and Shine!',
			imgUrl: 'https://imgur.com/whm2eGE',
		};
	}

	changeTitle = () => this.setState({ title: 'Rise and Shine Updated!' });

	render() {
		return (
			<div className="app">
				<h1 onClick={this.changeTitle} className="app__title">
					{this.state.title}
					<hr />
					<img src={this.state.imgUrl} alt="Gordon" />
				</h1>
			</div>
		);
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

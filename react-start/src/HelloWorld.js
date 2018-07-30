class HelloWorld extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Hello World!',
			imgUrl: 'https://imgur.com/whm2eGE',
		};
	}

	changeTitle = () => this.setState({ title: 'Hello World Updated!' });

	render() {
		return (
			<div className="app">
				<h1 onClick={this.changeTitle} className="app__title">
					{this.state.title}
					<hr />
					<img src={this.state.imgUrl} alt="" />
				</h1>
			</div>
		);
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

new Vue({
	el: '#app',
	data: {
		title: 'Hello World',
		imgUrl: 'https://i.imgur.com/whm2eGE.jpg',
	},
	methods: {
		changeTitle() {
			this.title = 'Hello World Updated!';
		},
		addSubtitle() {
			return 'Rise and shine, Mister Freeman.';
		},
	},
});

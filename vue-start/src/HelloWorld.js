new Vue({
	el: '#app',
	data: {
		title: 'Rise and Shine',
		imgUrl: 'https://i.imgur.com/whm2eGE.jpg',
	},
	methods: {
		changeTitle() {
			this.title = 'Rise and Shine Updated!';
		},
		addSubtitle() {
			return 'Rise and shine, Mister Freeman.';
		},
	},
});

var nodeIsohunt = require('../node-isohunt');

var opts = {
	ihq: 'ubuntu', 
	start: 1, 
	rows: 3,
	sort: 'seeds',
	order: 'desc'
};

nodeIsohunt(opts, function(data){
	var t = data.items.list.map(function (each) {
		return {
			title: each.title,
			link: each.link,
			torrentUrl: each.enclosure_url,
			size: each.size
		};
	});

	console.log(t);
});
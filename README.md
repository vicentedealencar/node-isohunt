# node-isohunt

Wrapper for the Isohunt API.

## Quick Start

```javascript
	var nodeIsohunt = require('node-isohunt');

	var opts = {
		ihq: 'ubuntu', 	// Takes url encoded value as requested search query. 
		start: 1, 		// Optional. Starting row number in paging through results set. First page have start=1, not 0. Defaults to 1. 
		rows: 3,		// Optional. Results to return, starting from parameter "start". Defaults to 100. Upper limit of 100.
		sort: 'seeds',	// Optional. Defaults to composite ranking (over all factors such as age, query relevance, seed/leechers counts and votes). Parameter takes only values of "seeds", "age" or "size", where seeds sorting is combination of seeds+leechers. Sort order defaults to descending. 
		order: 'desc'	// Optional, can be either "asc" or "desc". Defaults to descending, in conjunction with sort parameter. 
	};
	// obs: start+rows have maximum possible limit of 1000.

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
```

this outputs

```json
	[ 
		{ 
			"title": "<b>ubuntu</b>-12.10-desktop-amd64.iso",
			"link": "http://isohunt.com/torrent_details/422077925/ubuntu?tab=summary",
			"torrentUrl": "http://ca.isohunt.com/download/422077925/ubuntu.torrent",
			"size": "763 MB" 
		},
		{ 
			"title": "<b>ubuntu</b>-12.10-desktop-i386.iso",
			"link": "http://isohunt.com/torrent_details/422077933/ubuntu?tab=summary",
			"torrentUrl": "http://ca.isohunt.com/download/422077933/ubuntu.torrent",
			"size": "753.29 MB" 
		},
		{ 
			"title": "xubuntu-12.10-desktop-i386.iso",
			"link": "http://isohunt.com/torrent_details/422053505/ubuntu?tab=summary",
			"torrentUrl": "http://ca.isohunt.com/download/422053505/ubuntu.torrent",
			"size": "693.29 MB" 
		} 
	]
```


## Isohunt API Results

```json
	{
		"title": "isoHunt > All > ubuntu",
		"link": "http://isohunt.com",
		"description": "BitTorrent Search > All > ubuntu",
		"language": "en-us",
		"category": "All",
		"max_results": 1000,
		"ttl": 15,
		"image": {
			"title": "isoHunt > All > ubuntu",
			"url": "http://isohunt.com/img/buttons/isohunt-02.gif",
			"link": "http://isohunt.com/",
			"width": 157,
			"height": 45
		},
		"lastBuildDate": "Tue, 15 Jan 2013 17:24:31 GMT",
		"pubDate": "Tue, 15 Jan 2013 17:24:31 GMT",
		"total_results": 4000,
		"censored": 0,
		"items": {
			"list": [
				{
					"title": "<b>ubuntu</b>-12.10-desktop-amd64.iso",
					"link": "http://isohunt.com/torrent_details/422077925/ubuntu?tab=summary",
					"guid": "422077925",
					"enclosure_url": "http://ca.isohunt.com/download/422077925/ubuntu.torrent",
					"length": 800063488,
					"tracker": "torrent.<b>ubuntu</b>.com",
					"tracker_url": "http://torrent.ubuntu.com:6969/announce",
					"kws": "",
					"exempts": "<b>Ubuntu</b> CD releases.<b>ubuntu</b>.com",
					"category": "Apps",
					"original_site": "torrent.ubuntu.com",
					"original_link": "http://torrent.ubuntu.com:6969/file?info_hash=%F3l%92%A8%F7%8A%1A%FFp%A6%1A_%5B%FE%5EgW%17a3",
					"size": "763 MB",
					"files": 1,
					"Seeds": 2547,
					"leechers": 69,
					"downloads": 23,
					"votes": 0,
					"comments": 0,
					"hash": "f36c92a8f78a1aff70a61a5f5bfe5e6757176133",
					"pubDate": "Thu, 18 Oct 2012 14:28:48 GMT"
				},
				{
					"title": "<b>ubuntu</b>-12.10-desktop-i386.iso",
					"link": "http://isohunt.com/torrent_details/422077933/ubuntu?tab=summary",
					"guid": "422077933",
					"enclosure_url": "http://ca.isohunt.com/download/422077933/ubuntu.torrent",
					"length": 789884961,
					"tracker": "torrent.<b>ubuntu</b>.com",
					"tracker_url": "http://torrent.ubuntu.com:6969/announce",
					"kws": "",
					"exempts": "<b>Ubuntu</b> CD releases.<b>ubuntu</b>.com",
					"category": "Apps",
					"original_site": "torrent.ubuntu.com",
					"original_link": "http://torrent.ubuntu.com:6969/file?info_hash=3Y%90%D6%15YK%9B%E4%09%CC%FE%B9Xd%E2N%C7%02%C7",
					"size": "753.29 MB",
					"files": 1,
					"Seeds": 1100,
					"leechers": 26,
					"downloads": 10,
					"votes": 1,
					"comments": 1,
					"hash": "335990d615594b9be409ccfeb95864e24ec702c7",
					"pubDate": "Thu, 18 Oct 2012 14:29:22 GMT"
				},
				{
					"title": "xubuntu-12.10-desktop-i386.iso",
					"link": "http://isohunt.com/torrent_details/422053505/ubuntu?tab=summary",
					"guid": "422053505",
					"enclosure_url": "http://ca.isohunt.com/download/422053505/ubuntu.torrent",
					"length": 726970401,
					"tracker": "torrent.<b>ubuntu</b>.com",
					"tracker_url": "http://torrent.ubuntu.com:6969/announce",
					"kws": "",
					"exempts": "Xubuntu CD cdimage.<b>ubuntu</b>.com",
					"category": "Apps",
					"original_site": "torrent.ubuntu.com",
					"original_link": "http://torrent.ubuntu.com:6969/file?info_hash=%25%D3%27%5Cl%5C%16%18%ED%C1%7B%D7b%94%CA%10%BAoH%5E",
					"size": "693.29 MB",
					"files": 1,
					"Seeds": 1021,
					"leechers": 25,
					"downloads": 30,
					"votes": 0,
					"comments": 0,
					"hash": "25d3275c6c5c1618edc17bd76294ca10ba6f485e",
					"pubDate": "Thu, 18 Oct 2012 11:42:45 GMT"
				}
			]
		}
	}
```
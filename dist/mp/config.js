module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/",
	"router": {},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"home": {
			"share": true,
			"windowScroll": false,
			"backgroundColor": "#F7F7F7"
		}
	},
	"redirect": {
		"notFound": "home",
		"accessDenied": "home"
	},
	"optimization": {
		"domSubTreeLevel": 10,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 5000
	}
}
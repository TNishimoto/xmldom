var wows = require('vows'),
	assert = require('assert');
var DOMParser = require('xmldom-alpha').DOMParser;


wows.describe('errorHandle').addBatch({
	'unclosedcomment': function () {
		//var parser = new DOMParser();
		var error = {}
		var parser = new DOMParser({
			errorHandler: function (key, msg) { error[key] = msg.split("\t")[1].split("\n")[0] }
		});

		var doc = parser.parseFromString('<!--', 'text/xml');
		assert.equal(error.error,"Unclosed comment");
		

		/*
		assert['throws'](function () {
			var doc = parser.parseFromString('<!--', 'text/xml');
			console.log(doc + '')
		}, 'Unclosed comment');
		*/
	}
}).run();
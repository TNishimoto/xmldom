var wows = require('vows'),
	assert = require('assert');
var DOMParser = require('xmldom-alpha').DOMParser;
var XMLSerializer = require('xmldom-alpha').XMLSerializer


wows.describe('errorHandle').addBatch({
	'unclosed tag':function(){
		var errors = [];
		var parser = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
		//console.log(parser.parseFromString('<foo')+'');
	},
	'document source':function(){
		var errors = [];
		var parser = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
		var testSource = '<?xml version="1.0"?>\n<!--test-->\n<xml/>'
		var dom = parser.parseFromString(testSource,'text/xml')
		console.assert(new XMLSerializer().serializeToString(dom) == testSource)
	},
	'test':function(){
		var errors = [];
		var parser = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
		var description = "<p>populaciji (< 0.1%), te se</p>";
		var doc = parser.parseFromString(description, 'text/html');
		//console.log(doc.toString())
	}
}).run()








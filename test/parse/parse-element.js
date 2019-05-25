var wows = require('vows');
var assert = require('assert');
var DOMParser = require('xmldom-alpha').DOMParser;
var XMLSerializer = require('xmldom-alpha').XMLSerializer;
var parser = new DOMParser();
// Create a Test Suite
wows.describe('XML Node Parse').addBatch({
    'noAttribute': function () { 
		var errors = [];
		var p = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
    	var dom = p.parseFromString('<xml ></xml>','text/xml');
    	var dom = p.parseFromString('<xml></xml>','text/xml');
    	var dom = p.parseFromString('<xml />','text/xml');
    	var dom = p.parseFromString('<xml/>','text/xml');
		var dom = p.parseFromString('<xml/>','text/xml');

		/*
    	var dom = new DOMParser().parseFromString('<xml ></xml>','text/xml');
    	var dom = new DOMParser().parseFromString('<xml></xml>','text/xml');
    	var dom = new DOMParser().parseFromString('<xml />','text/xml');
    	var dom = new DOMParser().parseFromString('<xml/>','text/xml');
		var dom = new DOMParser().parseFromString('<xml/>','text/xml');
		*/
	},
    'simpleAttribute': function () { 
		var errors = [];
		var p = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
    	var dom = p.parseFromString('<xml a="1" b="2"></xml>','text/xml');
    	var dom = p.parseFromString('<xml a="1" b="2" ></xml>','text/xml');
    	var dom = p.parseFromString('<xml a="1" b=\'\'></xml>','text/xml');
    	var dom = p.parseFromString('<xml a="1" b=\'\' ></xml>','text/xml');
    	var dom = p.parseFromString('<xml a="1" b="2/">','text/xml');
    	var dom = p.parseFromString('<xml a="1" b="2" />','text/xml');
    	var dom = p.parseFromString('<xml  a="1" b=\'\'/>','text/xml');
    	var dom = p.parseFromString('<xml  a="1" b=\'\' />','text/xml');
	},
    'nsAttribute': function () { 
		var errors = [];
		var p = new DOMParser({
			errorHandler: function (key, msg) {
				errors.push(key, msg)
			}
		});
    	var dom = p.parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3"></xml>','text/xml');
    	var dom = p.parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3" ></xml>','text/xml');
     	var dom = p.parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3/">','text/xml');
    	var dom = p.parseFromString('<xml xmlns="1" xmlns:a="2" a:test="3" />','text/xml');
	}
}).run();
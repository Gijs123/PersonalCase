"use strict"

var expect = require('chai').expect;
var Auto = require('../class/autoClass.js');

describe('Auto()', function () {
    it('should by a', function () {


        let auto = new Auto("a","b","c");


        expect(auto.merk).to.be.equal("a");
    });
});

import { HomePage } from "../../pages/homepage/homepage.page";
import * as request from 'request';
import { browser } from "protractor";
var request = require('request');

describe('Example in Protractor', () => {
    var request = require('request');

    var options = {
        method: 'GET',
        url: 'https://reqres.in/api/users/2',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        // body: '{ "headers":{"normalizedNames":{},"lazyUpdate":null}}'
    };

    xit('How to make API call', async done => {
        await request(options, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            done();
        });
    });

    it('Testing timeout in Jasmine', async() => {
        const homepage = new HomePage();
        await homepage.openProtractorUrl();
        const browserTitle = await homepage.getTitle();
        expect(browserTitle).toEqual('Protractor - end-to-end testing for AngularJS');
        console.log('browser title: ' + browserTitle);
        // await homepage.getAccountName();
    })
});

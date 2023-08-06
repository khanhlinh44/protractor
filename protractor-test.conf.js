exports.config = {
    getPageTimeout: 10000,
    allScriptsTimeout: 10,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOtps: {
        showColor: true,
        print: function () { },
        defaultTimeoutInterval: 30000,
    },
    directConnect: true,
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/SearchFilter",
    specs: ['src/specs/**/*.spec.ts'],
    restartBrowserBetweenTests: false,
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    },
    onComplete() {
    }
}
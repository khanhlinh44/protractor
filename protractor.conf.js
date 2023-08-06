exports.config = {
    directConnect: true,
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/SearchFilter/",
    // specs: ['src/specs/**/*.spec.ts'],
    specs: ['src/specs/homepage/examples.spec.ts'],
    restartBrowserBetweenTests: false,
    // Timeout While Waiting For The Page To Load
    getPageTimeout: 10000,
    allScriptsTimeout: 11000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColor: true,
        print: function () { },
        defaultTimeoutInterval: 4000,
    },
    capabilities: {
        'browserName': 'chrome'
    },
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });

        // Getting CLI report
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

        //Getting XML report
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'guitest-xmloutput',
            savePath: '.'
        }));

        //Getting screenshots
        var fs = require('fs-extra');
        fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer.from(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },

    onComplete() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('guitest-xmloutput.xml', testConfig);
        });
    }
}
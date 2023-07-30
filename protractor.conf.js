exports.config = {
    framework: 'jasmine',
    jasmineNodeOtps: {
        showColor: true,
        print: function() {},
        defaultTimeoutInterval: 30000   
    } ,
    directConnect:true, 
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/SearchFilter/",
    specs: ['src/specs/*.spec.ts'],
    restartBrowserBetweenTests: false,
    // overriding default value of getPageTimeout parameter
    // Timeout While Waiting For The Page To Load
    getPageTimeout: 10000,
    allScriptsTimeout: 15000,
    onPrepare() { 
        require('ts-node').register({ 
            project: require('path').join(__dirname, './tsconfig.json')  
          });
    },  

    onComplete() { 
        //global test tear-down goes here 
     }  
 }
const { Browser } = require("puppeteer");

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: '',
      show: true,
      windowSize: '1200x900',
      Browser: 'chrome',
      restart: false,
      host: 'localhost',
      port: 4444,
      protocol: 'http',
      path: '/wd/hub',
      capabilities: {
        browserName: 'chrome',
        platformName: 'linux'
      },
      windowSize: 'maximize',
      timeout: {
        session: 300000
      },
      smartWait: 10000,
      waitForTimeout: 60000
    }
  },
     
  //     desiredCapabilities: {
  //       chromeOptions: {
  //         args: [
  //           '--disable-popup-blocking',
  //           '--disable-infobars',
  //           '--disable-password-manager',
  //         ],
  //         prefs: {
  //           'credentials_enable_service': false,
  //           'profile.password_manager_enabled': false,
  //         },
  //       },
  //     },
  //   }
  // },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  keepBrowserState: true,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/01_loginInvalid.js',
      './step_definitions/02_loginValid.js',
      './step_definitions/03_newVacancies.js',
      './step_definitions/04_logout.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'OrangeHRMCodeceptJS'
  
}
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Tester la page connexion",
  "description": "ETQ utlisateur je souhaite teste la page connexion",
  "id": "tester-la-page-connexion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@authentication"
    }
  ]
});
formatter.before({
  "duration": 2342476400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Tester la page connexion",
  "description": "",
  "id": "tester-la-page-connexion;tester-la-page-connexion",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Je saisie le username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "je saisie le password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Je clique sur le bouton Login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Je me dérige vers la page Home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentcationStepDefinition.jeMeConnecteSurLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 3810065500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 23
    }
  ],
  "location": "AuthentcationStepDefinition.jeSaisieLeUsername(String)"
});
formatter.result({
  "duration": 21743200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d96.0.4664.110)\n  (Driver info: chromedriver\u003d95.0.4638.69 (6a1600ed572fedecd573b6c2b90a22fe6392a410-refs/branch-heads/4638@{#984}),platform\u003dWindows NT 10.0.19043 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027DESKTOP-NBUPSDV\u0027, ip: \u0027192.168.84.204\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.13\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:52651}, webauthn:extension:credBlob\u003dtrue, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d95.0.4638.69 (6a1600ed572fedecd573b6c2b90a22fe6392a410-refs/branch-heads/4638@{#984}), userDataDir\u003dC:\\Users\\fathi\\AppData\\Local\\Temp\\scoped_dir16724_1205411473}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d96.0.4664.110, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 20ad91c8feccfa65f6da8b0700e1fd07\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat com.e2eTests.automation.authentication.pageObject.AuthenticationPage.fillUserName(AuthenticationPage.java:24)\r\n\tat com.e2eTests.automation.authentication.stepDefinition.AuthentcationStepDefinition.jeSaisieLeUsername(AuthentcationStepDefinition.java:36)\r\n\tat ✽.When Je saisie le username \"Admin\"(authentication/Authentication.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 23
    }
  ],
  "location": "AuthentcationStepDefinition.jeSaisieLePassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentcationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentcationStepDefinition.jeMeDérigeVersLaPageHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1505959500,
  "status": "passed"
});
});
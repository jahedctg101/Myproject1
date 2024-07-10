$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/medicalRecord_Verification.feature");
formatter.feature({
  "name": "medical record system verification",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat stepdifinations.Hooks.setUp(Hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_am_in_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid credential and click on Inpatient Ward",
  "keyword": "When "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_valid_credential_and_click_on_Inpatient_Ward()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "verify medical record system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "verify Login in Inpatient Ward",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.verify_Login_in_Inpatient_Ward()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Logout button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdifinations.Hooks.treardown(Hooks.java:24)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat stepdifinations.Hooks.setUp(Hooks.java:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am in Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_am_in_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter valid credential and click on Inpatient Ward",
  "keyword": "When "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_valid_credential_and_click_on_Inpatient_Ward()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test Register a patient",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Register a patient",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_click_on_Register_a_patient()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify I am in Register a patient page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.verify_I_am_in_Register_a_patient_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Patient Demographics",
  "keyword": "And "
});
formatter.match({
  "location": "stepdifinations.medical_Patient_Record.i_enter_Patient_Demographics()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdifinations.Hooks.treardown(Hooks.java:24)\r\n",
  "status": "failed"
});
});
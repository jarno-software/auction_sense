const scanner = require('sonarqube-scanner');
scanner(
  {
  projectKey: "front-end",
  serverUrl: "http://localhost:9000",
  token: "",
  options: {
    "sonar.sources": "./src",
    "sonar.exclusions": "**/test/integration_tests/**, **/test/unit_tests/**",
    "sonar.tests": "./src/test/integration_tests, ./src/test/unit_tests",
    "sonar.test.inclusions": "./src/test/integration_tests/*.test.tsx,./src/test/unit_tests/*.test.tsx",
    "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    "sonar.testExecutionReportPaths": "test-report.xml"
  },
},
() => process.exit()
);
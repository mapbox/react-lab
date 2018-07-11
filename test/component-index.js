'use strict';
// DO NOT MODIFY DIRECTLY 
// This file is generated by a script in bin. 

function getTestCases(m) {
  if (m.testCases) {
    return m.testCases;
  }
  if (m.default && m.default.testCases) {
    return m.default.testCases;
  }
  throw new Error('Every test case module needs a testCases export.');
}

module.exports = [
  { title: 'ChevronousText', cases: getTestCases(require('./components/__tests__/chevronous-text-test-cases.js')) },
  { title: 'QuestionousText', cases: getTestCases(require('./components/__tests__/questionous-text-test-cases.js')) }
];

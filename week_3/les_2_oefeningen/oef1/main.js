const { generateRandomData } = require("./data");
const { process, importantPorcessing } = require("./processing");
const { report, reportingPercentages, advancedReport } = require("./reporting");
// This intentionally longer and more intricate script
// has no functions for students to refactor.

const data = generateRandomData();

process(data);
importantPorcessing(data);

report(data);
reportingPercentages(data);
advancedReport(data);

/**
 * @author Kay Schneider <kayoliver82@gmail.com>
 * @license MIT
 * Nodejs simple grade listing
 * Grade calc listing. Generates an simple terminal output
 * Example of one line:
 * "Punkte:  16.25 Note:  1.94"
 * Line 10 sets the max points for your test.
 * Line 14 here you can set the steps to generate the list
 * Line 15 calcs the grades for the different reached points
 */
var gradeCalc = require('./index.js'),
	gradeMasterCalc= new gradeCalc().setMaxPoints(21),
	i=0,
	stepper = 0.25;

while(i<=gradeMasterCalc.getMaxPoints()) {
	console.log('Punkte: ', i,'Note: ',gradeMasterCalc.setReachedPoints(i).calcResult() );
	i=i+stepper;
}
process.exit(1);
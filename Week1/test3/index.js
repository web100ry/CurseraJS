/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
var addHours=0;
var resultMinutes;
var resultHours;
var resultTime;
resultMinutes=minutes+interval;
if (resultMinutes>=60){addHours=parseInt(resultMinutes/60); resultMinutes-=addHours*60;}
resultHours=hours+addHours;
if (resultMinutes<=9&&resultMinutes>=0){resultMinutes='0'+resultMinutes;}
if (resultHours>=24){resultHours-=parseInt(resultHours/24)*24;}
if (resultHours<=9&&resultHours>=0)resultHours='0'+(resultHours);
resultTime=resultHours+':'+resultMinutes;
return resultTime;
};

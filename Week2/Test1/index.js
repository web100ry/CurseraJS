/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
var wordArr = tweet.split(' ');
var hashTagArr = wordArr.filter(word => word[0] == '#').map (function (name){return name.slice(1);});
    return hashTagArr;
};

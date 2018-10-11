/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var unicArr = hashtags.map (function (name){return name.toLowerCase();});
    //sort().filter(function(item, pos, ary) {return !pos || item != ary[pos - 1];}).join(', ');
    function uniq(a) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for(var i = 0; i < len; i++) {
            var item = a[i];
            if(seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }

    unicArr  = uniq(unicArr).join(', ');

    return unicArr;

};


var tweet={text:'#test blabla #testtest',
get(date){


   d = new Date(date);
    d.setHours(1,9,3)
    return (d);
}};
function formatdate(date){
    var date  = new Date(date);
    var hours = ('0'+ date.getHours()).substr(-2);
    var year = date.getFullYear();
    var month = ('0'+ (date.getMonth()+1)).substr(-2);
    var day = ('0'+ date.getDate()).substr(-2);
    var minutes = ('0'+ date.getMinutes()).substr(-2);

    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    return formattedDate;
}

console.info(formatdate(tweet.get('2017-05-16 13:45')) + ' ' + tweet.text);
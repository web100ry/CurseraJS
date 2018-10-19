
var tweet={text:'#test blabla #testtest'};

Object.defineProperty(tweet,'linkify',{
    get: function () {
        return this.text.replace(
            /#[a-z0-9]+/gi, '<a href="$1">$1</a>'
        );
    }
});
test = Object.getOwnPropertyDescriptors(tweet, 'linkify');
console.info(test);

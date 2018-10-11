// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    commandArr = command.split(' ');
    commandName = commandArr[0];

       switch (commandName) {
           case 'ADD':
               addPhone(commandArr[1],commandArr[2]);
               break;

           case 'SHOW':
               return showPhone(phoneBook);
               break;

           case  'REMOVE_PHONE':
                return remotePhone(phoneBook, commandArr[1]);
               break;
           default:
               return false;
       }

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    function showPhone(phoneBook) {
        i=0; var resultShow = [];
        while (i<Object.size(phoneBook))
        {
            if(phoneBook[i].phone[0]!==undefined){
                resultShow.push (phoneBook[i].name +': '+phoneBook[i].phone.join(', '));
            }
            i++;
        }
        resultShow.sort(sotrName);
        return resultShow;
    };
    function addPhone(nameArr,phoneArr) {
        i=0;
        if (phoneBook[0] == undefined) {c=0;}
        else {c = Object.size(phoneBook);}
        while (i<=c){

            if (phoneBook[i] == undefined) {
                phoneBook[i] = {name: nameArr, phone: phoneArr.split(',')}; break;
            }
            if (phoneBook[i].name==commandArr[1]) {
                phoneBook[i].phone = phoneBook[i].phone.concat(phoneArr.split(',')); break;
            }
            i++;
        }
        return phoneBook;
    }
    function remotePhone(phoneBook,remPhone) {
        i=0; d=0;
        while (i<Object.size(phoneBook)){
            d=phoneBook[i].phone.indexOf(remPhone);
            if (d>=0){
                phoneBook[i].phone.splice(d,1);
                return true; break;
            }
            i++;
        }return false;

    }
    function sotrName(a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

};


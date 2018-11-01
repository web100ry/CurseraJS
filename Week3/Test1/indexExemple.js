/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = new Date(date);
    return {
        add: function (num, dataString) {
            if (isNaN(num) || num < 0) throw new TypeError('Неверное число');
            var type = dataString;

            if (type.match("hours") != null) {
                if (num === 24) time.setDate(time.getDate() + 1);
                else time.setHours(num);
            } else if (type.match("minutes") != null) {
                time.setMinutes(time.getMinutes() + num);
            } else if (type.match("days") != null) {
                time.setDate(time.getDate() + num);
            } else if (type.match("months") != null) {
                time.setMonth(time.getMonth() + num);
            } else {
                throw new TypeError('неверное значение даты');
            }
            return this;
        },
        subtract: function (num, dataString) {
            var type = dataString;
            if (type.match("hours") != null) {
                if (num === 24) time.setDate(time.getDate() - 1);
                else time.setHours(num);
            } else if (type.match("minutes") != null) {
                time.setMinutes(time.getMinutes() - num);
            } else if (type.match("days") != null) {
                time.setDate(time.getDate() - num);
            } else if (type.match("months") != null) {
                time.setMonth(time.getMonth() - num);
            }
            return this;
        },

        get value() {
            //2017-04-20 14:00
            var d = time,
                month = '' + (d.getMonth() +1),
                day = '' + d.getDate(),
                year = ''+ d.getFullYear(),
                hour = '' + d.getHours(),
                minute = '' + d.getMinutes();


            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            if (hour.length < 2) hour = '0' + hour;
            if (minute.length < 2) minute = '0' + minute;

            var fullyear = [year, month, day].join('-');
            var fulltime = [hour, minute].join(':');
            return fullyear + " " + fulltime;

        },
    };
};






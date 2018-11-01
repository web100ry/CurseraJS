/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
//функция для форматироавния даты
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
//конец форматирования даты
    var date = new Date(date);//присваиваем переменную переданную в функцию к формате даты
    date = formatdate(date);// на случай отсутсвия цепочки функций и обращений

    return  dt ={//объект отвечающий за увеличение или уменьшение даты
        value : date,//свойство равное значению, переданному в функцию
        add : function add(number, type){
            this.value = new Date(this.value);
            if(number < 0){// по условиям, в случае отрицательного аргумента пробрасываем ошибку
                throw TypeError('error');
            }else{
                switch(type){ // чеккинг на соответсвие параметра

                    case 'minutes' :
                        this.value = this.value.setMinutes(this.value.getMinutes() + number);
                        this.value = formatdate(this.value);
                        return this;
                        if (number<60) break;

                    case 'hours' :
                        this.value = this.value.setHours(this.value.getHours() + number);
                        this.value = formatdate(this.value);
                        return this;
                        if (number<24) break;

                    case 'days' :
                        this.value = this.value.setDate(this.value.getDate() + number);
                        this.value = formatdate(this.value);
                        return this;
                        break;

                    case 'months' :
                        this.value = this.value.setMonth(this.value.getMonth() + number);
                        this.value = formatdate(this.value);
                        return this;
                        if (number<12) break;

                    case 'years' :
                        this.value = this.value.setFullYear(this.value.getFullYear() + number);//получаем год текущего значения и уменьшаем на аргумент
                        this.value = formatdate(this.value);//форматируем согласно условию
                        return this;//возвращаем текущее значение в отформатированном порядке
                        break;


                    default : throw TypeError('error');//проброс ошибки
                }}
        },
        subtract : function subtract (number, type){
            this.value = new Date(this.value);
            if(number < 0){
                throw TypeError('error');
            }else{
                switch(type){
                    case 'years' :
                        this.value = this.value.setFullYear(this.value.getFullYear() - number);
                        this.value = formatdate(this.value);
                        return this;
                        break;
                    case 'months' :
                        this.value = this.value.setMonth(this.value.getMonth() - number);
                        this.value = formatdate(this.value);
                        return this;
                        break;
                    case 'days' :
                        this.value = this.value.setDate(this.value.getDate() - number);
                        this.value = formatdate(this.value);
                        return this;
                        break;
                    case 'hours' :
                        this.value = this.value.setHours(this.value.getHours() - number);
                        this.value = formatdate(this.value);
                        return this;
                        break;
                    case 'minutes' :
                        this.value = this.value.setMinutes(this.value.getMinutes() - number);
                        this.value = formatdate(this.value);
                        return this;
                        break;
                    default : throw TypeError('error');// проброс ошибки
                }
            }
        }
    }
    return this.dt.value;
};
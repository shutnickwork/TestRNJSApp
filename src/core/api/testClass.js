export class TestClass {

    static getDecimal(num) {
        let str = "" + num;
        let zeroPos = str.indexOf("");
        if (zeroPos == -1) return 0;
        str = str.slice(zeroPos);

        return +str;
    }

    static getRandom(max) {
        const random = Math.random() * max;
        return random;
    }

    static getMinMaxRandom(min, max) {
        return (min + Math.random() * (max - min));
    }

    static ucFirst(str) {
        if (str) {
            str = str.charAt(0).toUpperCase() + str.slice(1);
        }

        return str;
    }

    static checkSpam(str) {
        const pattern1 = "viagra";
        const pattern2 = "xxx";
        str = str.toLowerCase();
        console.log("str.indexOf(pattern1)", str.indexOf(pattern1));
        return !!(str.indexOf(pattern1) > 0 || str.indexOf(pattern2) > 0);
    }

    static abr(name) {
        if (name) {
            const words = name.split(" ");
            console.log(words);
            let str = "";
            if (Array.isArray(words)) {
                for (let i = 0; i < words.length; i++) {
                    str = words[i].charAt(0).toUpperCase();
                    str += ".";
                    console.log(str);
                }
            }
            return str;
        }
    }

    //не достаточно. Дописать палиндром.
    static isPalindrome(str) {
        let strLen = str.length,
            strReverse = str.split('').reverse().join('');
        if (strReverse == str) {
            return 'yes';
        } else {
            return 'no';
        }
    }
    //It`s work version.
    static palindrome(str) {
        let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

        let checkPalindrome = removeChar.split('').reverse().join('');

        return (removeChar === checkPalindrome);
    }
    //It`s work version.
    static dateParse(userDate) {
        "use strict";
        const date = new Date(userDate);
        const monthStr = (date.getMonth() + 1).toString();
        const dayStr = date.getDate().toString();
        const month = monthStr.length > 1 ? monthStr : "0" + monthStr;
        const day = dayStr.length > 1 ? dayStr : "0" + dayStr;
        return `${date.getFullYear()}${month}${day}`;
    }

    static isEmptyObj(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    static sumObjProps(obj) {
        let sum = 0;
        if (obj) {
            for (let key in obj) {
                sum += +obj[key];
            }

        }
        return sum;
    }

    static maxObjProp(obj) {
        let max = Number.MIN_VALUE;
        let text = "No workers";
        if (obj) {
            for (let key in obj) {
                let curr = +obj[key];
                if (curr > max) {
                    max = curr;
                    text = key;
                }
            }

        }
        return text;
    }

    static multiplyNumeric(obj) {
        for (let key in obj) {
            if (this.isNumeric(obj[key])) {
                obj[key] *= 2;
            }
        }
    }

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    static workToArray() {
        let array = ["djas", "bluse"];
        array.push("rok");
        array[array.length - 2] = "classic";
        let first = array.shift();
        array.unshift("rap", "ragyy");
        console.log(array);
    }

    static searchInArray() {
        const arr = ["test", 2, 1.5, false];
        const value = test;
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return i;
            }
        }

        return -1;
    }

    static filterRange(arr, a, b) {
        let newArr = [];

        if (arr && arr.length) {
            for (let i = 0; i < arr.length; i++) {
                if (a <= arr[i] && arr[i] <= b) {
                    newArr.push(arr[i]);
                }

            }
        }

        return newArr;
    }

    static primeNumbers(len) {
        let arr = [];
        for (let i = 2; i < len; i++) {
            arr.push(i);
        }
        console.log(arr);
        let p = 2;
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % p !== 0) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);

    }

    static addClass(obj, cls) {
        let classes = obj.className ? obj.className.split(' ') : [];

        for (let i = 0; i < classes.length; i++) {
            if (classes[i] === cls) return; // класс уже есть
        }

        classes.push(cls); // добавить

        obj.className = classes.join(' '); // и обновить свойство

        /*
            let classes = obj.className.split(' ');
            let className = "";
            let error = "";
            classes.forEach((item, index, array) => {
                if (item === cls) {
                    error = "класс уже существует";
                } else {
                    className += item;
                    if (index !== array.length - 1) {
                        className += " ";
                    } else {
                        className += ` ${cls}`;
                    }
                }
            });

            console.log("error", error);
            console.log("className", className);
            obj.className = className;
            return error || obj.className;
            */

    }

    static removeClass(obj, cls) {
        let classes = obj.className ? obj.className.split(' ') : [];

        for (let i = 0; i < classes.length; i++) {
            if (classes[i] === cls) {
                //delete classes[i];
                classes.splice(i, 1); // удалить класс
                i--; // (*)
            }
        }
        //console.log(classes);

        //classes = classes.filter((item) => item);
        //console.log(classes);

        obj.className = classes.join(' ');
        return obj.className;
    }

    static camelize(str) {
        str = "my-short-string";
        let strs = str.split("-");
        for (let i = 1; i < strs.length; i++) {
            strs[i] = strs[i].charAt(0).toUpperCase() + strs[i].slice(1);
        }

        return strs.join('');
    }

    static filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < a || arr[i] > b) { //a ≤ arr[i] ≤ b
                //delete arr[i];
                arr.splice(i--, 1);
            }
        }
        console.log("arr", arr);
    }

    static compareReversed(arr) {
        arr = [5, 2, 1, -10, 8];
        arr.sort().reverse();
        console.log(arr);
    }

    static arrSorted() {
        let arr = ["HTML", "JavaScript", "CSS"];
        //let sortedArr = [];
        let sortedArr = arr.slice().sort();
        //arr.forEach((item) => { sortedArr.push(item); });
        //sortedArr.sort();
        console.log(sortedArr);
        console.log(arr);
    }

    static randomSort() {
        let arr = [1, 2, 3, 4, 5];

        arr.sort(function (a, b) {
            return a - (b * Math.random());
        });
        console.log(arr);
    }

    static sortObjects() {
        const vasya = {name: "Вася", age: 23};
        const masha = {name: "Маша", age: 18};
        const vovochka = {name: "Вовочка", age: 6};

        let people = [vasya, masha, vovochka];

        function comparePeople(a, b) {
            return a.age - b.age;
        }

        people.sort(comparePeople);

        console.log(people);
        //alert(people[0].age);
    }

    static aclean(arr) {
        arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
        let symbols = arr[arr.length - 1].split('');
        symbols.sort();
        let word = "";
        console.log(symbols);
        for (let i = 0; i < arr.length; i++) {
            word = arr[i];
            for (let j = 1; j < arr.length; j++) {
                if (word === arr[j]) {
                    //alert("found");
                }
            }
        }
        let arrSymbol = arr[0].split('');

    }

    static clousureSum(a) {
        return function (b) {
            return a + b;
        }
    }

    static makeBuffer() {
        let strBuffer = '';

        function buffer() {
            if (arguments && arguments.length > 0) {

                for (let i = 0; i < arguments.length; i++) {
                    strBuffer += " " + arguments[i];
                }

            } else {
                return strBuffer;
            }
        }

        buffer.clear = function () {
            strBuffer = '';
        };

        return buffer;
    }

    static byFieldSort() {
        let users = [{
            name: "Вася",
            surname: 'Иванов',
            age: 20
        }, {
            name: "Петя",
            surname: 'Чапаев',
            age: 25
        }, {
            name: "Маша",
            surname: 'Медведева',
            age: 18
        }];

        users.sort(byField('name'));
        users.forEach(function (user) {
            console.log(user.name);
        }); // Вася, Маша, Петя

        users.sort(byField('a'));
        users.forEach(function (user) {
            console.log(user.name);
        }); // Маша, Вася, Петя

        function byField(field) {

            return function (a, b) {
                return a[field] > b[field] ? 1 : -1;
            }
        }
    }

    static filterClousure() {
        function filter(arr, func) {
            let newArr = [];

            for(let i = 0; i < arr.length; i++) {
                if (func(arr[i])) {
                    newArr.push(arr[i]);
                }
            }
            return  newArr;
        }

        function inBetween(a, b) {

            return function (x) {

                return x >= a && x <= b;

            }

        }

        function inArray(arr) {
            return function(x) {
                return arr.indexOf(x) !== -1;
            };
        }

        let arr = [1, 2, 3, 4, 5, 6, 7];

        alert(filter(arr, function(a) {
            return a % 2 === 0
        })); // 2,4,6

        alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

        alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
    }

    static makeArmyClousure() {
        function makeArmy() {

            let shooters = [];

            for (let i = 0; i < 10; i++) {
                let shooter = (function(x) {

                    return function() {
                        alert( x );
                    };

                })(i);
                shooters.push(shooter);
            }

            return shooters;
        }

        let army = makeArmy();

        army[0](); // стрелок выводит 10, а должен 0
        army[5](); // стрелок выводит 10...
        army[9]();
    }
}
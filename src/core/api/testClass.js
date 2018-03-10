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

    static sum() {
        return Array.from(arguments)
            .reduce((sum, cur) => sum + cur, 0);
    }

    static abr(name) {
        "use strict";

        if (!name) {
            return "";
        }

        return name.toString()
            .split(" ")
            .map((i) => i.slice(0, 1))
            .join('.')
            .toUpperCase() + '.';
    }

    static abr(name) {
        const words = name.split(" ");
        let str = "";
        for (let i = 0; i < words.length; i++) {
            str += words[i].charAt(0).toUpperCase();
            str += ".";
        }
        return str;
    }

    static func() {

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

    static getLastDayOfMonth(date) {
        "use strict";
        let newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return newDate.getDate();
    }

    static DateParse(userDate) {
        "use strict";
        const date = new Date(userDate);
        const monthStr = (date.getMonth() + 1).toString();
        const dayStr = date.getDate().toString();
        const month = monthStr.length > 1 ? monthStr : "0" + monthStr;
        const day = dayStr.length > 1 ? dayStr : "0" + dayStr;
        return `${date.getFullYear()}${month}${day}`;
    }

    static sumArgs() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        return sum;
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

    static sumTo() {
        (function sumToRec(n) {
            let sum = 0;
            if (n > 1) {
                sum = n + sumToRec(n - 1);
            }
            return sum;
            /*
            if (n == 1) return 1;
            return n + sumTo(n - 1);
             */
        })(1000);

        return (function sumToArray(n) {
            let sum = 0;
            do {
                sum += n;
                n--;
            } while (n > 1);
            return sum;
        })(1000);

        //console.log("sum", sumToArray(6));

        function sumToForm(n) {
            return n * (n + 1) / 2;
        }
    }


    static listNext() {

        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        };


        function printList(list) {
            console.log(list.value);
            if (list.next) {
                printList(list.next);
            }

        }

        function printReverseList(list) {
            if (list.next) {
                printList(list.next);
            }

            console.log(list.value);

        }

        function printListArray(list) {
            let tmp = list;

            while (tmp) {
                console.log(tmp.value);
                tmp = tmp.next;
            }
        }

        printList(list);


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

            for (let i = 0; i < arr.length; i++) {
                if (func(arr[i])) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }

        function inBetween(a, b) {

            return function (x) {

                return x >= a && x <= b;

            }

        }

        function inArray(arr) {
            return function (x) {
                return arr.indexOf(x) !== -1;
            };
        }

        let arr = [1, 2, 3, 4, 5, 6, 7];

        alert(filter(arr, function (a) {
            return a % 2 === 0
        })); // 2,4,6

        alert(filter(arr, inBetween(3, 6))); // 3,4,5,6

        alert(filter(arr, inArray([1, 2, 10]))); // 1,2
    }

    static makeArmyClousure() {
        function makeArmy() {

            let shooters = [];

            for (let i = 0; i < 10; i++) {
                let shooter = (function (x) {

                    return function () {
                        alert(x);
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

    static makeCalculator() {
        let calculator = {
            read: function () {
                this.prop1 = 2;
                this.prop2 = 3;
            },
            sum: function () {
                return this.prop1 + this.prop2;
            },
            mul: function () {
                return this.prop1 * this.prop2;
            }
        };

        calculator.read();

        console.log(calculator.sum());
        console.log(calculator.mul());
    }

    static ladder() {
        let ladder = {
            step: 0,
            up: function () {
                this.step++;
                return this;
            },
            down: function () { // вниз по лестнице
                this.step--;
                return this;
            },
            showStep: function () { // вывести текущую ступеньку
                alert(this.step);
                return this;
            }
        };

        ladder.up().up().down().up().down().showStep();
    }


    static clousureSum(a) {
        return function (b) {
            return a + b;
        }
    }


    static sumValueOfAndString() {

        function sum(a) {
            let sum = a;

            function podSum(b) {
                sum += b;
                return podSum;
            }

            podSum.toString = function () {
                return sum;
            };

            return podSum;
        }

        console.log(sum(0)(1)(2)(3)(4)(5));
    }

    static calculatorConst() {

        function Calculator() {

            this.read = function () {
                this.prop1 = 2;
                this.prop2 = 3;
            };
            this.sum = function () {
                return this.prop1 + this.prop2;
            };
            this.mul = function () {
                return this.prop1 * this.prop2;
            };
        }


        let calculator = new Calculator();
        calculator.read();

        alert("Сумма=" + calculator.sum());
        alert("Произведение=" + calculator.mul());

    }

    static getSetUser() {
        function User(fullName) {
            this.fullName = fullName;

            Object.defineProperties(this, {

                firstName: {

                    get: function() {
                        return this.fullName.split(' ')[0];
                    },

                    set: function(newFirstName) {
                        this.fullName = newFirstName + ' ' + this.lastName;
                    }

                },

                lastName: {

                    get: function() {
                        return this.fullName.split(' ')[1];
                    },

                    set: function(newLastName) {
                        this.fullName = this.firstName + ' ' + newLastName;
                    }

                }

            });
        }

        const vasya = new User("Vasya Pup");
        console.log(vasya);
    }
}
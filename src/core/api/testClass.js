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

    static palindrome(str) {
        let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

        let checkPalindrome = removeChar.split('').reverse().join('');

        return (removeChar === checkPalindrome);
    }

    static dateParse(userDate){
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
            if(this.isNumeric(obj[key])) {
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
            for(let i = 0; i < arr.length; i++) {
                if (a <= arr[i] && arr[i] <= b) {
                    newArr.push(arr[i]);
                }

            }
        }

        return newArr;
    }

    static primeNumbers(len) {
        let arr = [];
        for(let i = 2; i < len; i++) {
            arr.push(i);
        }
        console.log(arr);
        let p = 2;
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] % p !== 0) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);

    }

}
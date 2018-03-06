import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {ArticleListProps} from "./components/ArticleListProps";
import {TestClass} from "../../core/api/testClass";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class HomeScreen extends React.Component {
    static navigationOptions = () => {
        return ArticleListProps.getNavigationProps("Статьи");
    };

    constructor(props) {
        super(props);
        this.state = {
            text: "Hey"
        };
    }

    onPress = () => {
        let str = "";
        if(this.state.text === "Hey") {
            str = "Hi";
        } else {
            str = "Hey";
        }
        //let text = TestClass.palindrome("A man, a plan, a canal. Panama");
        let salaries = {
            "Vasya": 100,
            "Petya": 200,
            "Lfif": 350
        };

        let menu = {
            width: 200,
            height: 200,
            title: "Tilte"
        };
        //let text = TestClass.sumObjProps(salaries);
        //TestClass.multiplyNumeric(menu);
        //TestClass.workToArray();
        //let result = TestClass.searchInArray();
        const arr = [5, 4, 3, 8, 0];
        const a = 3;
        const b = 8;
        //let result = TestClass.filterRange(arr, a, b);
        TestClass.primeNumbers(100);
        //console.log("text", result);
        //this.setState( {text: text});
    };

    render() {

        const {text} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    <Text>Touch Me</Text>
                </TouchableOpacity>
                <Text style={styles.instructions}>
                    To get started, edit App.js {text}
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
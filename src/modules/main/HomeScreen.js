import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from 'react-native';
import {ArticleListProps} from "./components/ArticleListProps";
import {GetDataRequest} from "../../core/api/requestRepo";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
type State = { text: string };

export default class HomeScreen extends React.Component <Props, State> {
    /*
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };*/
    static navigationOptions = (): any => {
        return ArticleListProps.getNavigationProps("Статьи");
    };

    constructor(props) {
        super(props);
        this.state = {
            text: "Hey"
        };
    }

    onPress = async () => {
        let str = "";
        const data = await GetDataRequest.getArticles(1, 10);
        const articles = data && data.articles;
        console.log(articles);
        if(this.state.text === "Hey") {
            str = "Hi";
        } else {
            str = "Hey";
        }
        this.setState( {text: str});
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
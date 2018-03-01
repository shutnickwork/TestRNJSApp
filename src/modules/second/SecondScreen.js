import React from 'react';
import {DatePickerAndroid, Dimensions, ImageBackground, Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import DateModal from "./components/DateModal";
import {TextButton} from "./components/TextButton";

type Props = {};
type State = {
    showSwiper: boolean,
    isModalVisible: boolean
};

export default class SecondScreen extends React.Component <State, Props> {
    static navigationOptions = {
        title: 'SecondScreen',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = { showSwiper: false, isModalVisible: false}
    }

    static fromString(obj) {
        if (obj instanceof Date) {
            return obj;
        }

        return new Date(obj);
    }

    showPickerIOS = () => {
      this.setState({isModalVisible: true});
    };

    showPicker = async () => {

        const data = await DatePickerAndroid.open({
            date: SecondScreen.fromString(new Date(2018, 2, 14)),
            minDate: new Date(2018, 2, 14),
            maxDate: new Date(2020, 4, 25)
        });

        if (data.action === DatePickerAndroid.dateSetAction) {
            this.setState({showSwiper: !this.state.showSwiper});
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    THIS IS THE SECOND SCREEN!
                </Text>
                <DateModal
                    isVisible={false}
                    initialDate={new Date()}
                />
                <View style={styles.buttonContainer}>
                    <TextButton text={"Выбор даты"} isDark={true} onPress={Platform.OS === "android" ? this.showPicker : this.showPickerIOS} />
                </View>
            </View>
        );
    }
};


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
    tabIcon: {
        width: 16,
        height: 16,
    },
    buttonContainer: {
        paddingBottom: 50
    }
});
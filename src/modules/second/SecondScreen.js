import React from 'react';
import {DatePickerAndroid, Dimensions, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';
import DateModal from "./components/DateModal";
import {TextButton} from "./components/TextButton";
import Swiper from "react-native-swiper";



export const imagesSwiper = [
    "http://bipbap.ru/wp-content/uploads/2017/04/4-2.jpg",
    "https://imgprx.livejournal.net/0746f16d28a1c6f25a1ac39f4b2c3f6c67b0ce96/mLWG5H2r70ajjBKJD8Rt7dtQJCFL7UtzIwnYUyvkoVqUbzoJ79i3u7Yn7GIisJ1asKJmb7WNb9X1rYpY0Byb0w",
    "http://bipbap.ru/wp-content/uploads/2017/04/1334248724_1.jpg",
];

export default class SecondScreen extends React.Component {
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

    renderSwipeItem = (uri, index) => {
        return (
            <ImageBackground
                style={styles.imageContainer}
                source={{uri: uri}}
                key={index}
                resizeMode={"cover"}
                resizeMethod={"resize"}
            />
        );
    };

    renderSwiper = () => {
        if (this.state.showSwiper) {
            return (
                <Swiper loadMinimal={true}>
                    {imagesSwiper.map(this.renderSwipeItem)}
                </Swiper>
            );
        } else {
            return null;
        }
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
                {this.renderSwiper()}
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

const height = Dimensions.get("window").height * 0.5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 20 : 0,
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageContainer: {
        height: height,
        justifyContent: "center",
        alignItems: "center"
    },
    tabIcon: {
        width: 16,
        height: 16,
    },
    buttonContainer: {
        paddingBottom: 50
    }
});

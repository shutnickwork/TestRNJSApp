import HomeScreen from "../modules/main/HomeScreen";
import SecondScreen from "../modules/second/SecondScreen";
import {TabNavigator, StackNavigator} from "react-navigation";
import {Colors} from "../common/Colors"

const tabBarHeight = 49;
const config = {
    backBehavior: "none",
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: Colors.darkBlue,
        inactiveTintColor: Colors.darkBlue,
        labelStyle: {
            margin: 0,
            marginBottom: 7,
            letterSpacing: 0.5,
            fontSize: 10,
        },
        upperCaseLabel: false,
        showLabel: true,
        showIcon: true,
        style: {
            borderTopColor: Colors.tabBarBorder,
            borderTopWidth: 1,
            backgroundColor: Colors.white,
            elevation: 0,
            position: "absolute",
            height: tabBarHeight,
            left: 0,
            right: 0,
            bottom: 0,
        },
        tabStyle: {
            margin: 0,
            padding: 0,
            paddingTop: 0,
            height: tabBarHeight,
            backgroundColor: Colors.white,
        },
        indicatorStyle: {
            borderWidth: 0,
            backgroundColor: "transparent"
        },
    },
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false,
};


const MainStackNavigator = StackNavigator({
    ["Home"]: {screen: HomeScreen},
});

export const TestPro = TabNavigator({
    Home: { screen: MainStackNavigator },
    SecondScreen: { screen: SecondScreen }

}, config );
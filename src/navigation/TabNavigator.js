import SecondScreen from "../modules/second/SecondScreen";
import {StackNavigator, TabNavigator} from "react-navigation";
import {Colors} from "../common/Colors"
import {ImageResources} from "../common/ImageResources";
import {TabBarIcon} from "../common/components/TabIcon";
import {testAppPages} from "./TestAppPages";
import {ArticleDetails} from "../modules/main/components/ArticleDetails";
import React from "react";
import {ArticleList} from "../modules/main/ArticleList";

const tabBarHeight = 45;
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
    [testAppPages.articleList]: {screen: ArticleList},
    [testAppPages.articleDetails]: {screen: ArticleDetails}
});

const SecondStackNavigator = StackNavigator({
    [testAppPages.second]: {screen: SecondScreen},
});


export const TestPro = TabNavigator({
    Home: {
        screen: MainStackNavigator,
        navigationOptions: () => ({
            tabBarIcon: ({focused}) => {
                const icon = ImageResources.tab_home_non_active;
                const iconActive = ImageResources.tab_home_active;

                return <TabBarIcon isFocused={focused} imageSource={icon} imageActiveSource={iconActive}/>;
            },
            tabBarLabel: "Главный"
        }),
    },
    Second: {
        screen: SecondStackNavigator,
        navigationOptions:() => ({
            tabBarIcon: ({focused}) => {
                const icon = ImageResources.tab_profile_non_active;
                const iconActive = ImageResources.tab_profile_active;

                return <TabBarIcon isFocused={focused} imageSource={icon} imageActiveSource={iconActive} />
            },
            tabBarLabel: "Второй"
        })
    }

}, config );
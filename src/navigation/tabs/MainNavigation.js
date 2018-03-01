/*
import * as React from "react";
import {addNavigationHelpers} from "react-navigation";
import {ImageResources} from "../../common/ImageResources";
import {testAppPages} from "../TestAppPages";
import {TabBarIcon} from "../../common/components/TabIcon";
import {Component} from "react";
import {StackNavigator} from "react-navigation";
import HomeScreen from "../../modules/main/HomeScreen";
import {ArticleDetails} from "../../modules/main/components/ArticleDetails";

const config = {};

const MainStackNavigator = StackNavigator({
    [testAppPages.articleList]: {screen: HomeScreen},
    [testAppPages.articleDetails]: {screen: ArticleDetails}
}, config);

export class MainNavigation extends Component {
    //noinspection JSUnusedGlobalSymbols || used by react-navigation
    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            const icon = ImageResources.tab_home_non_active;
            const iconActive = ImageResources.tab_home_active;

            return <TabBarIcon isFocused={focused} imageSource={icon} imageActiveSource={iconActive}/>;
        },
        tabBarLabel: "Главный"
    };

    render() {
        if (this.props.navigation == null || this.props.dispatch == null) {
            throw new Error("incorrect navigation props data");
        }

        const navigationData = {
            dispatch: this.props.dispatch,
            state: this.props.navigation
        };

        return <MainStackNavigator navigation={addNavigationHelpers(navigationData)}/>;
    }
}
*/

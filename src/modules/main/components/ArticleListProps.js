import * as React from "react";
import {View} from "react-native";
import {HeaderTitle} from "../../../common/components/HeaderTitle";
import {Colors} from "../../../common/Colors";

export class ArticleListProps {

    static getNavigationProps(headerTitle: string): any {
        return {
            headerTitle: <HeaderTitle headerTitle={headerTitle} />,
            headerStyle: {backgroundColor: Colors.headerBackgroundColor},
            headerLeft:  <View/>,
            headerRight: <View />,
        };
    }
}
import * as React from "react";
import {View} from "react-native";
import {HeaderTitle} from "../../../common/components/HeaderTitle";
import {HeaderButton} from "../../../common/components/HeaderButton";
import {Colors} from "../../../common/Colors";

export class ArticleDetailsProps {

    static getNavigationProps(headerTitle: string) {
        return {
            headerTitle: <HeaderTitle headerTitle={headerTitle}/>,
            headerStyle: {backgroundColor: Colors.headerBackgroundColor},
            headerLeft: <HeaderButton image={"image"} action={() => {console.log("fdsfds")}}/>,
            headerRight: <View/>,
        };
    }
}
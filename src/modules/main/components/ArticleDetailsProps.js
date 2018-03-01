import * as React from "react";
import {View} from "react-native";
import {HeaderTitle} from "../../../common/components/HeaderTitle";
import {HeaderButton} from "../../../common/components/HeaderButton";
import {Colors} from "../../../common/Colors";

export class ArticleDetailsProps {

    static getNavigationProps(nav) {
        const headerTitle = nav && nav.state && nav.state.params && nav.state.params.article.title || "nothing";
        return {
            headerTitle: <HeaderTitle headerTitle={headerTitle}/>,
            headerStyle: {backgroundColor: Colors.headerBackgroundColor},
            headerLeft: <HeaderButton image={"image"} action={nav.goBack}/>,
            headerRight: <View/>,
        };
    }
}
import * as React from "react";
//import {NavigationAction, NavigationLeafRoute, NavigationScreenOptions, NavigationScreenProp} from "react-navigation";
import {ArticleDetailsProps} from "./ArticleDetailsProps";
import {View, StyleSheet} from "react-native";

//type ArticleDetailsNavigation = NavigationScreenProp<NavigationLeafRoute<{ article: IArticle }>, NavigationAction>;

//interface IProps {
//    navigation;
//}

export class ArticleDetails extends React.Component {
    static navigationOptions = (navigation) => {
        return ArticleDetailsProps.getNavigationProps(navigation && navigation.state.params && navigation.state.params.article.title);
    };

    render() {

        return (
            <View>
                <View style={styles.container} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
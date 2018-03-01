import * as React from "react";
import {ArticleDetailsProps} from "./ArticleDetailsProps";
import {View, StyleSheet} from "react-native";


export class ArticleDetails extends React.Component {
    static navigationOptions = ({navigation}) => {
        return ArticleDetailsProps.getNavigationProps(navigation);
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
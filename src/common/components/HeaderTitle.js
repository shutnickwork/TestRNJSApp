import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export interface Props {
    headerTitle: string
}

export class HeaderTitle extends Component<Props, {}> {
    render() {
        const {headerTitle} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.textMain} numberOfLines={1} ellipsizeMode={"tail"}>{headerTitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    textMain: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 0,
        backgroundColor: 'transparent'
    },
    text: {
        color: 'black',
        fontSize: 14,
        letterSpacing: 0,
        backgroundColor: 'transparent'
    },
});
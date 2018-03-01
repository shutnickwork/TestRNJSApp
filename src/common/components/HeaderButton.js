import React, {PureComponent} from "react";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors} from "../Colors";
import {FontNames} from "../FontNames";
import {ImageResources} from "../ImageResources";

export class HeaderButton extends PureComponent {
    onPress = () => {
        const {action} = this.props;
        if (action) {
           action();
        }
    };

    render() {
        const {image, text, isRight, isTransparent, iconTintColor} = this.props;
        const style = StyleSheet.flatten([styles.container, isRight ? {paddingLeft: 32} : {paddingRight: 32}, {marginTop: isTransparent && Platform.OS === "ios" ? -20 : 0}]);
        const iconStyle = iconTintColor ? {tintColor: iconTintColor} : undefined;
        if (image) {
            return (
                <TouchableOpacity style={style} onPress={this.onPress}>
                    <Image source={ImageResources.icon_back} style={iconStyle}/>
                </TouchableOpacity>
            );
        } else if (text) {
            return (
                <TouchableOpacity style={styles.textContainer} onPress={this.onPress}>
                    <Text style={styles.text} numberOfLines={1}>{text}</Text>
                </TouchableOpacity>
            );
        } else {
            return <View/>;
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    text: {
        fontSize: 16,
        color: Colors.fontGray,
        fontFamily: FontNames.regular,
        letterSpacing: 0,
        backgroundColor: Colors.transparent
    },
});
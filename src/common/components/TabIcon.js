import React, {PureComponent} from "react";
import {Image, StyleSheet} from "react-native";

export class TabBarIcon extends PureComponent {
    render() {
        return (
            <Image resizeMode="stretch" style={styles.image} source={this.props.isFocused ? this.props.imageActiveSource : this.props.imageSource}/>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 24,
        resizeMode: "contain",
    },
});
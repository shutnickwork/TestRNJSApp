import React, {PureComponent} from "react";
import {Text, TouchableOpacity} from "react-native";

interface IProps {
    text: string;
    onPress: any;
    isDark: boolean;
}

export class TextButton extends PureComponent<IProps, {}> {

    constructor() {
        super();
    }

    render() {

        return (
            <TouchableOpacity style={baseStyles.baseButtonContainer} onPress={this.props.onPress}>
                <Text style={baseStyles.baseButtonText}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const baseStyles = {
    baseButtonContainer: {
        height: 47,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },

    baseButtonText: {
        fontSize: 18,
        textAlign: "center",
    },
};

import React, {PureComponent} from "react";
import {ActivityIndicator, Animated, StyleSheet} from "react-native";
import {Colors} from "../Colors";

export class LoadingView extends PureComponent {
    style;

    constructor(props) {
        super(props);

        this.state = {opacity: new Animated.Value(props.isLoading ? 1 : 0), isAnimationInProgress: false};
        this.style = StyleSheet.flatten([styles.indicatorContainer, {opacity: this.state.opacity}]);
    }

    componentWillReceiveProps(props) {
        if (this.props.isLoading !== props.isLoading) {
            const config = {
                duration: 300,
                toValue: props.isLoading ? 1 : 0,
                useNativeDriver: true
            };
            this.setState({isAnimationInProgress: true});
            Animated.timing(this.state.opacity, config).start(result => this.setState({isAnimationInProgress: false}));
        }
    }

    render() {
        if (this.props.isLoading || this.state.isAnimationInProgress) {
            return (
                <Animated.View style={this.style}>
                    <ActivityIndicator animating={this.props.isLoading} size="large" color={Colors.blue}/>
                </Animated.View>
            );
        } else {
            return null;
        }

    }
}

const styles = StyleSheet.create({
    indicatorContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5FCFF88",
        zIndex: 99
    },
});

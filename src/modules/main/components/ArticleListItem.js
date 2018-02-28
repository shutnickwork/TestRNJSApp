import React, {PureComponent} from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Colors} from "../../../common/Colors";
import {FontNames} from "../../../common/FontNames";

export class ArticleListItem extends PureComponent<IProps, {}> {

    onPress = (): void => {
        const onPressProp = this.props.onPress;
        if (onPressProp && this.props.item) {
            onPressProp(this.props.item);
        }
    };

    render() {
        const {title, label, authorName, onPress, created} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                disabled={!onPress}
                onPress={this.onPress}
                activeOpacity={0.7}
            >
                <Image style={styles.image} source={{uri: "http://fagma.com/uploads/posts/2014-08/1408256174_22.jpg"}} resizeMethod={"resize"}/>
                <View style={styles.descriptionContainer}>
                    {label ? <Text style={styles.label}>Метка: {label}</Text> : null}
                    <Text style={styles.label}>Название: {title}</Text>
                    <Text style={styles.label}>Дата: {created}</Text>
                    <Text style={styles.label}>Автор: {authorName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

interface IProps {
    label?: string;
    title: string;
    authorName: string;
    status: string;
    created: string | Date;
    item?: any;
    onPress?: (item: any) => void;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 140,
        borderBottomWidth: 1,
        borderBottomColor: Colors.separator,
        backgroundColor: Colors.white
    },
    image: {
        height: 106,
        width: 106,
        resizeMode: "cover",
        marginTop: 16,
        marginLeft: 16,
        marginBottom: 16
    },
    descriptionContainer: {
        flex: 1,
        marginTop: 13,
        marginLeft: 8,
        marginBottom: 12,
        paddingRight: 14,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    authorName: {
        flex: 1,
        fontSize: 14,
        fontFamily: FontNames.regular,
        color: Colors.fontDark,
    },
    label: {
        fontSize: 14,
        fontFamily: FontNames.regular,
        color: Colors.fontDark,
    },
});
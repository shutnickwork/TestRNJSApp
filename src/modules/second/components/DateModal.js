import React, {PureComponent} from "react";
import {
    DatePickerIOS,
    InteractionManager,
    Modal,
    StyleSheet,
    TouchableWithoutFeedback,
    View, Dimensions
} from "react-native";
import {TextButton} from "./TextButton";


export default class DateModal extends PureComponent {

    onDateChange = (date) => this.setState({resultDate: date});
    confirmDate = () => {
        this.props.closeModal();
        InteractionManager.runAfterInteractions(() => this.props.confirmDate(this.state.resultDate));
    };
    requestClose = () => {
        this.props.closeModal();
    };

    constructor(props) {
        super(props);
        this.state = {resultDate: this.props.initialDate};
    }

    render() {
        const {closeModal, isVisible} = this.props;

        return (
            <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={this.requestClose}>
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={modalStyles.modalBackground}>
                        <View style={modalStyles.modalContainer}>
                            <DatePickerIOS
                                date={this.state.resultDate}
                                minimumDate={new Date()}
                                maximumDate={new Date()}
                                mode="date"
                                onDateChange={this.onDateChange}
                            />
                            <View style={modalStyles.buttonContainer}>
                                <TextButton text="OK" onPress={this.confirmDate} isDark={false}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const modalStyles =  StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'gray',
        alignContent: "center",
        justifyContent: "center",
    },
    modalContainer: {
        width:  Dimensions.get("window").width - 20,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingBottom: 10,
        alignSelf: "center",
    },
    buttonContainer: {
        paddingHorizontal: 16
    }
});
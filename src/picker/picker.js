import React, { Component} from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Picker, Platform, ViewPropTypes
} from 'react-native'
import PropTypes from 'prop-types'

class SettingsPicker extends Component {

    static props = {
        containerProps: PropTypes.object,
        containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        disabledOverlayStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        titleProps: PropTypes.object,
        titleStyle: Text.propTypes.style,
        modalTitleStyle: Text.propTypes.style,
        title: PropTypes.string.isRequired,
        valueProps: PropTypes.object,
        valueStyle: Text.propTypes.style,
        value: PropTypes.string.isRequired,
        possibleValues: PropTypes.array.isRequired,
        valuePlaceholder: PropTypes.string,
        negativeButtonTitle: PropTypes.string.isRequired,
        positiveButtonTitle: PropTypes.string.isRequired,
        dialogDescription: PropTypes.string,
        modalDescriptionStyle: Text.propTypes.style,
        onSaveValue: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        modalStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        modalInnerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        modalButtonsTitleStyle: Text.propTypes.style,
        modalButtonsTitleNegativeStyle: Text.propTypes.style,
        modalButtonsTitlePositiveStyle: Text.propTypes.style,
    };

    static defaultProps = {
        containerProps: {},
        containerStyle: {},
        disabledOverlayStyle: {},
        titleProps: {},
        titleStyle: {},
        modalTitleStyle: {},
        modalDescriptionStyle: {},
        valueProps: {},
        valuePlaceholder: '...',
        valueStyle: {},
        disabled: false,
    };

    constructor() {
        super();
        this.state = {
            pickerValue: "",
            pickerOpen: false,
        };
    }

    componentDidMount() {
        this.setState({
            pickerValue: this.props.value,
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            pickerValue: props.value,
        })
    }

    render() {

        const {disabled, dialogDescription, negativeButtonTitle, positiveButtonTitle, onSaveValue,
            containerProps, containerStyle, title, titleProps, titleStyle, valueProps, valueStyle, valuePlaceholder,
            disabledOverlayStyle, modalStyle, modalInnerStyle,
            modalTitleStyle, modalDescriptionStyle, modalButtonsTitleStyle, modalButtonsTitleNegativeStyle,
            modalButtonsTitlePositiveStyle, value} = this.props;

        return <View style={{width: '100%'}}>
            {(!disabled) ? <TouchableOpacity onPress={() => {
                this.setState({
                    pickerOpen: true,
                });
            }}>
                <Modal
                    visible={this.state.pickerOpen}
                    animationType="fade"
                    onRequestClose={() => {
                        this.setState({
                            pickerOpen: false,
                        });
                    }}
                    transparent={true}>
                    <ScrollView
                        style={[{flex: 1, backgroundColor: 'rgba(0,0,0,0.4)'}, modalStyle]}
                        contentContainerStyle={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}
                        bounces={false}>
                        <View style={[{backgroundColor: 'white', paddingTop: 20, paddingBottom: 10, paddingLeft: 20,
                            paddingRight: 20, maxWidth: 300, minWidth: 300},
                            (Platform.OS === 'ios') ? {borderRadius: 16, shadowRadius: 16, shadowColor: '#636363', shadowOpacity: 0.8} : null,
                            modalInnerStyle]}>
                            <Text style={[{fontWeight: '600', fontSize: 18}, modalTitleStyle]}>{title}</Text>
                            <Text style={[{marginTop: 10, fontSize: 15}, modalDescriptionStyle]}>{dialogDescription}</Text>
                            <Picker
                                onValueChange={(itemValue, itemIndex) => {
                                    this.setState({
                                        pickerValue: itemValue,
                                    });
                                }}
                                selectedValue={this.state.pickerValue}>
                                {this.props.possibleValues.map((item, index, array) => {
                                    return <Picker.Item key={index} label={item.label} value={item.value} />
                                }, this)}
                            </Picker>
                            <View style={{justifyContent: 'center', flex: 0, flexDirection: 'row'}}>
                                <TouchableOpacity style={{margin: 5, flex: 1}} onPress={() => {
                                    this.setState({
                                        pickerOpen: false,
                                    });
                                }}>
                                    <View>
                                        <Text style={[{padding: 10, color: 'red'},
                                            (Platform.OS === 'ios') ? {fontSize: 18, fontWeight: '600'} : null,
                                            modalButtonsTitleStyle, modalButtonsTitleNegativeStyle]}>
                                            {(Platform.OS === 'android') ? negativeButtonTitle.toUpperCase() : negativeButtonTitle}
                                            </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{margin: 5, flex: 1}} onPress={() => {
                                    this.setState({
                                        pickerOpen: false,
                                    });
                                    onSaveValue(this.state.pickerValue);
                                }}>
                                    <View>
                                        <Text style={[{padding: 10, color: 'red', textAlign: 'center'},
                                            (Platform.OS === 'ios') ? {fontSize: 18, fontWeight: '400'} : null,
                                            modalButtonsTitleStyle, modalButtonsTitlePositiveStyle]}>
                                            {(Platform.OS === 'android') ? positiveButtonTitle.toUpperCase() : positiveButtonTitle}
                                            </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                <View {...containerProps} style={[styles.defaultContainerStyle,containerStyle]}>
                    <Text {...titleProps} style={[styles.defaultTitleStyle, titleStyle]}>
                        {this.props.title}
                    </Text>
                    <Text {...valueProps} style={[styles.defaultValueStyle, valueStyle]}>
                        {(value) ? value : valuePlaceholder}
                    </Text>
                </View>
            </TouchableOpacity> : <View {...containerProps} style={[styles.defaultContainerStyle, containerStyle]}>
                <Text {...titleProps} style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                <Text {...valueProps} style={[styles.defaultValueStyle, valueStyle]}>{(value) ? value : valuePlaceholder}</Text>
                <View style={[{position: "absolute", top: 0, right: 0, bottom: 0, left: 0},
                    styles.defaultDisabledOverlayStyle, disabledOverlayStyle]}/>
            </View>}
        </View>
    }
}

const styles = StyleSheet.create({
    defaultContainerStyle: {
        padding: 0,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
    },
    defaultTitleStyle: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 8,
        fontSize: 16,
    },
    defaultValueStyle: {
        color: "rgb(160,160,160)",
        fontSize: 14,
        flex: 0,
        paddingLeft: 8,
        paddingRight: 16,
    },
    defaultDisabledOverlayStyle: {
        backgroundColor: "rgba(255,255,255,0.6)",
    }

});


export default SettingsPicker;
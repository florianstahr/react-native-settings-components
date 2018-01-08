import React, { Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Platform, AlertIOS, ViewPropTypes} from "react-native";
import PropTypes from 'prop-types';
import DialogAndroid from 'react-native-dialogs';

class SettingsEditText extends Component {

    static props = {
        containerProps: PropTypes.object,
        containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        disabledOverlayStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        titleProps: PropTypes.object,
        titleStyle: Text.propTypes.style,
        title: PropTypes.string.isRequired,
        valueProps: PropTypes.object,
        valueStyle: Text.propTypes.style,
        value: PropTypes.string.isRequired,
        valuePlaceholder: PropTypes.string,
        negativeButtonTitle: PropTypes.string.isRequired,
        positiveButtonTitle: PropTypes.string.isRequired,
        dialogDescription: PropTypes.string,
        onSaveValue: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        iosDialogInputType: PropTypes.string,
        androidDialogProps: PropTypes.object,
        touchableProps: PropTypes.object,
    };

    static defaultProps = {
        containerProps: {},
        containerStyle: {},
        disabledOverlayStyle: {},
        titleProps: {},
        titleStyle: {},
        valueProps: {},
        valuePlaceholder: '...',
        valueStyle: {},
        dialogDescription: '',
        disabled: false,
        iosDialogInputType: 'plain-text',
        androidDialogProps: {},
        touchableProps: {},
    };

    trimValue = (val) => {
        return (val) ? val.trim() : '';
    };

    render() {

        const {disabled, dialogDescription, negativeButtonTitle, positiveButtonTitle, onSaveValue, androidDialogProps,
            containerProps, containerStyle, title, titleProps, titleStyle, valueProps, valueStyle, valuePlaceholder,
            disabledOverlayStyle, touchableProps, iosDialogInputType, value} = this.props;

        return (!disabled) ? <TouchableOpacity {...touchableProps} onPress={() => {
            if(Platform.OS === 'ios') {
                AlertIOS.prompt(
                    title,
                    dialogDescription,
                    [
                        {text: negativeButtonTitle, onPress: () => {}, style: 'cancel'},
                        {text: positiveButtonTitle, onPress: (value) => {
                                value = this.trimValue(value);
                                onSaveValue(value);
                            }}
                    ],
                    iosDialogInputType,
                    (value) ? value : ""
                );
            } else {
                let dialog = new DialogAndroid();
                dialog.set({
                    title: title,
                    content: dialogDescription,
                    positiveText: positiveButtonTitle,
                    negativeText: negativeButtonTitle,
                    input: {
                        prefill: (value) ? value : '',
                        callback: (value) => {
                            value = this.trimValue(value);
                            onSaveValue(value);
                        },
                    },
                    ...androidDialogProps
                });
                dialog.show();
            }
        }
        }>
            <View {...containerProps} style={[styles.defaultContainerStyle, containerStyle]}>
                <Text numberOfLines={1} {...titleProps} style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                <Text numberOfLines={1} {...valueProps} style={[styles.defaultValueStyle, valueStyle]}>{(value) ? value : valuePlaceholder}</Text>
            </View>
        </TouchableOpacity> : <View {...containerProps} style={[styles.defaultContainerStyle, containerStyle]}>
            <Text numberOfLines={1} {...titleProps} style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
            <Text numberOfLines={1} {...valueProps} style={[styles.defaultValueStyle, valueStyle]}>{(value) ? value : valuePlaceholder}</Text>
            <View style={[{position: "absolute", top: 0, right: 0, bottom: 0, left: 0}, styles.defaultDisabledOverlayStyle, disabledOverlayStyle]}/>
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
        flex: 1,
        paddingLeft: 8,
        paddingRight: 16,
        textAlign: 'right',
    },
    defaultDisabledOverlayStyle: {
        backgroundColor: "rgba(255,255,255,0.6)",
    }

});


export default SettingsEditText;
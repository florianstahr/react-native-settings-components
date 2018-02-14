import React, { Component} from 'react';
import {
    Modal, StyleSheet, Switch, Text, TouchableOpacity, View, ViewPropTypes
} from "react-native";
import PropTypes from 'prop-types';

class SettingsSwitch extends Component {

    constructor() {
        super();
        this.state = {
            isInEditMode: false,
        };
    }

    static props = {
        container: PropTypes.object,
        containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        disabledOverlayStyle: PropTypes.object,
        titleProps: PropTypes.object,
        titleStyle: Text.propTypes.style,
        title: PropTypes.string.isRequired,
        onTitlePress: PropTypes.func,
        descriptionProps: PropTypes.object,
        descriptionStyle: Text.propTypes.style,
        description: PropTypes.string,
        switchWrapperProps: PropTypes.object,
        switchWrapperStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        value: PropTypes.bool.isRequired,
        disabled: PropTypes.bool,
        onSaveValue: PropTypes.func.isRequired,
        thumbTintColor: PropTypes.string,
        onTintColor: PropTypes.string,
        switchProps: PropTypes.object,
    };

    static defaultProps = {
        container: {},
        containerStyle: {},
        disabledOverlayStyle: {},
        titleProps: {},
        titleStyle: {},
        onTitlePress: null,
        descriptionProps: {},
        descriptionStyle: {},
        description: null,
        switchWrapperProps: {},
        switchWrapperStyle: {},
        disabled: false,
        switchProps: {},
    };

    render() {

        const {container, containerStyle, titleProps, titleStyle, title, descriptionProps, descriptionStyle, description, disabled, switchProps, disabledOverlayStyle,
            switchWrapperProps, switchWrapperStyle, value, thumbTintColor, onTintColor, onSaveValue, onTitlePress} = this.props;

        return <View {...container} style={[styles.defaultContainerStyle, containerStyle]}>
            { onTitlePress ?
                [
                    <TouchableOpacity disabled={disabled} style={{flex: 1, position: 'relative', marginVertical: 10}} onPress={onTitlePress}>
                        <Text {...titleProps}
                            style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                        {description != null && <Text {...descriptionProps}
                            style={[styles.defaultDescriptionStyle, descriptionStyle]}>{description}</Text>}
                        {(disabled) ? <View style={[{position: "absolute", top: 0, right: 0, bottom: 0, left: 0},
                            styles.defaultDisabledOverlayStyle, (disabled) ? disabledOverlayStyle : null]}/> : null}
                    </TouchableOpacity>,
                    <View style={{width: 1, height: "60%", marginLeft: 20, backgroundColor: "rgb(220,220,223)"}}>
                    </View>
                ] :
                <View style={{flex: 1, position: 'relative', marginVertical: 10}}>
                    <Text {...titleProps}
                        style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                    {description != null && <Text {...descriptionProps}
                        style={[styles.defaultDescriptionStyle, descriptionStyle]}>{description}</Text>}
                    {(disabled) ? <View style={[{position: "absolute", top: 0, right: 0, bottom: 0, left: 0},
                        styles.defaultDisabledOverlayStyle, (disabled) ? disabledOverlayStyle : null]}/> : null}
                </View>
            }
            <View {...switchWrapperProps}
                  style={[styles.defaultSwitchWrapperStyle, switchWrapperStyle]}>
                <Switch
                    value={value}
                    thumbTintColor={thumbTintColor ? thumbTintColor : null}
                    onTintColor={onTintColor ? onTintColor : null}
                    onValueChange={value => {
                        onSaveValue(value)
                    }}
                    disabled={disabled} {...switchProps}/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    defaultContainerStyle: {
        padding: 0,
        minHeight: 50,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
    },
    defaultTitleStyle: {
        flex: 0,
        paddingLeft: 16,
        paddingRight: 8,
        fontSize: 16,
    },
    defaultDescriptionStyle: {
        flex: 0,
        paddingLeft: 16,
        paddingRight: 8,
        fontSize: 12,
    },
    defaultSwitchWrapperStyle: {
        flex: 0,
        flexDirection: "row",
        paddingLeft: 8,
        paddingRight: 16,
    }, 
    defaultDisabledOverlayStyle: {
        backgroundColor: "rgba(255,255,255,0.6)",
    }

});


export default SettingsSwitch;
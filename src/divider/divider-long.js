import React, { Component} from 'react';
import {StyleSheet, View, ViewPropTypes, Platform} from 'react-native';
import PropTypes from 'prop-types';

export default class SettingsDividerLong extends Component {

    static propTypes = {
        ios: PropTypes.bool,
        android: PropTypes.bool,
        dividerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
    };

    static defaultProps = {
        ios: true,
        android: true,
        dividerStyle: {}
    };

    render() {

        const {dividerStyle} = this.props;

        return (
            Platform.OS === "ios" && this.props.ios ||
            Platform.OS === "android" && this.props.android
        ) ? <View style={[styles.dividerStyle, dividerStyle]} /> : null
    }
}

const styles = StyleSheet.create({
    dividerStyle: {
        width: "100%",
        height: 1,
        backgroundColor: "rgb(220,220,223)",
    },
});
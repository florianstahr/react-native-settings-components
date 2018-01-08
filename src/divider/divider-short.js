import React, { Component} from 'react';
import {StyleSheet, View, ViewPropTypes, Platform} from 'react-native';
import PropTypes from 'prop-types';

export default class SettingsDividerShort extends Component {

    static propTypes = {
        ios: PropTypes.bool,
        android: PropTypes.bool,
        containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
        dividerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
    };

    static defaultProps = {
        ios: true,
        android: true,
        containerStyle: {},
        dividerStyle: {}
    };

    render() {

        const {containerStyle, dividerStyle} = this.props;

        return (Platform.OS === "ios" && this.props.ios || Platform.OS === "android" && this.props.android) ? <View style={[styles.containerStyle, containerStyle]} >
            <View style={[styles.dividerStyle, dividerStyle]} />
        </View> : null
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        width: "100%",
        height: 1,
        paddingLeft: 16,
        backgroundColor: "rgb(255,255,255)",
    },
    dividerStyle: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(220,220,223)",
    },
});
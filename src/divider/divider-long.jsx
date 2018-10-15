import React, { Component } from 'react';
import {
  StyleSheet, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  dividerStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgb(220,220,223)',
  },
});

class SettingsDividerLong extends Component {
  static propTypes = {
    ios: PropTypes.bool,
    android: PropTypes.bool,
    dividerStyle: PropTypes.object,
  };

  static defaultProps = {
    ios: true,
    android: true,
    dividerStyle: {},
  };

  render() {
    const { dividerStyle, ios, android } = this.props;

    return (
      (Platform.OS === 'ios' && ios)
      || (Platform.OS === 'android' && android)
    ) ? <View style={[style.dividerStyle, dividerStyle]} /> : null;
  }
}

export default SettingsDividerLong;

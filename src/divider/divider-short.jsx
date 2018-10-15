import React, { Component } from 'react';
import {
  StyleSheet, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 1,
    paddingLeft: 16,
    backgroundColor: 'rgb(255,255,255)',
  },
  dividerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(220,220,223)',
  },
});

class SettingsDividerShort extends Component {
  static propTypes = {
    ios: PropTypes.bool,
    android: PropTypes.bool,
    containerStyle: PropTypes.object,
    dividerStyle: PropTypes.object,
  };

  static defaultProps = {
    ios: true,
    android: true,
    containerStyle: {},
    dividerStyle: {},
  };

  render() {
    const {
      containerStyle, dividerStyle, android, ios,
    } = this.props;

    return (
      (Platform.OS === 'ios' && ios)
      || (Platform.OS === 'android' && android)
        ? (
          <View style={[style.containerStyle, containerStyle]}>
            <View style={[style.dividerStyle, dividerStyle]} />
          </View>
        ) : null
    );
  }
}

export default SettingsDividerShort;

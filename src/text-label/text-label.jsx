import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  defaultTitleStyle: {
    borderWidth: 0,
    color: Platform.OS === 'ios' ? '#424246' : '#111',
    fontSize: 10,
    padding: 16,
    paddingTop: 1,
    paddingBottom: 8,
  },
});

class SettingsTextLabel extends Component {
  static props = {
    container: PropTypes.object,
    containerStyle: PropTypes.object,
    titleProps: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    container: {},
    containerStyle: {},
    titleProps: {},
    titleStyle: {},
  };

  render() {
    const {
      container,
      containerStyle,
      titleProps,
      titleStyle,
      title,
    } = this.props;

    return (
      <View {...container} style={containerStyle}>
        <Text {...titleProps} style={[style.defaultTitleStyle, titleStyle]}>
          {title}
        </Text>
      </View>
    );
  }
}

export default SettingsTextLabel;

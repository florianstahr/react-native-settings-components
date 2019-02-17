import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  defaultContainerStyle: {
    padding: 0,
    minHeight: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultTitleStyle: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 16,
  },
  defaultValueStyle: {
    color: 'rgb(160,160,160)',
    fontSize: 14,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 16,
    textAlign: 'right',
  },
});



class SettingsReadOnlyText extends Component {
  static propTypes = {
    containerProps: PropTypes.object,
    containerStyle: PropTypes.object,
    titleProps: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    valueProps: PropTypes.object,
    valueStyle: PropTypes.object,
    value: PropTypes.string.isRequired,
    valuePlaceholder: PropTypes.string,
  };

  static defaultProps = {
    containerProps: {},
    containerStyle: {},
    titleProps: {},
    titleStyle: {},
    valueProps: {},
    valuePlaceholder: '...',
    valueStyle: {},
  };

 
  render() {
    const {
      containerProps, containerStyle, title,
      titleProps, titleStyle, valueProps, valueStyle, valuePlaceholder, value,
    } = this.props;

    return (
      <View {...containerProps} style={[style.defaultContainerStyle, containerStyle]}>
        <Text
          numberOfLines={1}
          {...titleProps}
          style={[style.defaultTitleStyle, titleStyle]}
          >
          {title}
        </Text>
        <Text
          numberOfLines={1}
          {...valueProps}
          style={[style.defaultValueStyle, valueStyle]}
          >
          {(value) || valuePlaceholder}
        </Text>
      </View>
    );
  }
}

export default SettingsReadOnlyText;

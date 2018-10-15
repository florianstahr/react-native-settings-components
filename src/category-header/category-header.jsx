import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  defaultTitleStyle: {
    borderWidth: 0,
    fontWeight: '300',
    color: (Platform.OS === 'ios') ? '#424246' : '#000000',
    fontSize: (Platform.OS === 'ios') ? 13 : 16,
    padding: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
});

class SettingsCategoryHeader extends Component {
  static propTypes = {
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
      container, containerStyle, titleProps, titleStyle, title,
    } = this.props;

    return (
      <View {...container} style={containerStyle}>
        <Text
          {...titleProps}
          style={[style.defaultTitleStyle, titleStyle]}
        >
          {title.toUpperCase()}
        </Text>
      </View>
    );
  }
}


export default SettingsCategoryHeader;

import React, { Component } from 'react';
import {
  StyleSheet, Switch, Text, View,
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
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 16,
  },
  defaultDisabledOverlayStyle: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  titleWrapper: { flex: 1, position: 'relative' },
});

class SettingsSwitch extends Component {
  static propTypes = {
    containerProps: PropTypes.object,
    containerStyle: PropTypes.object,
    disabledOverlayStyle: PropTypes.object,
    titleProps: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    descriptionProps: PropTypes.object,
    descriptionStyle: PropTypes.object,
    description: PropTypes.string,
    switchWrapperProps: PropTypes.object,
    switchWrapperStyle: PropTypes.object,
    value: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onValueChange: PropTypes.func.isRequired,
    trackColor: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
    switchProps: PropTypes.object,
  };

  static defaultProps = {
    containerProps: {},
    containerStyle: {},
    disabledOverlayStyle: {},
    titleProps: {},
    titleStyle: {},
    descriptionProps: {},
    descriptionStyle: {},
    description: null,
    switchWrapperProps: {},
    switchWrapperStyle: {},
    disabled: false,
    switchProps: {},
    trackColor: null,
  };

  render() {
    const {
      containerProps, containerStyle, titleProps, titleStyle, title, disabled, switchProps,
      disabledOverlayStyle, switchWrapperProps, switchWrapperStyle, value,
      trackColor, onValueChange, descriptionProps, descriptionStyle, description,
    } = this.props;

    return (
      <View {...containerProps} style={[style.defaultContainerStyle, containerStyle]}>
        <View style={style.titleWrapper}>
          <Text
            {...titleProps}
            style={[style.defaultTitleStyle, titleStyle]}
          >
            {title}
          </Text>
          {description ? (
            <Text
              {...descriptionProps}
              style={[style.defaultDescriptionStyle, descriptionStyle]}
            >
              {description}
            </Text>
          ) : null}
          {(disabled) ? (
            <View
              style={[style.defaultDisabledOverlayStyle, (disabled) ? disabledOverlayStyle : null]}
            />
          ) : null}
        </View>
        <View
          {...switchWrapperProps}
          style={[style.defaultSwitchWrapperStyle, switchWrapperStyle]}
        >
          <Switch
            value={value}
            trackColor={trackColor}
            onValueChange={onValueChange}
            disabled={disabled}
            {...switchProps}
          />
        </View>
      </View>
    );
  }
}

export default SettingsSwitch;

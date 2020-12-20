import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import DialogAndroid from 'react-native-dialogs';
import trim from 'lodash/trim';
import isFunction from 'lodash/isFunction';

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
  defaultDisabledOverlayStyle: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

const constants = {
  iosDialogInputType: {
    DEFAULT: 'plain-text',
    PLAIN_TEXT: 'plain-text',
    EMAIL_ADDRESS: 'email-address',
    NUMERIC: 'numeric',
    PHONE_PAD: 'phone-pad',
    ASCII_CAPABLE: 'ascii-capable',
    NUMBERS_AND_PUNCTUATION: 'numbers-and-punctuation',
    URL: 'url',
    NUMBER_PAD: 'number-pad',
    NAME_PHONE_PAD: 'name-phone-pad',
    DECIMAL_PAD: 'decimal-pad',
    TWITTER: 'twitter',
    WEB_SEARCH: 'web-search',
  },
  androidDialogInputType: {
    DEFAULT: null,
    NUMERIC: 'numeric',
    NUMBERS_AND_PUNCTUATION: 'numbers-and-punctuation',
    NUMERIC_PASSWORD: 'numeric-password',
    EMAIL_ADDRESS: 'email-address',
    PASSWORD: 'password',
    PHONE_PAD: 'phone-pad',
    DECIMAL_PAD: 'decimal-pad',
  },
};

class SettingsEditText extends Component {
  static propTypes = {
    containerProps: PropTypes.object,
    containerStyle: PropTypes.object,
    disabledOverlayStyle: PropTypes.object,
    titleProps: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    valueProps: PropTypes.object,
    valueStyle: PropTypes.object,
    value: PropTypes.string.isRequired,
    valuePlaceholder: PropTypes.string,
    valueFormat: PropTypes.func,
    negativeButtonTitle: PropTypes.string.isRequired,
    positiveButtonTitle: PropTypes.string.isRequired,
    dialogDescription: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    iosDialogInputType: PropTypes.oneOf([
      constants.iosDialogInputType.DEFAULT,
      constants.iosDialogInputType.EMAIL_ADDRESS,
      constants.iosDialogInputType.NUMERIC,
      constants.iosDialogInputType.PHONE_PAD,
      constants.iosDialogInputType.ASCII_CAPABLE,
      constants.iosDialogInputType.NUMBERS_AND_PUNCTUATION,
      constants.iosDialogInputType.URL,
      constants.iosDialogInputType.NUMBER_PAD,
      constants.iosDialogInputType.NAME_PHONE_PAD,
      constants.iosDialogInputType.DECIMAL_PAD,
      constants.iosDialogInputType.TWITTER,
      constants.iosDialogInputType.WEB_SEARCH,
    ]),
    androidDialogInputType: PropTypes.oneOf([
      constants.androidDialogInputType.DEFAULT,
      constants.androidDialogInputType.NUMERIC,
      constants.androidDialogInputType.NUMBERS_AND_PUNCTUATION,
      constants.androidDialogInputType.NUMERIC_PASSWORD,
      constants.androidDialogInputType.EMAIL_ADDRESS,
      constants.androidDialogInputType.PASSWORD,
      constants.androidDialogInputType.PHONE_PAD,
      constants.androidDialogInputType.DECIMAL_PAD,
    ]),
    androidDialogPlaceholder: PropTypes.string,
    androidDialogOptions: PropTypes.object,
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
    valueFormat: null,
    dialogDescription: '',
    disabled: false,
    iosDialogInputType: constants.iosDialogInputType.DEFAULT,
    androidDialogInputType: constants.androidDialogInputType.DEFAULT,
    androidDialogPlaceholder: null,
    androidDialogOptions: {},
    touchableProps: {},
  };

  onValueChange = (val) => {
    const { onValueChange } = this.props;
    onValueChange(trim(val));
  };

  renderAndroidDialog = async () => {
    const {
      title, dialogDescription, positiveButtonTitle, negativeButtonTitle, value,
      androidDialogOptions, androidDialogInputType,
    } = this.props;
    const { action, text } = await DialogAndroid.prompt(title, dialogDescription, {
      defaultValue: value || '',
      positiveText: positiveButtonTitle,
      negativeText: negativeButtonTitle,
      keyboardType: androidDialogInputType,
      ...androidDialogOptions,
    });

    if (action === DialogAndroid.actionPositive) {
      this.onValueChange(trim(
        text,
      ));
    }
  };

  openDialog = async () => {
    const {
      title, dialogDescription, negativeButtonTitle, positiveButtonTitle,
      iosDialogInputType, value,
    } = this.props;
    if (Platform.OS === 'ios') {
      Alert.prompt(
        title,
        dialogDescription,
        [
          { text: negativeButtonTitle, onPress: () => {}, style: 'cancel' },
          {
            text: positiveButtonTitle,
            onPress: this.onValueChange,
          },
        ],
        iosDialogInputType,
        (value) || '',
      );
    } else {
      this.renderAndroidDialog();
    }
  };

  render() {
    const {
      disabled, containerProps, containerStyle, title,
      titleProps, titleStyle, valueProps, valueStyle, valuePlaceholder, valueFormat,
      disabledOverlayStyle, touchableProps, value,
    } = this.props;

    return (!disabled) ? (
      <TouchableOpacity
        {...touchableProps}
        onPress={this.openDialog}
      >
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
      </TouchableOpacity>
    ) : (
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
          {(isFunction(valueFormat) ? valueFormat(value) : value) || valuePlaceholder}
        </Text>
        <View style={[style.defaultDisabledOverlayStyle, disabledOverlayStyle]} />
      </View>
    );
  }
}

SettingsEditText.constants = constants;

export default SettingsEditText;

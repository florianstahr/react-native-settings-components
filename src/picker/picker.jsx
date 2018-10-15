import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import trim from 'lodash/trim';
import join from 'lodash/join';
import PickerModal from './picker.modal';

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
    flex: 0,
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
  headerCloseBtnText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: 'white',
    fontSize: 16,
  },
});

class SettingsPicker extends Component {
  static propTypes = {
    containerProps: PropTypes.object,
    containerStyle: PropTypes.object,
    disabledOverlayStyle: PropTypes.object,
    titleProps: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    valueProps: PropTypes.object,
    valueStyle: PropTypes.object,
    value: PropTypes.any,
    valueFormat: PropTypes.func,
    valuePlaceholder: PropTypes.string,
    options: PropTypes.array.isRequired,
    dialogDescription: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    modalStyle: PropTypes.shape({
      innerWrapper: PropTypes.object,
      header: PropTypes.shape({
        titleWrapper: PropTypes.object,
        title: PropTypes.object,
        description: PropTypes.object,
        closeBtnWrapper: PropTypes.object,
      }),
      list: PropTypes.shape({
        wrapper: PropTypes.object,
        scrollView: PropTypes.object,
        innerWrapper: PropTypes.object,
      }),
    }),
    multi: PropTypes.bool,
    renderCloseBtn: PropTypes.func,
    renderListItem: PropTypes.func,
    singleRadio: PropTypes.bool,
  };

  static defaultProps = {
    containerProps: {},
    containerStyle: {},
    disabledOverlayStyle: {},
    dialogDescription: null,
    titleProps: {},
    titleStyle: {},
    value: null,
    valueProps: {},
    valuePlaceholder: '...',
    valueStyle: {},
    valueFormat: null,
    disabled: false,
    modalStyle: {},
    singleRadio: true,
    multi: false,
    renderCloseBtn: () => (
      <Text style={style.headerCloseBtnText}>
        {'CLOSE'}
      </Text>
    ),
    renderListItem: null,
  };

  constructor() {
    super();
    this.state = {
      pickerValue: [],
      pickerOpen: false,
    };
  }

  componentDidMount() {
    const { value, multi } = this.props;
    this.setState({
      pickerValue: multi && isArray(value)
        ? value : [value],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pickerValue: nextProps.multi && isArray(nextProps.value)
        ? nextProps.value : [nextProps.value],
    });
  }

  closeModal = () => {
    this.setState({
      pickerOpen: false,
    });
  };

  onSelectItem = (value) => {
    const {
      pickerValue,
    } = this.state;
    const {
      onValueChange, multi, singleRadio,
    } = this.props;
    let newVal;
    if (multi) {
      newVal = cloneDeep(pickerValue);
      if (pickerValue.indexOf(value) !== -1) {
        newVal.splice(newVal.indexOf(value), 1);
      } else {
        newVal.push(value);
      }
    } else if (pickerValue[0] === value && !singleRadio) {
      newVal = null;
    } else {
      newVal = value;
    }
    onValueChange(newVal);
  };

  generateValStr = () => {
    const {
      multi, valueFormat, value, valuePlaceholder,
    } = this.props;
    if (valueFormat) {
      return valueFormat(value);
    }
    if (multi) {
      if (isArray(value) && value.length) {
        return trim(join(value, ', '));
      }
    } else if (value) {
      return value.toString();
    }
    return valuePlaceholder;
  };

  render() {
    const {
      disabled, dialogDescription,
      containerProps, containerStyle, title, titleProps, titleStyle,
      valueProps, valueStyle, disabledOverlayStyle, modalStyle,
      options,
      multi, renderCloseBtn, renderListItem,
    } = this.props;
    const { pickerOpen, pickerValue } = this.state;

    return (
      <View style={{ width: '100%' }}>
        {(!disabled) ? (
          <TouchableOpacity onPress={() => {
            this.setState({
              pickerOpen: true,
            });
          }}
          >
            <PickerModal
              closeModal={this.closeModal}
              pickerOpen={pickerOpen}
              pickerValue={pickerValue}
              title={title}
              options={options}
              dialogDescription={dialogDescription}
              modalStyle={modalStyle}
              multi={multi}
              onSelectItem={this.onSelectItem}
              renderCloseBtn={renderCloseBtn}
              renderListItem={renderListItem}
            />
            <View {...containerProps} style={[style.defaultContainerStyle, containerStyle]}>
              <Text {...titleProps} style={[style.defaultTitleStyle, titleStyle]}>
                {title}
              </Text>
              <Text {...valueProps} style={[style.defaultValueStyle, valueStyle]}>
                {this.generateValStr()}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View {...containerProps} style={[style.defaultContainerStyle, containerStyle]}>
            <Text {...titleProps} style={[style.defaultTitleStyle, titleStyle]}>{title}</Text>
            <Text
              {...valueProps}
              style={[style.defaultValueStyle, valueStyle]}
            >
              {this.generateValStr()}
            </Text>
            <View style={[style.defaultDisabledOverlayStyle, disabledOverlayStyle]} />
          </View>
        )}
      </View>
    );
  }
}


export default SettingsPicker;

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
  Modal, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import toString from 'lodash/toString';
import PickerModalItem from './picker.modal.item';

const style = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  cancelTouchable: {
    flex: 1,
  },
  innerWrapper: {
    flex: 0,
    justifyContent: 'flex-end',
    paddingTop: 20,
    width: '100%',
    height: 300,
    shadowRadius: 12,
    shadowColor: '#101010',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
  },
  headerWrapper: {
    backgroundColor: 'red',
    position: 'relative',
    flex: 0,
    flexDirection: 'row',
  },
  headerTitleWrapper: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerTitle: { color: 'white', fontWeight: '600', fontSize: 18 },
  headerDescription: {
    fontSize: 13,
    color: 'white',
  },
  headerCloseBtnWrapper: {
    marginRight: 16,
    minHeight: 40,
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCloseBtnText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: 'white',
    fontSize: 16,
  },
  listWrapper: {
    height: 300,
  },
  listScrollView: { backgroundColor: 'white' },
});

class PickerModal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    pickerOpen: PropTypes.bool.isRequired,
    pickerValue: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    dialogDescription: PropTypes.string,
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
    renderCloseBtn: PropTypes.func,
    renderListItem: PropTypes.func,
  };

  static defaultProps = {
    dialogDescription: null,
    modalStyle: {},
    renderCloseBtn: () => (
      <Text style={style.headerCloseBtnText}>
        {'CLOSE'}
      </Text>
    ),
    renderListItem: null,
  };

  state = {
    scrollViewContentHeight: null,
  };

  onSelectPickerItem = value => () => {
    const { onSelectItem } = this.props;
    onSelectItem(value);
  };

  calculateScrollViewContentHeight = (e) => {
    const { height } = e.nativeEvent.layout;
    this.setState({
      scrollViewContentHeight: height,
    });
  };

  renderPickerItem = ({ item, index }) => {
    const { pickerValue, options, renderListItem } = this.props;
    return isFunction(renderListItem) ? renderListItem({
      item,
      index,
      onSelect: this.onSelectPickerItem(item.value),
      selected: pickerValue.indexOf(item.value) !== -1,
      isFirst: index === 0,
      isLast: index === options.length - 1,
    }) : (
      <PickerModalItem
        key={`picker-item:${toString(index)}`}
        onSelect={this.onSelectPickerItem(item.value)}
        selected={pickerValue.indexOf(item.value) !== -1}
        label={item.label}
        value={item.value}
        isLast={index === options.length - 1}
      />
    );
  };

  render() {
    const {
      closeModal, pickerOpen, dialogDescription, title, modalStyle,
      options, renderCloseBtn,
    } = this.props;
    const { scrollViewContentHeight } = this.state;
    return (
      <Modal
        visible={pickerOpen}
        animationType="slide"
        onRequestClose={closeModal}
        transparent
      >
        <View style={[style.outerWrapper]}>
          <TouchableWithoutFeedback
            onPress={closeModal}
          >
            <View
              style={style.cancelTouchable}
            />
          </TouchableWithoutFeedback>
          <View style={[style.innerWrapper, get(modalStyle, 'innerWrapper')]}>
            <View style={[style.headerWrapper, get(modalStyle, 'header.wrapper')]}>
              <View style={[style.headerTitleWrapper, get(modalStyle, 'header.titleWrapper')]}>
                <Text style={[style.headerTitle, get(modalStyle, 'header.title')]}>
                  {title}
                </Text>
                {dialogDescription ? (
                  <Text style={[style.headerDescription, get(modalStyle, 'header.description')]}>
                    {dialogDescription}
                  </Text>) : null}
              </View>
              <TouchableOpacity
                style={[style.headerCloseBtnWrapper, get(modalStyle, 'header.closeBtnWrapper')]}
                onPress={closeModal}
                activeOpacity={0.6}
              >
                {renderCloseBtn()}
              </TouchableOpacity>
            </View>
            <View style={[style.listWrapper, get(modalStyle, 'list.wrapper')]}>
              <ScrollView style={[style.listScrollView, get(modalStyle, 'list.scrollView')]}>
                <View
                  onLayout={this.calculateScrollViewContentHeight}
                  style={[get(modalStyle, 'list.innerWrapper'), { height: scrollViewContentHeight }]}
                >
                  {map(options, (item, index) => this.renderPickerItem({ item, index }))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default PickerModal;

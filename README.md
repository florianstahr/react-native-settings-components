# react-native-settings-components

![npm](https://img.shields.io/npm/v/react-native-settings-components.svg)
![dependencies](https://img.shields.io/david/florianstahr/react-native-settings-components.svg)

Settings components for React Native in style of native iOS or Android components. Uses [`react-native-dialogs`](https://github.com/aakashns/react-native-dialogs) for dialogs on Android.

## Showcase
![react-native-settings-components ios screenshot](https://i.imgur.com/5cV48CA.png "Screenshot iOS") ![react-native-settings-components android screenshot](https://i.imgur.com/VKCqNaA.png "Screenshot Android")

## Install

```bash
npm install react-native-settings-components --save
```
or
```bash
yarn add react-native-settings-components
```

## Usage

```javascript
import {SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker} from 'react-native-settings-components';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      allowPushNotifications: false,
      gender: '',
    };
  }

  render() {

    <ScrollView style={{flex: 1, backgroundColor: (Platform.OS === 'ios') ? colors.iosSettingsBackground : colors.white}}>

        <SettingsCategoryHeader title={'My Account'} textStyle={(Platform.OS === 'android') ? {color: colors.monza} : null}/>

        <SettingsDividerLong android={false}/>

        <SettingsEditText
            title="Username"
            dialogDescription={'Enter your username.'}
            valuePlaceholder="..."
            negativeButtonTitle={'Cancel'}
            buttonRightTitle={'Save'}
            onSaveValue={(value) => {
                console.log('username:', value);
                this.setState({
                    username: value
                });
            }}
            value={this.state.username}
            dialogAndroidProps={{
                widgetColor: colors.monza,
                positiveColor: colors.monza,
                negativeColor: colors.monza,
            }}
        />

        <SettingsDividerShort/>

        <SettingsPicker
            title="Gender"
            dialogDescription={'Choose your gender.'}
            possibleValues={[
                {label: '...', value: ''},
                {label: 'male', value: 'male'},
                {label: 'female', value: 'female'},
                {label: 'other', value: 'other'}
            ]}
            negativeButtonTitle={'Cancel'}
            buttonRightTitle={'Save'}
            onSaveValue={value => {
                console.log('gender:', value);
                this.setState({
                    gender: value
                });
            }}
            value={this.state.gender}
            styleModalButtonsText={{color: colors.monza}}
        />

        ...

        <SettingsSwitch
            title={'Allow Push Notifications'}
            onSaveValue={(value) => {
                console.log('allow push notifications:', value);
                this.setState({
                    allowPushNotifications: value
                });
            }}
            value={this.state.allowPushNotifications}
            thumbTintColor={(this.state.allowPushNotifications) ? colors.switchEnabled : colors.switchDisabled}
        />

        ...

      </ScrollView>

    }

}

const colors = {
  iosSettingsBackground: 'rgb(235,235,241)',
  white: '#FFFFFF',
  monza: '#C70039',
  switchEnabled: (Platform.OS === 'android') ? '#C70039' : null,
  switchDisabled: (Platform.OS === 'android') ? '#efeff3' : null,
  switchOnTintColor: (Platform.OS === 'android') ? 'rgba(199, 0, 57, 0.6)' : null,
  blueGem: '#27139A',
};
```

## Props

### SettingsCategoryHeader

Prop | Description | Type | Default
----- | ----- | ----- | -----
`title` | category title | String | *Required*
`container` | container props except style | Object | `{}`
`containerStyle` | container style prop | ViewPropTypes | `{}`
`titleProps` | title props except style | `Text` Component Props / Object | `{}`
`titleStyle` | title style prop | `Text` PropTypes | `{}`

### SettingsDividerLong

Prop | Description | Type | Default
----- | ----- | ----- | -----
`ios` | display on iOS | Boolean | `true`
`android` | display on Android | Boolean | `true`
`dividerStyle` | divider style prop | ViewPropTypes | `{}`

### SettingsDividerShort

Prop | Description | Type | Default
----- | ----- | ----- | -----
`ios` | display on iOS | Boolean | `true`
`android` | display on Android | Boolean | `true`
`containerStyle` | container style prop | ViewPropTypes | `{}`
`dividerStyle` | divider style prop | ViewPropTypes | `{}`

### SettingsEditText

Prop | Description | Type | Default
----- | ----- | ----- | -----
`containerProps` | container props except style | `View` Component Props | `{}`
`containerStyle` | container style prop | ViewPropTypes | `{}`
`disabledOverlayStyle` | component overlay style if setting is disabled | ViewPropTypes | `{}`
`titleProps` | title props except style | `Text` Component Props | `{}`
`titleStyle` | title style prop | `Text` PropTypes | `{}`
`title` | title of setting | String | *Required*
`valueProps` | value props except style | `Text` Component Props | `{}`
`valueStyle` | value style prop | `Text` PropTypes | `{}`
`value` | value of setting | String | *Required*
`valuePlaceholder` | placeholder if value is empty | String | `...`
`negativeButtonTitle` | negative dialog buttons title | String | *Required*
`positiveButtonTitle` | positive dialog buttons title | String | *Required*
`dialogDescription` | text explaining what the user should do e.g. | String | `''``
`onSaveValue` | callback to be invoked when the positive dialog button is pressed | String | *Required*
`disabled` | whether the settings value should be editable or not | Boolean | `false`
`iosDialogInputType` | input type of the dialog alert on ios | String | `plain-text`
`androidDialogProps` | input dialog props on android (see [`react-native-dialogs`](https://github.com/aakashns/react-native-dialogs)) | String | `{}`
`touchableProps` | props of touchable opening input dialog | String | `{}`

### SettingsPicker

Prop | Description | Type | Default
----- | ----- | ----- | -----
`containerProps` | container props except style | `View` Component Props | `{}`
`containerStyle` | container style prop | ViewPropTypes | `{}`
`disabledOverlayStyle` | component overlay style if setting is disabled | ViewPropTypes | `{}`
`titleProps` | title props except style | `Text` Component Props | `{}`
`titleStyle` | title style prop | `Text` PropTypes | `{}`
`title` | title of setting | String | *Required*
`valueProps` | value props except style | `Text` Component Props | `{}`
`valueStyle` | value style prop | `Text` PropTypes | `{}`
`value` | value of setting | String | *Required*
`possibleValues` | picker values | Array of objects in format `{label: string, value: string}` | *Required*
`valuePlaceholder` | placeholder if value is empty | String | `...`
`negativeButtonTitle` | negative dialog buttons title | String | *Required*
`positiveButtonTitle` | positive dialog buttons title | String | *Required*
`dialogDescription` | text explaining what the user should do e.g. | String | `''`
`modalDescriptionStyle` | modal description style prop | `Text` PropTypes | `{}`
`onSaveValue` | callback to be invoked when the positive dialog button is pressed | String | *Required*
`disabled` | whether the settings value should be editable or not | Boolean | `false`
`modalStyle` | modal `ScrollView` style prop | ViewPropTypes | `{}`
`modalInnerStyle` | modal `ScrollView` inner `View` style prop | ViewPropTypes | `{}`
`modalButtonsTitleStyle` | modal buttons style prop (positive and negative button) | `Text` PropTypes | `{}`
`modalButtonsTitleNegativeStyle` | value style prop | `Text` PropTypes | `{}`
`modalButtonsTitlePositiveStyle` | value style prop | `Text` PropTypes | `{}`

### SettingsSwitch

Prop | Description | Type | Default
----- | ----- | ----- | -----
`containerProps` | container props except style | `View` Component Props | `{}`
`containerStyle` | container style prop | ViewPropTypes | `{}`
`disabledOverlayStyle` | component overlay style if setting is disabled | ViewPropTypes | `{}`
`titleProps` | title props except style | `Text` Component Props | `{}`
`titleStyle` | title style prop | `Text` PropTypes | `{}`
`title` | title of setting | String | *Required*
`switchWrapperProps` | switch wrapper props except style | `View` Component Props | `{}`
`switchWrapperStyle` | switch wrapper style prop | `View` PropTypes | `{}`
`value` | value of setting | Boolean | *Required*
`disabled` | whether the settings value should be editable or not | Boolean | `false`
`onSaveValue` | callback to be invoked when the positive dialog button is pressed | String | *Required*
`thumbTintColor` | switch thumb tint color | Color | `null`
`onTintColor` | switch background color when the switch is turned on | Color | `null`
`switchProps` | `Switch` component props except the ones mentioned before | `Switch` Component Props | `{}`

## Example

There is an example app in the [example](example/) directory.

Run iOS version by

```bash
git clone https://github.com/florianstahr/react-native-settings-components.git
npm install
react-native link
react-native run-ios
```

# react-native-settings-components

Settings components for React Native in style of native iOS or Android components. <br />
Uses [`react-native-dialogs`](https://github.com/aakashns/react-native-dialogs) for dialogs on Android.

## Installation

```bash
# via NPM
npm i react-native-settings-components
# or via Yarn
yarn add react-native-settings-components
```

## Usage

```javascript
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from "react-native-settings-components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      allowPushNotifications: false,
      gender: ""
    };
  }

  render() {
    <ScrollView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS === "ios" ? colors.iosSettingsBackground : colors.white
      }}
    >
      <SettingsCategoryHeader
        title={"My Account"}
        textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
      />
      <SettingsDividerLong android={false} />
      <SettingsEditText
        title="Username"
        dialogDescription={"Enter your username."}
        valuePlaceholder="..."
        negativeButtonTitle={"Cancel"}
        buttonRightTitle={"Save"}
        onValueChange={value => {
          console.log("username:", value);
          this.setState({
            username: value
          });
        }}
        value={this.state.username}        
      />
      <SettingsDividerShort />
      <SettingsPicker
        title="Gender"
        dialogDescription={"Choose your gender."}
        options={[
          { label: "...", value: "" },
          { label: "male", value: "male" },
          { label: "female", value: "female" },
          { label: "other", value: "other" }
        ]}
        onValueChange={value => {
          console.log("gender:", value);
          this.setState({
            gender: value
          });
        }}
        value={this.state.gender}
        styleModalButtonsText={{ color: colors.monza }}
      />
      ...
      <SettingsSwitch
        title={"Allow Push Notifications"}
        onValueChange={value => {
          console.log("allow push notifications:", value);
          this.setState({
            allowPushNotifications: value
          });
        }}
        value={this.state.allowPushNotifications}
        trackColor={{
          true: colors.switchEnabled,
          false: colors.switchDisabled,
        }}
      />
      ...
    </ScrollView>;
  }
}

const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};
```

## Props

### SettingsCategoryHeader

| Prop             | Description                  | Type                            | Default    |
|:-----------------|:-----------------------------|:--------------------------------|:-----------|
| `title`          | category title               | String                          | *Required* |
| `container`      | container props except style | Object                          | `{}`       |
| `containerStyle` | container style prop         | ViewPropTypes                   | `{}`       |
| `titleProps`     | title props except style     | `Text` Component Props / Object | `{}`       |
| `titleStyle`     | title style prop             | `Text` PropTypes                | `{}`       |

### SettingsTextLabel - added by [radi-cho](http://github.com/radi-cho)

The same props as [`SettingsCategoryHeader`](#settingscategoryheader)'s props.

### SettingsDividerLong

| Prop           | Description        | Type          | Default |
|:---------------|:-------------------|:--------------|:--------|
| `ios`          | display on iOS     | Boolean       | `true`  |
| `android`      | display on Android | Boolean       | `true`  |
| `dividerStyle` | divider style prop | ViewPropTypes | `{}`    |

### SettingsDividerShort

| Prop             | Description          | Type          | Default |
|:-----------------|:---------------------|:--------------|:--------|
| `ios`            | display on iOS       | Boolean       | `true`  |
| `android`        | display on Android   | Boolean       | `true`  |
| `containerStyle` | container style prop | ViewPropTypes | `{}`    |
| `dividerStyle`   | divider style prop   | ViewPropTypes | `{}`    |

### SettingsEditText

| Prop                     | Description                                                                                                          | Type                        | Default      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------|:----------------------------|:-------------|
| `containerProps`         | container props except style                                                                                         | `View` Component Props      | `{}`         |
| `containerStyle`         | container style prop                                                                                                 | ViewPropTypes               | `{}`         |
| `disabledOverlayStyle`   | component overlay style if setting is disabled                                                                       | ViewPropTypes               | `{}`         |
| `titleProps`             | title props except style                                                                                             | `Text` Component Props      | `{}`         |
| `titleStyle`             | title style prop                                                                                                     | `Text` PropTypes            | `{}`         |
| `title`                  | title of setting                                                                                                     | String                      | *Required*   |
| `descriptionProps`       | description props except style                                                                                       | `Text` Component Props      | `{}`         |
| `descriptionStyle`       | description style prop                                                                                               | `Text` PropTypes            | `{}`         |
| `description`            | description of setting                                                                                               | String                      | `null`       |
| `valueProps`             | value props except style                                                                                             | `Text` Component Props      | `{}`         |
| `valueStyle`             | value style prop                                                                                                     | `Text` PropTypes            | `{}`         |
| `value`                  | value of setting                                                                                                     | String                      | *Required*   |
| `valuePlaceholder`       | placeholder if value is empty                                                                                        | String                      | `...`        |
| `valueFormat`            | Value formatter                                                                                                      | Function (String) => String | `null`       |
| `negativeButtonTitle`    | negative dialog buttons title                                                                                        | String                      | *Required*   |
| `positiveButtonTitle`    | positive dialog buttons title                                                                                        | String                      | *Required*   |
| `dialogDescription`      | text explaining what the user should do e.g.                                                                         | String                      | `''`         |
| `onValueChange`          | callback to be invoked when the positive dialog button is pressed                                                    | Function (String) => null   | *Required*   |
| `disabled`               | whether the settings value should be editable or not                                                                 | Boolean                     | `false`      |
| `iosDialogInputType`     | input type of the dialog alert on ios (constants available at SettingsEditText.constants.iosDialogInputType)         | String                      | `plain-text` |
| `androidDialogInputType` | input type of the dialog alert on android (constants available at SettingsEditText.constants.androidDialogInputType) | String                      | `null`       |
| `androidDialogOptions`   | input dialog options on android (see [`react-native-dialogs`](https://github.com/aakashns/react-native-dialogs))     | String                      | `{}`         |
| `touchableProps`         | props of touchable opening input dialog                                                                              | String                      | `{}`         |

### SettingsPicker

If you set `multi = true`, you can select multiple options, but you have to set a value of type `Array` instead. See props.

| Prop                   | Description                                                       | Type                                                                                                                                             | Default                                              |
|:-----------------------|:------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
| `containerProps`       | container props except style                                      | `View` Component Props                                                                                                                           | `{}`                                                 |
| `containerStyle`       | container style prop                                              | ViewPropTypes                                                                                                                                    | `{}`                                                 |
| `disabledOverlayStyle` | component overlay style if setting is disabled                    | ViewPropTypes                                                                                                                                    | `{}`                                                 |
| `titleProps`           | title props except style                                          | `Text` Component Props                                                                                                                           | `{}`                                                 |
| `titleStyle`           | title style prop                                                  | `Text` PropTypes                                                                                                                                 | `{}`                                                 |
| `title`                | title of setting                                                  | String                                                                                                                                           | *Required*                                           |
| `valueProps`           | value props except style                                          | `Text` Component Props                                                                                                                           | `{}`                                                 |
| `valueStyle`           | value style prop                                                  | `Text` PropTypes                                                                                                                                 | `{}`                                                 |
| `value`                | value of setting                                                  | <Your_Value_Type>                                                                                                                                | Array<Your_Value_Type>                  | *Required* |
| `valueFormat`          | Value formatter                                                   | Function (String) => String                                                                                                                      | `null`                                               |
| `valuePlaceholder`     | placeholder if value is empty                                     | String                                                                                                                                           | `...`                                                |
| `options`              | picker values                                                     | Array of objects in format `{label: string, value: string}`                                                                                      | *Required*                                           |
| `dialogDescription`    | text explaining what the user should do e.g.                      | String                                                                                                                                           | `''`                                                 |
| `onValueChange`        | callback to be invoked when the positive dialog button is pressed | Function (<Your_Value_Type>                                                                                                                      | Array<Your_Value_Type>) => null | *Required*         |
| `disabled`             | whether the settings value should be editable or not              | Boolean                                                                                                                                          | `false`                                              |
| `modalStyle`           | modal styles [see here](#modal-style)                             | Object                                                                                                                                           | `{}`                                                 |
| `multi`                | allow selection of multiple options                               | Boolean                                                                                                                                          | `false`                                              |
| `renderCloseBtn`       | render button to close dialog                                     | Function () => React.Component                                                                                                                   | `<Text>Close</Text>`                                 |
| `renderListItem`       | render item of options list                                       | Function ({ item Object, index Integer, onSelect Function, selected Boolean, label String, isFirst Boolean, isLast Boolean }) => React.Component | `{}`                                                 |
| `singleRadio`          | if `multi = false`: one option has to be selected?                | Boolean                                                                                                                                          | `true`                                               |

#### modal style

```javascript
const modalStyle = {
    innerWrapper: PropTypes.object,
    header: {
        titleWrapper: PropTypes.object,
        title: PropTypes.object,
        description: PropTypes.object,
        closeBtnWrapper: PropTypes.object,
    },
    list: {
        wrapper: PropTypes.object,
        scrollView: PropTypes.object,
        innerWrapper: PropTypes.object,
    },
};
```

### SettingsSwitch

| Prop                   | Description                                                                                                                    | Type                       | Default    |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------|
| `containerProps`       | container props except style                                                                                                   | `View` Component Props     | `{}`       |
| `containerStyle`       | container style prop                                                                                                           | ViewPropTypes              | `{}`       |
| `disabledOverlayStyle` | component overlay style if setting is disabled                                                                                 | ViewPropTypes              | `{}`       |
| `titleProps`           | title props except style                                                                                                       | `Text` Component Props     | `{}`       |
| `titleStyle`           | title style prop                                                                                                               | `Text` PropTypes           | `{}`       |
| `title`                | title of setting                                                                                                               | String                     | *Required* |
| `descriptionProps`     | description props except style                                                                                                 | `Text` Component Props     | `{}`       |
| `descriptionStyle`     | description style prop                                                                                                         | `Text` PropTypes           | `{}`       |
| `description`          | description of setting                                                                                                         | String                     | null       |
| `switchWrapperProps`   | switch wrapper props except style                                                                                              | `View` Component Props     | `{}`       |
| `switchWrapperStyle`   | switch wrapper style prop                                                                                                      | `View` PropTypes           | `{}`       |
| `value`                | value of setting                                                                                                               | Boolean                    | *Required* |
| `disabled`             | whether the settings value should be editable or not                                                                           | Boolean                    | `false`    |
| `onValueChange`        | callback to be invoked when the positive dialog button is pressed                                                              | Function (Boolean) => null | *Required* |
| `trackColor`           | switch track color [see React Native Switch prop `trackColor`](https://facebook.github.io/react-native/docs/switch#trackcolor) | Object                     | `null`     |
| `switchProps`          | `Switch` component props except the ones mentioned before                                                                      | `Switch` Component Props   | `{}`       |

### SettingsButton

| Prop                    | Description                                                       | Type                             | Default    |
|:------------------------|:------------------------------------------------------------------|:---------------------------------|:-----------|
| `containerProps`        | container props except style                                      | `View` Component Props           | `{}`       |
| `containerStyle`        | container style prop                                              | ViewPropTypes                    | `{}`       |
| `disabledOverlayStyle`  | component overlay style if setting is disabled                    | ViewPropTypes                    | `{}`       |
| `titleProps`            | title props except style                                          | `Text` Component Props           | `{}`       |
| `titleStyle`            | title style prop                                                  | `Text` PropTypes                 | `{}`       |
| `title`                 | title of setting                                                  | String                           | *Required* |
| `descriptionProps`      | description props except style                                    | `Text` Component Props           | `{}`       |
| `descriptionStyle`      | description style prop                                            | `Text` PropTypes                 | `{}`       |
| `description`           | description of setting                                            | String                           | null       |
| `rightIconWrapperStyle` | wrapper style prop of wrapper around rightBtn                     | `View` Component Props           | `{}`       |
| `rightIcon`             | anything that should be displayed on the right side of the button | Function () => <React.Component> | `null`     |
| `disabled`              | whether the settings value should be editable or not              | Boolean                          | `false`    |
| `onPress`               | callback to be invoked when the button is pressed                 | Function (Boolean) => null       | *Required* |

## Showcase - v0.0.1
![react-native-settings-components ios screenshot](https://i.imgur.com/5cV48CA.png "Screenshot iOS") ![react-native-settings-components android screenshot](https://i.imgur.com/VKCqNaA.png "Screenshot Android")

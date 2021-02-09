import * as React from 'react';
import { TextProps, TextStyle, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native'

interface SettingsDividerShortProps {
	ios?:boolean,
	android?:boolean,
	containerStyle?:ViewStyle,
	dividerStyle?:ViewStyle,
}
type SettingsDividerShort = React.Component<SettingsDividerShortProps>;

interface SettingsDividerLongProps {
	ios?:boolean,
	android?:boolean,
	dividerStyle?:ViewStyle,
}
type SettingsDividerLong = React.Component<SettingsDividerLongProps>;

interface SettingsEditTextProps {
	containerProps?: ViewProps,
	containerStyle?: ViewStyle,
	disabledOverlayStyle?: ViewStyle,
	titleProps?: TextProps,
	titleStyle?: TextStyle,
	title: string,
	valueProps?: TextProps,
	valueStyle?: TextStyle,
	value: string
	valuePlaceholder?: string, 
	valueFormat?: (input:string)=>string ,
	negativeButtonTitle: string,
	positiveButtonTitle: string,
	dialogDescription?: string,
	onValueChange: (text:string)=>void,
	disabled?: boolean,
	iosDialogInputType?:( 
		'plain-text'|
		'plain-text'|
		'email-address'|
		'numeric'|
		'phone-pad'|
		'ascii-capable'|
		'numbers-and-punctuation'|
		'url'|
		'number-pad'|
		'name-phone-pad'|
		'decimal-pad'|
		'twitter'|
		'web-search'
	),
	androidDialogInputType?: (
		null|
		'numeric'|
		'numbers-and-punctuation'|
		'numeric-password'|
		'email-address'|
		'password'|
		'phone-pad'|
		'decimal-pad'
	),
	androidDialogPlaceholder?:string,
	// ↓↓↓ it's from react-native-dialogs package -> DialogAndroid.js -> "type OptionsPrompt" (on 183 line currently)
	// ↓↓↓ I just don't know how to add it properly
	androidDialogOptions?: {any:any},
	touchableProps?: TouchableOpacityProps
}
type SettingsEditText = React.Component<SettingsEditTextProps>;

interface SettingsPickerProps {
	containerProps?: ViewProps,
    containerStyle?: ViewStyle,
    disabledOverlayStyle?: ViewStyle,
    titleProps?: TextProps,
    titleStyle?: TextStyle,
    title: string,
    valueProps?: TextProps,
    valueStyle?: TextStyle,
    value?: any,
    valueFormat?: (input:T<any>)=>T,
    valuePlaceholder?: string,
    options: Array<any>, //I honestly don't know how to type this
    dialogDescription?: string,
    onValueChange: (value:any)=>void,
    disabled?: boolean,
    modalStyle?: {
      innerWrapper: ViewStyle,
      header: {
        titleWrapper: ViewStyle,
        title: TextStyle,
        description: TextStyle,
        closeBtnWrapper: ViewStyle,
      },
      list: {
        wrapper: ViewStyle,
        scrollView: ViewStyle,
        innerWrapper: ViewStyle,
      },
    },
    multi?: boolean,
	renderCloseBtn?: JSX.Element,
	// ↓↓↓ I'm not gonna read through the code that deeply to type every prop,
	// ↓↓↓ especially since I won't use SettingsPicker at all in my app.
	// ↓↓↓ If you want, type it correctly urself
	renderListItem?: JSX.Element<{any:any}>, 
    singleRadio?: boolean,
}
type SettingsPicker = React.Component<SettingsPickerProps>;


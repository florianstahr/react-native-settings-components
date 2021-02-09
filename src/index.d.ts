import * as React from 'react';
import { TextProps, TextStyle, TouchableOpacityProps, ViewProps, ViewStyle } from 'react-native'

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
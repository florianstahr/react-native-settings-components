import * as React from 'react';
import { 
	GestureResponderEvent, 
	TextProps, 
	TextStyle, 
	TouchableOpacityProps, 
	ViewProps, 
	ViewStyle
} from 'react-native'

export interface SettingsDividerShortProps {
	ios?:boolean,
	android?:boolean,
	containerStyle?:ViewStyle,
	dividerStyle?:ViewStyle,
}
export declare class SettingsDividerShort extends React.Component<SettingsDividerShortProps> {}

export interface SettingsDividerLongProps {
	ios?:boolean,
	android?:boolean,
	dividerStyle?:ViewStyle,
}
export declare class SettingsDividerLong extends React.Component<SettingsDividerLongProps> {}

export interface SettingsEditTextProps {
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
export declare class SettingsEditText extends React.Component<SettingsEditTextProps> {}

export interface SettingsPickerProps {
	containerProps?: ViewProps,
    containerStyle?: ViewStyle,
    disabledOverlayStyle?: ViewStyle,
    titleProps?: TextProps,
    titleStyle?: TextStyle,
    title: string,
    valueProps?: TextProps,
    valueStyle?: TextStyle,
    value?: any,
    valueFormat?: (input:any)=>any,
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
	renderCloseBtn?: React.Component,
	// ↓↓↓ I'm not gonna read through the code that deeply to type every prop,
	// ↓↓↓ especially since I won't use SettingsPicker at all in my app.
	// ↓↓↓ If you want, type it correctly urself
	renderListItem?: React.Component, 
    singleRadio?: boolean,
}
export declare class SettingsPicker extends React.Component<SettingsPickerProps> {}

export interface SettingCategoryHeaderProps {
	container?: ViewProps,
	containerStyle?: ViewStyle,
	titleProps?: TextProps,
	titleStyle?: TextStyle,
	title: string
}
export declare class SettingsCategoryHeader extends React.Component<SettingCategoryHeaderProps> {}

export interface SettingsTextLabelProps {
	container?: ViewProps,
	containerStyle?: ViewStyle,
	titleProps?: TextProps,
	titleStyle?: TextStyle,
	title: string,  
}
export declare class SettingsTextLabel extends React.Component<SettingsTextLabelProps> {}

export interface SettingsSwitchProps {
	containerProps?: ViewProps,
    containerStyle?: ViewStyle,
    disabledOverlayStyle?: ViewStyle,
    titleProps?: TextProps,
    titleStyle?: TextStyle,
    title: string,
    descriptionProps?: TextProps,
    descriptionStyle?: TextStyle,
    description?: string,
    switchWrapperProps?: ViewProps,
    switchWrapperStyle?: ViewStyle,
    value: boolean,
    disabled?: boolean,
    onValueChange: (value: boolean) => void,
    trackColor?: {
      true: string,
      false: string,
    },
    switchProps: object,
}
export declare class SettingsSwitch extends React.Component<SettingsSwitchProps> {}


export interface SettingsButtonProps {
	containerProps?: TouchableOpacityProps,
    containerStyle?: ViewStyle,
    disabledOverlayStyle?: ViewStyle,
    titleProps?: TextProps,
    titleStyle?: TextStyle,
    title: string,
    descriptionProps?: TextProps,
    descriptionStyle?: TextStyle,
    description?: string,
    rightIconWrapperStyle?: ViewStyle,
    rightIcon?: JSX.Element,
    disabled?: boolean,
    onPress: (event: GestureResponderEvent) => void,
}
export declare class SettingSwitch extends React.Component<SettingsButtonProps> {}
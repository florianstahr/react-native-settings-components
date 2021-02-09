import * as React from 'react';
import { ViewStyle } from 'react-native'

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
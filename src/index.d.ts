import * as React from 'react';
import { ViewStyle } from 'react-native'

interface SettingsDividerShortProps {
	ios?:boolean,
	android?:boolean,
	containerStyle?:ViewStyle,
	dividerStyle?:ViewStyle,
}
type SettingsDividerShort = React.Component<SettingsDividerShortProps>;
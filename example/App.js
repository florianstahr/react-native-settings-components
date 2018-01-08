import React, { Component } from 'react';
import {
    Platform, ScrollView, Text, View, StatusBar
} from 'react-native';
import {
    SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker
} from 'react-native-settings-components';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            allowPushNotifications: false,
            gender: '',
        };
        if(Platform.OS === 'ios') {
            StatusBar.setBarStyle('light-content');
        } else {
            StatusBar.setBackgroundColor('#1B0887');
        }
    }

    render() {
        return <View style={{flex: 1}}>
            <View style={[{padding: 16, backgroundColor: colors.blueGem},
                (Platform.OS === 'ios') ? {paddingTop: 30, justifyContent: 'center', flexDirection: 'row'} : null]}>
                <Text style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>Settings</Text>
            </View>
            <ScrollView style={{flex: 1, backgroundColor: (Platform.OS === 'ios') ? colors.iosSettingsBackground : colors.white}}>
                <SettingsCategoryHeader title={'My Account'} textStyle={(Platform.OS === 'android') ? {color: colors.monza} : null}/>
                <SettingsDividerLong android={false}/>
                <SettingsEditText
                    title="Username"
                    dialogDescription={'Enter your username.'}
                    valuePlaceholder="..."
                    negativeButtonTitle={'Cancel'}
                    positiveButtonTitle={'Save'}
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
                <SettingsEditText
                    title="First Name"
                    dialogDescription={'Enter your first name.'}
                    valuePlaceholder="..."
                    negativeButtonTitle={'Cancel'}
                    positiveButtonTitle={'Save'}
                    onSaveValue={(value) => {
                        console.log('firstname:', value);
                        this.setState({
                            firstname: value
                        });
                    }}
                    value={this.state.firstname}
                    dialogAndroidProps={{
                        widgetColor: colors.monza,
                        positiveColor: colors.monza,
                        negativeColor: colors.monza,
                    }}
                />
                <SettingsDividerShort/>
                <SettingsEditText
                    title="Last Name"
                    dialogDescription={'Enter your last name.'}
                    valuePlaceholder="..."
                    negativeButtonTitle={'Cancel'}
                    positiveButtonTitle={'Save'}
                    onSaveValue={(value) => {
                        console.log('last name:', value);
                        this.setState({
                            lastname: value
                        });
                    }}
                    value={this.state.lastname}
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
                    positiveButtonTitle={'Save'}
                    onSaveValue={value => {
                        console.log('gender:', value);
                        this.setState({
                            gender: value
                        });
                    }}
                    value={this.state.gender}
                    styleModalButtonsText={{color: colors.monza}}
                />
                <SettingsDividerLong android={false}/>
                <SettingsCategoryHeader title={'Notifications'} textStyle={(Platform.OS === 'android') ? {color: colors.monza} : null}/>
                <SettingsDividerLong android={false}/>
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
                <SettingsDividerLong android={false}/>
            </ScrollView>
        </View>
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

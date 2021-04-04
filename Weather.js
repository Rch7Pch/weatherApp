import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Сиди дома',
        subtitle: 'Вы видите что на улице?'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#0052D4', '#65C7F7', '#9CECFB'],
        title: '',
        subtitle: ''
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#0052D4', '#65C7F7', '#9CECFB'],
        title: 'Дождик!',
        subtitle: 'Не забудьте зонтик'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: '',
        subtitle: ''
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Кис',
        subtitle: 'кис-кис-кис'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: '',
        subtitle: ''
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Кис',
        subtitle: 'кыс-кыс'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: '',
        subtitle: ''
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#83a4d4', '#b6fbff'],
        title: '',
        subtitle: ''
    },
    Sand: {
        iconName: '',
        gradient: ['#83a4d4', '#b6fbff'],
        title: '',
        subtitle: ''
    },
    Ash: {
        iconName: '',
        gradient: ['#83a4d4', '#b6fbff'],
        title: '',
        subtitle: ''
    },
    Squall: {
        iconName: '',
        gradient: ['#83a4d4', '#b6fbff'],
        title: '',
        subtitle: ''
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#2c3e50', '#bdc3c7'],
        title: '',
        subtitle: ''
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: '',
        subtitle: ''
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Кис',
        subtitle: 'Кыс-кыс'
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}>
                <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze",
        "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})
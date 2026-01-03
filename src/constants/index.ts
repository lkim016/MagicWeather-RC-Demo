/**
* @file Configuration file for your app's RevenueCat settings.
* @author RevenueCat
*/

import {Platform} from 'react-native';
import {rcApiKey as key} from './env.json';
/*
The API key for your app from the RevenueCat dashboard: https://app.revenuecat.com
*/
export const API_KEY = Platform.select({
    ios: key,
    android: key,
});

/*
The entitlement ID from the RevenueCat dashboard that is activated upon successful in-app purchase for the duration of the purchase.
*/
export const ENTITLEMENT_ID = 'Weather App Pro';

import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_Ecommerce_Store_19 from "./pages/Page_Ecommerce_Store_19/Page_Ecommerce_Store_19.js";
import Page_Ecommerce_Store_20 from "./pages/Page_Ecommerce_Store_20/Page_Ecommerce_Store_20.js";
import Page_Ecommerce_Store_18 from "./pages/Page_Ecommerce_Store_18/Page_Ecommerce_Store_18.js";
import Page_Ecommerce_Store_17 from "./pages/Page_Ecommerce_Store_17/Page_Ecommerce_Store_17.js";
import Page_Ecommerce_Store_16 from "./pages/Page_Ecommerce_Store_16/Page_Ecommerce_Store_16.js";
import Page_Ecommerce_Store_15 from "./pages/Page_Ecommerce_Store_15/Page_Ecommerce_Store_15.js";
import Page_Ecommerce_Store_14 from "./pages/Page_Ecommerce_Store_14/Page_Ecommerce_Store_14.js";
import Page_Ecommerce_Store_13 from "./pages/Page_Ecommerce_Store_13/Page_Ecommerce_Store_13.js";
import Page_Ecommerce_Store_12 from "./pages/Page_Ecommerce_Store_12/Page_Ecommerce_Store_12.js";
import Page_Ecommerce_Store_11 from "./pages/Page_Ecommerce_Store_11/Page_Ecommerce_Store_11.js";
import Page_Ecommerce_Store_10 from "./pages/Page_Ecommerce_Store_10/Page_Ecommerce_Store_10.js";
import Page_Ecommerce_Store_9 from "./pages/Page_Ecommerce_Store_9/Page_Ecommerce_Store_9.js";
import Page_Ecommerce_Store_8 from "./pages/Page_Ecommerce_Store_8/Page_Ecommerce_Store_8.js";
import Page_Ecommerce_Store_7 from "./pages/Page_Ecommerce_Store_7/Page_Ecommerce_Store_7.js";
import Page_Ecommerce_Store_5 from "./pages/Page_Ecommerce_Store_5/Page_Ecommerce_Store_5.js";
import Page_Ecommerce_Store_3 from "./pages/Page_Ecommerce_Store_3/Page_Ecommerce_Store_3.js";
import Page_Ecommerce_Store_6 from "./pages/Page_Ecommerce_Store_6/Page_Ecommerce_Store_6.js";
import Page_Ecommerce_Store_2 from "./pages/Page_Ecommerce_Store_2/Page_Ecommerce_Store_2.js";
import Page_Ecommerce_Store_1 from "./pages/Page_Ecommerce_Store_1/Page_Ecommerce_Store_1.js";
const Tab = createBottomTabNavigator();
const Page_Ecommerce_Store_19StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_19 = () => {
	return (
		<Page_Ecommerce_Store_19StackNavigator.Navigator>
			<Page_Ecommerce_Store_19StackNavigator.Screen
				name = "Page_Ecommerce_Store_19"
				component = {Page_Ecommerce_Store_19}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_19StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_20StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_20 = () => {
	return (
		<Page_Ecommerce_Store_20StackNavigator.Navigator>
			<Page_Ecommerce_Store_20StackNavigator.Screen
				name = "Page_Ecommerce_Store_20"
				component = {Page_Ecommerce_Store_20}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_20StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_18StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_18 = () => {
	return (
		<Page_Ecommerce_Store_18StackNavigator.Navigator>
			<Page_Ecommerce_Store_18StackNavigator.Screen
				name = "Page_Ecommerce_Store_18"
				component = {Page_Ecommerce_Store_18}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_18StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_17StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_17 = () => {
	return (
		<Page_Ecommerce_Store_17StackNavigator.Navigator>
			<Page_Ecommerce_Store_17StackNavigator.Screen
				name = "Page_Ecommerce_Store_17"
				component = {Page_Ecommerce_Store_17}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_17StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_16StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_16 = () => {
	return (
		<Page_Ecommerce_Store_16StackNavigator.Navigator>
			<Page_Ecommerce_Store_16StackNavigator.Screen
				name = "Page_Ecommerce_Store_16"
				component = {Page_Ecommerce_Store_16}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_16StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_15StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_15 = () => {
	return (
		<Page_Ecommerce_Store_15StackNavigator.Navigator>
			<Page_Ecommerce_Store_15StackNavigator.Screen
				name = "Page_Ecommerce_Store_15"
				component = {Page_Ecommerce_Store_15}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_15StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_14StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_14 = () => {
	return (
		<Page_Ecommerce_Store_14StackNavigator.Navigator>
			<Page_Ecommerce_Store_14StackNavigator.Screen
				name = "Page_Ecommerce_Store_14"
				component = {Page_Ecommerce_Store_14}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_14StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_13StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_13 = () => {
	return (
		<Page_Ecommerce_Store_13StackNavigator.Navigator>
			<Page_Ecommerce_Store_13StackNavigator.Screen
				name = "Page_Ecommerce_Store_13"
				component = {Page_Ecommerce_Store_13}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_13StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_12StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_12 = () => {
	return (
		<Page_Ecommerce_Store_12StackNavigator.Navigator>
			<Page_Ecommerce_Store_12StackNavigator.Screen
				name = "Page_Ecommerce_Store_12"
				component = {Page_Ecommerce_Store_12}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_12StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_11StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_11 = () => {
	return (
		<Page_Ecommerce_Store_11StackNavigator.Navigator>
			<Page_Ecommerce_Store_11StackNavigator.Screen
				name = "Page_Ecommerce_Store_11"
				component = {Page_Ecommerce_Store_11}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_11StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_10StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_10 = () => {
	return (
		<Page_Ecommerce_Store_10StackNavigator.Navigator>
			<Page_Ecommerce_Store_10StackNavigator.Screen
				name = "Page_Ecommerce_Store_10"
				component = {Page_Ecommerce_Store_10}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_10StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_9StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_9 = () => {
	return (
		<Page_Ecommerce_Store_9StackNavigator.Navigator>
			<Page_Ecommerce_Store_9StackNavigator.Screen
				name = "Page_Ecommerce_Store_9"
				component = {Page_Ecommerce_Store_9}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_9StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_8StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_8 = () => {
	return (
		<Page_Ecommerce_Store_8StackNavigator.Navigator>
			<Page_Ecommerce_Store_8StackNavigator.Screen
				name = "Page_Ecommerce_Store_8"
				component = {Page_Ecommerce_Store_8}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_8StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_7StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_7 = () => {
	return (
		<Page_Ecommerce_Store_7StackNavigator.Navigator>
			<Page_Ecommerce_Store_7StackNavigator.Screen
				name = "Page_Ecommerce_Store_7"
				component = {Page_Ecommerce_Store_7}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_7StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_5StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_5 = () => {
	return (
		<Page_Ecommerce_Store_5StackNavigator.Navigator>
			<Page_Ecommerce_Store_5StackNavigator.Screen
				name = "Page_Ecommerce_Store_5"
				component = {Page_Ecommerce_Store_5}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_5StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_3StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_3 = () => {
	return (
		<Page_Ecommerce_Store_3StackNavigator.Navigator>
			<Page_Ecommerce_Store_3StackNavigator.Screen
				name = "Page_Ecommerce_Store_3"
				component = {Page_Ecommerce_Store_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_3StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_6StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_6 = () => {
	return (
		<Page_Ecommerce_Store_6StackNavigator.Navigator>
			<Page_Ecommerce_Store_6StackNavigator.Screen
				name = "Page_Ecommerce_Store_6"
				component = {Page_Ecommerce_Store_6}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_6StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_2StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_2 = () => {
	return (
		<Page_Ecommerce_Store_2StackNavigator.Navigator>
			<Page_Ecommerce_Store_2StackNavigator.Screen
				name = "Page_Ecommerce_Store_2"
				component = {Page_Ecommerce_Store_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_2StackNavigator.Navigator>
	)
};
const Page_Ecommerce_Store_1StackNavigator = createStackNavigator();
const ScreenForPage_Ecommerce_Store_1 = () => {
	return (
		<Page_Ecommerce_Store_1StackNavigator.Navigator>
			<Page_Ecommerce_Store_1StackNavigator.Screen
				name = "Page_Ecommerce_Store_1"
				component = {Page_Ecommerce_Store_1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Ecommerce_Store_1StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	const [isPage12Open, setIsPage12Open] = useState(false)
	const zIndexPage12 = useRef(2)
	const [isPage13Open, setIsPage13Open] = useState(false)
	const zIndexPage13 = useRef(2)
	const [isPage14Open, setIsPage14Open] = useState(false)
	const zIndexPage14 = useRef(2)
	const [isPage15Open, setIsPage15Open] = useState(false)
	const zIndexPage15 = useRef(2)
	const [isPage16Open, setIsPage16Open] = useState(false)
	const zIndexPage16 = useRef(2)
	const [isPage17Open, setIsPage17Open] = useState(false)
	const zIndexPage17 = useRef(2)
	const [isPage18Open, setIsPage18Open] = useState(false)
	const zIndexPage18 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Ecommerce_Store_19"
							component = {ScreenForPage_Ecommerce_Store_19}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_20"
							component = {ScreenForPage_Ecommerce_Store_20}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_18"
							component = {ScreenForPage_Ecommerce_Store_18}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_17"
							component = {ScreenForPage_Ecommerce_Store_17}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_16"
							component = {ScreenForPage_Ecommerce_Store_16}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_15"
							component = {ScreenForPage_Ecommerce_Store_15}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_14"
							component = {ScreenForPage_Ecommerce_Store_14}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_13"
							component = {ScreenForPage_Ecommerce_Store_13}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_12"
							component = {ScreenForPage_Ecommerce_Store_12}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_11"
							component = {ScreenForPage_Ecommerce_Store_11}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_10"
							component = {ScreenForPage_Ecommerce_Store_10}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_9"
							component = {ScreenForPage_Ecommerce_Store_9}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_8"
							component = {ScreenForPage_Ecommerce_Store_8}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_7"
							component = {ScreenForPage_Ecommerce_Store_7}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_5"
							component = {ScreenForPage_Ecommerce_Store_5}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_3"
							component = {ScreenForPage_Ecommerce_Store_3}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_6"
							component = {ScreenForPage_Ecommerce_Store_6}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_2"
							component = {ScreenForPage_Ecommerce_Store_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Ecommerce_Store_1"
							component = {ScreenForPage_Ecommerce_Store_1}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;


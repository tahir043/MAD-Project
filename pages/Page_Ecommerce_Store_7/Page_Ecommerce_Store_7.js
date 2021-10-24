import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_SIGN_UP_link} from './assets/imageLinks.js'
const Page_Ecommerce_Store_7  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page13}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._SIGN_UP_container}    >
					<View style = {noneModeStyles._SIGN_UP}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_SIGN_UP_link}}/>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Ecommerce_Store_7

const noneModeStyles = StyleSheet.create({
_page13: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_viewport: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_SIGN_UP_container: {
	width: 375,
	height: 812,
	position: "absolute",
	},
_SIGN_UP: {
	width: "100%",
	height: "100%",
	borderRadius: 30,
	},
})


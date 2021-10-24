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
const Page_Ecommerce_Store_6  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page16}    >
			<View style = {noneModeStyles._SIGN_UP_container}    >
				<View style = {noneModeStyles._SIGN_UP}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_SIGN_UP_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_5}    >
			</View>
			<View style = {noneModeStyles._Rectangle_6}    >
			</View>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Confirm_Password}   >
				Confirm Password
			</Text>
			<Text style = {noneModeStyles._Enter_your_password}   >
				Enter your password
			</Text>
			<Text style = {noneModeStyles._Enter_password_again}   >
				Enter password again
			</Text>
			<View style = {noneModeStyles._ri_lock_password_line}    >
				<View style = {noneModeStyles.style10}    >
					<View style = {noneModeStyles.style11}   >
						<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
							<Path fill = {"#D99BFF"}     d = "M17.5 7H19.8333C20.1428 7 20.4395 7.10536 20.6583 7.29289C20.8771 7.48043 21 7.73478 21 8V20C21 20.2652 20.8771 20.5196 20.6583 20.7071C20.4395 20.8946 20.1428 21 19.8333 21H1.16667C0.857247 21 0.560501 20.8946 0.341709 20.7071C0.122916 20.5196 0 20.2652 0 20V8C0 7.73478 0.122916 7.48043 0.341709 7.29289C0.560501 7.10536 0.857247 7 1.16667 7H3.5V6C3.5 4.4087 4.2375 2.88258 5.55025 1.75736C6.86301 0.632141 8.64349 0 10.5 0C12.3565 0 14.137 0.632141 15.4497 1.75736C16.7625 2.88258 17.5 4.4087 17.5 6V7ZM2.33333 9V19H18.6667V9H2.33333ZM9.33333 13H11.6667V15H9.33333V13ZM4.66667 13H7V15H4.66667V13ZM14 13H16.3333V15H14V13ZM15.1667 7V6C15.1667 4.93913 14.675 3.92172 13.7998 3.17157C12.9247 2.42143 11.7377 2 10.5 2C9.26232 2 8.07534 2.42143 7.20017 3.17157C6.325 3.92172 5.83333 4.93913 5.83333 6V7H15.1667Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ri_lock_password_line_2}    >
				<View style = {noneModeStyles.style13}    >
					<View style = {noneModeStyles.style14}   >
						<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
							<Path fill = {"#D99BFF"}     d = "M17.5 7H19.8333C20.1428 7 20.4395 7.10536 20.6583 7.29289C20.8771 7.48043 21 7.73478 21 8V20C21 20.2652 20.8771 20.5196 20.6583 20.7071C20.4395 20.8946 20.1428 21 19.8333 21H1.16667C0.857247 21 0.560501 20.8946 0.341709 20.7071C0.122916 20.5196 0 20.2652 0 20V8C0 7.73478 0.122916 7.48043 0.341709 7.29289C0.560501 7.10536 0.857247 7 1.16667 7H3.5V6C3.5 4.4087 4.2375 2.88258 5.55025 1.75736C6.86301 0.632141 8.64349 0 10.5 0C12.3565 0 14.137 0.632141 15.4497 1.75736C16.7625 2.88258 17.5 4.4087 17.5 6V7ZM2.33333 9V19H18.6667V9H2.33333ZM9.33333 13H11.6667V15H9.33333V13ZM4.66667 13H7V15H4.66667V13ZM14 13H16.3333V15H14V13ZM15.1667 7V6C15.1667 4.93913 14.675 3.92172 13.7998 3.17157C12.9247 2.42143 11.7377 2 10.5 2C9.26232 2 8.07534 2.42143 7.20017 3.17157C6.325 3.92172 5.83333 4.93913 5.83333 6V7H15.1667Z"/>
						</Svg>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Ecommerce_Store_6

const noneModeStyles = StyleSheet.create({
_page16: {
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
_Rectangle_5: {
	width: 341,
	height: 50,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 221},
	],
	},
_Rectangle_6: {
	width: 341,
	height: 50,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 337},
	],
	},
_Password: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 186},
	],
	color: "rgb(177, 91, 11)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Confirm_Password: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 302},
	],
	color: "rgb(177, 91, 11)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Enter_your_password: {
	width: 354,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 230},
	],
	color: "rgba(177, 91, 11, 0.5)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Enter_password_again: {
	width: 354,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 346},
	],
	color: "rgba(177, 91, 11, 0.5)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_ri_lock_password_line: {
	width: 24,
	height: 30,
	backgroundColor: "rgb(177, 91, 11)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 230},
	],
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 4},
	],
	},
style11: {
	},
_ri_lock_password_line_2: {
	width: 24,
	height: 30,
	backgroundColor: "rgb(177, 91, 11)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 346},
	],
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 4},
	],
	},
style14: {
	},
})


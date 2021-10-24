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
const Page_Ecommerce_Store_1  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page18}    >
			<Text style = {noneModeStyles._UserName}   >
				UserName
			</Text>
			<Text style = {noneModeStyles._Email}   >
				Email
			</Text>
			<View style = {noneModeStyles._layer_e9a8ad}    >
				<View style = {noneModeStyles._layer_8bc95f}   >
					<Svg style={{height: 27, width: 34}} viewBox = "0 0 34 27">
						<Path fill = {"black"}     d = "M32.1322 0H1.19008C0.531817 0 0 0.548437 0 1.22727V25.7727C0 26.4516 0.531817 27 1.19008 27H32.1322C32.7904 27 33.3223 26.4516 33.3223 25.7727V1.22727C33.3223 0.548437 32.7904 0 32.1322 0ZM29.1272 4.17656L17.3938 13.592C17.1037 13.826 16.6983 13.826 16.4082 13.592L4.67107 4.17656C4.62682 4.14135 4.59437 4.09274 4.57826 4.03755C4.56215 3.98237 4.56319 3.92336 4.58123 3.86881C4.59927 3.81426 4.63341 3.7669 4.67887 3.73337C4.72432 3.69983 4.77881 3.68181 4.8347 3.68182H28.9636C29.0195 3.68181 29.074 3.69983 29.1194 3.73337C29.1649 3.7669 29.199 3.81426 29.2171 3.86881C29.2351 3.92336 29.2361 3.98237 29.22 4.03755C29.2039 4.09274 29.1715 4.14135 29.1272 4.17656Z"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._SIGN_UP_container}    >
				<View style = {noneModeStyles._SIGN_UP}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_SIGN_UP_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._bx_bx_user}    >
			</View>
			<View style = {noneModeStyles._bx_bx_user_2}    >
			</View>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<View style = {noneModeStyles._Rectangle_2}    >
			</View>
			<View style = {noneModeStyles._bx_bx_user_3}    >
			</View>
			<View style = {noneModeStyles._bx_bx_user_4}    >
			</View>
			<Text style = {noneModeStyles._UserName_2}   >
				UserName
			</Text>
			<Text style = {noneModeStyles._Enter_your_username}   >
				Enter your username
			</Text>
			<Text style = {noneModeStyles._Enter_your_Email_address}   >
				Enter your Email address
			</Text>
			<Text style = {noneModeStyles._Password}   >
				Password
			</Text>
			<Text style = {noneModeStyles._Email_2}   >
				Email
			</Text>
			<Text style = {noneModeStyles._Enter_your_password}   >
				Enter your password
			</Text>
			<View style = {noneModeStyles.__}    >
				<View style = {noneModeStyles._layer_1a4e37}    >
					<View style = {noneModeStyles._layer_ebd933}   >
						<Svg style={{height: 33, width: 31}} viewBox = "0 0 31 33">
							<Path fill = {"black"}     d = "M15.5 -6.65707e-08C13.7969 -5.9256e-08 12.132 0.50932 10.7159 1.46355C9.29983 2.41779 8.19612 3.77407 7.54437 5.36091C6.89261 6.94774 6.72209 8.69384 7.05435 10.3784C7.38661 12.063 8.20674 13.6104 9.41102 14.8249C10.6153 16.0394 12.1497 16.8665 13.8201 17.2016C15.4904 17.5366 17.2219 17.3647 18.7953 16.7074C20.3688 16.0501 21.7137 14.937 22.6599 13.5089C23.6061 12.0808 24.1111 10.4018 24.1111 8.68421C24.1111 6.38101 23.2039 4.17215 21.589 2.54355C19.9741 0.914941 17.7838 -7.63794e-08 15.5 -6.65707e-08ZM15.5 13.8947C14.4781 13.8947 13.4792 13.5891 12.6296 13.0166C11.7799 12.4441 11.1177 11.6303 10.7266 10.6782C10.3356 9.72609 10.2332 8.67843 10.4326 7.66769C10.632 6.65694 11.124 5.72852 11.8466 4.99981C12.5692 4.27111 13.4898 3.77485 14.492 3.5738C15.4943 3.37275 16.5331 3.47594 17.4772 3.87031C18.4213 4.26468 19.2282 4.93253 19.7959 5.7894C20.3636 6.64626 20.6667 7.65367 20.6667 8.68421C20.6667 10.0661 20.1223 11.3914 19.1534 12.3686C18.1844 13.3458 16.8703 13.8947 15.5 13.8947ZM31 33L31 31.2632C31 28.0387 29.7299 24.9463 27.469 22.6662C25.2081 20.3862 22.1418 19.1053 18.9444 19.1053L12.0556 19.1053C8.85822 19.1053 5.79184 20.3862 3.53099 22.6662C1.27013 24.9463 -1.14584e-07 28.0387 -1.27761e-07 31.2632L-1.34859e-07 33L3.44444 33L3.44444 31.2632C3.44444 28.96 4.35168 26.7511 5.96658 25.1225C7.58148 23.4939 9.77174 22.5789 12.0556 22.5789L18.9444 22.5789C21.2282 22.5789 23.4185 23.4939 25.0334 25.1225C26.6483 26.7511 27.5555 28.96 27.5555 31.2632L27.5555 33L31 33Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._ri_lock_password_line}    >
				<View style = {noneModeStyles._layer_7dbaef}    >
					<View style = {noneModeStyles._layer_5ecfcd}   >
						<Svg style={{height: 21, width: 21}} viewBox = "0 0 21 21">
							<Path fill = {"#D99BFF"}     d = "M17.5 7H19.8333C20.1428 7 20.4395 7.10536 20.6583 7.29289C20.8771 7.48043 21 7.73478 21 8V20C21 20.2652 20.8771 20.5196 20.6583 20.7071C20.4395 20.8946 20.1428 21 19.8333 21H1.16667C0.857247 21 0.560501 20.8946 0.341709 20.7071C0.122916 20.5196 0 20.2652 0 20V8C0 7.73478 0.122916 7.48043 0.341709 7.29289C0.560501 7.10536 0.857247 7 1.16667 7H3.5V6C3.5 4.4087 4.2375 2.88258 5.55025 1.75736C6.86301 0.632141 8.64348 0 10.5 0C12.3565 0 14.137 0.632141 15.4497 1.75736C16.7625 2.88258 17.5 4.4087 17.5 6V7ZM2.33333 9V19H18.6667V9H2.33333ZM9.33333 13H11.6667V15H9.33333V13ZM4.66667 13H7V15H4.66667V13ZM14 13H16.3333V15H14V13ZM15.1667 7V6C15.1667 4.93913 14.675 3.92172 13.7998 3.17157C12.9247 2.42143 11.7377 2 10.5 2C9.26232 2 8.07534 2.42143 7.20017 3.17157C6.325 3.92172 5.83333 4.93913 5.83333 6V7H15.1667Z"/>
						</Svg>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Ecommerce_Store_1

const noneModeStyles = StyleSheet.create({
_page18: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgba(0, 0, 0, 0)",
	},
_UserName: {
	width: 269.607,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 14.0625},
		{translateY: 128},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Email: {
	width: 269.607,
	height: 56,
	position: "absolute",
	transform: [
		{translateX: 15.0723},
		{translateY: 262},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_layer_e9a8ad: {
	position: "absolute",
	transform: [
		{translateX: 28.1992},
		{translateY: 318},
	],
	},
_layer_8bc95f: {
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
_bx_bx_user: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 189},
	],
	},
_bx_bx_user_2: {
	width: 24,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 325},
	],
	},
_Rectangle_1: {
	width: 341,
	height: 50,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 16},
		{translateY: 171},
	],
	},
_Rectangle_2: {
	width: 341,
	height: 50,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 450},
	],
	},
_bx_bx_user_3: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 189},
	],
	},
_bx_bx_user_4: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 21},
		{translateY: 464},
	],
	},
_UserName_2: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 140},
	],
	color: "rgb(177, 91, 11)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Enter_your_username: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 72},
		{translateY: 188},
	],
	color: "rgba(177, 91, 11, 0.5)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Enter_your_Email_address: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 72},
		{translateY: 333},
	],
	color: "rgba(177, 91, 11, 0.5)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Password: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 17},
		{translateY: 415},
	],
	color: "rgb(177, 91, 11)",
	fontSize: 20,
	fontWeight: "700",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Email_2: {
	width: 267,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 288},
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
		{translateY: 459},
	],
	color: "rgba(177, 91, 11, 0.5)",
	fontSize: 22,
	fontWeight: "400",
	lineHeight: 25.7812,
	fontFamily: "Roboto",
	textAlign: "left",
	},
__: {
	width: 46.9175,
	height: 42.4409,
	backgroundColor: "rgb(177, 91, 11)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 179},
	],
	},
_layer_1a4e37: {
	position: "absolute",
	transform: [
		{translateX: 8},
		{translateY: 5},
	],
	},
_layer_ebd933: {
	},
_ri_lock_password_line: {
	width: 24,
	height: 30,
	backgroundColor: "rgb(177, 91, 11)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 23},
		{translateY: 464},
	],
	},
_layer_7dbaef: {
	position: "absolute",
	transform: [
		{translateX: 3},
		{translateY: 4},
	],
	},
_layer_5ecfcd: {
	},
})


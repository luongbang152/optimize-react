import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Divider, Text, VStack } from "@react-native-material/core";

import { useOfferIds, useOfferMap } from "./hooks";
import { useExchangeRates } from "../exchange-rates/hooks";

const OfferItem = ({ id, coin, amount, price }) => {
	console.log(new Date().toLocaleTimeString(), "Render OfferItemBad", id, coin);
	return (
		<View key={id}>
			<VStack m={4} spacing={2}>
				<Text>ID: {id}</Text>
				<Text>Coin: {coin}</Text>
				<Text>Amount: {amount}</Text>
				<Text>Price: {price}</Text>
			</VStack>
			<Divider />
		</View>
	);
};

const OfferListScreenBad = () => {
	const exchangeRates = useExchangeRates();
	const offerIds = useOfferIds();
	const offerMap = useOfferMap();

	console.log(new Date().toLocaleTimeString(), "Render OfferListScreenBad");
	return (
		<ScrollView>
			{offerIds.map((offerId) => {
				const offer = offerMap[offerId];
				const price = offer.amount * exchangeRates[offer.coin];
				return <OfferItem key={offer.id} {...offer} price={price} />;
			})}
		</ScrollView>
	);
};

export default OfferListScreenBad;

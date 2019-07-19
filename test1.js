import React from 'react';
import {StyleSheet,View} from 'react-native';

class CarreCouleur extends React.Component{
	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
				<View style={{height: 50, width: 50,backgroundColor: 'red'}}></View>
				<View style={{height: 50, width: 50,backgroundColor: 'blue'}}></View>
				<View style={{height: 50, width: 50,backgroundColor: 'orange'}}></View>
			</View>
			
		)
	}
}

export default CarreCouleur
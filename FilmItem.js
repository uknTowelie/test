
import React from 'react';
import {StyleSheet, View, Text} from 'react-native'

class FilmItem extends React.Component{
	render() {
		const film= this.props.film
		return (
			<View style={styles.main_container}>
				<View style={styles.img}></View>
				<View style={styles.infos}>
					<View style={styles.content_header}>
						<Text style={styles.title_text}>{film.title}</Text>
						<Text style={styles.title_note}>{film.vote_average}</Text>
					</View>
					<View style={styles.description}><Text numberOfLines={6}>{film.overview}</Text></View>
					<View style={styles.dateSorti}><Text style={styles.dateSorti_text}>Sorti le {film.release_date}</Text></View>
				</View>	
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	main_container: {
		flex: 2,
		flexDirection: 'row',
		height: 190
	},
	img: {
		flex: 1,
		marginRight: 5,
		marginLeft: 5,
		marginTop: 5,
		marginBottom: 5,
		backgroundColor: 'grey'
	},
	infos: {
		flex: 2,
		flexDirection: 'column',
		marginTop: 5,
		marginBottom: 5
	},
	content_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
			},
	title_text: {
		flex: 5,

		fontWeight: 'bold',
		fontSize: 16
		
	},
	title_note: {
		flex: 1,
		paddingRight: 5,
		paddingLeft: 5,
		fontWeight: 'bold',
		fontSize: 20

	},
	decription: {
		flex: 7,
		backgroundColor: 'yellow',
		paddingRight: 3

	},
	dateSorti: {
		flex: 1,
		alignItems: 'flex-end'
	},
	dateSorti_text: {
		fontStyle: 'italic',
		fontSize: 12,
		paddingRight: 5
		
	}
})

export default FilmItem
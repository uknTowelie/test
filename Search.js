import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';
import films from '../Helper/filmsDATA';
import FilmItem from './FilmItem';
import {getFilmsFromApiWithSearchedText} from '../Api/TMDApi';

class Search extends React.Component {
	_loadFilms(){
		getFilmsFromApiWithSearchedText(this.searchedText).then(data =>{
			this.setState({films : data.results})
		});
	}
	constructor(props) {
		super(props)
		this.state = {films : []}
	}
	_searchTextInputChanged(text){
		this.searchedText=text
	}
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput 
        style={styles.textinput} 
        placeholder='Titre du film'
        onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button style={styles.button} title='Rechercher' onPress={() => this._loadFilms()} />
        <FlatList 
        	data={this.state.films} 
        	keyExtractor={(item) => item.id.toString()}
        	renderItem={({item}) => <FilmItem film={item}/>}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 28
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 3,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  button: {
  	marginTop: 5,
  	marginRight: 25,
  	marginLeft: 25,
  	borderColor: '#006ED0'

  }
})

export default Search
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Images from '../Images/Images'
import { searchPhotos } from './AppApi'

class App extends React.Component {

  state = { images: [] }

 
  onSearchSubmit = async file => {
    var fileReader = new FileReader();
    fileReader.onload = function (e) {
      var textFromFileLoaded = e.target.result;
      var fileContents = file;
      alert(fileReader.result);
    }
    fileReader.readAsText(file, "UTF-8");
    alert('passei aqui 2'+file)
    //const response = await searchPhotos(text)
   
    //this.setState({ images: response.data.hits })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} />
      </div>
    )
  }
}

export default App
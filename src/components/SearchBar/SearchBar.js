import React from 'react'

class SearchBar extends React.Component {

  state = { text: '' }

  onFormSubmit = event => {
    event.preventDefault()
    alert('passei aqui 1'+this.state.file)
    this.props.onSubmit(this.state.file)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Pesquisar imagem</label>
            <input type="file" name="file"
              ref={input => {
                this.filesInput = input;
              }}
              onChange={e => this.setState({ file: e.target.files[0] })}></input>
              <button>Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
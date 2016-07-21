class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: true
    };
  }
  _flipImage(){
    this.setState({ showImage: !this.state.showImage });
  }
  render(){
    return (
      <div>
        { this.state.showImage ? <Image /> : null }
        <button onClick={ this._flipImage.bind(this) } type="button">Taters!</button>
      </div>
    )
  }
}

class Image extends React.Component {
  render(){
    return (
      <div>
        <img src="http://i.imgur.com/dvjKTRQ.gif" />
      </div>
    )
  }
}

ReactDOM.render(<ImageContainer />, document.getElementById('app-container'));

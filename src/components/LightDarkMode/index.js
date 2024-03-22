import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {light: false}

  onChangeTheme = () => {
    const {light} = this.state
    this.setState({light: !light})
  }

  render() {
    const {light} = this.state
    const onClass = light ? 'off' : 'on'
    const onText = light ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={`card ${onClass}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChangeTheme}>
            {onText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

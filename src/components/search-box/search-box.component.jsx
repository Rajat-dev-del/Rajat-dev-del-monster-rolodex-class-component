import './search-box.style.css'

import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
        className={`search-box ${this.props.classname}`}
          type="search"
          placeholder={this.props.placeholder  }
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox
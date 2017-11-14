import React from "react";

let searchIcon = "../../images/search.png";

class SearchBar extends React.Component{
    constructor(){
      super();
      this.state = {
        value: ""
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
      let value = e.target.value;
      this.setState({value});
    }
    render(){
      return(
        <div className="search-bar">
          <input className="search-input" type="text" value={this.state.value}
            onChange={this.handleChange} placeholder="Search"/>
          <img className="search-icon" src={searchIcon} />
        </div>
      );
    }
}

export default SearchBar;

// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedParty extends React.Component {
  render(){
    const decorationsWithThemedDiv = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
          className: this.props.theme
      });
    })
    return(
      <div>
      {decorationsWithThemedDiv}
      </div>
    );
  }
}

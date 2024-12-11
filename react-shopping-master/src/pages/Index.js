import React, { Component } from 'react';

import AwesomeImage from "../components/Display/AwesomeImage";
import withHoverOpacity from "../components/Display/withHoverOpacity";

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage, 0.1);

export class Index extends Component {
  render() {
    return (
      <div>
        <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
      </div>
    )
  }
}

export default Index

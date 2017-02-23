import React, { Component } from 'react';

import Page from '../Page/Page.component';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Grid' };
  }

  render() {
    return (
      <Page title={this.state.title} />
    )
  }
}
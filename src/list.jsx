import React, { Component } from "react";

export default class List extends Component {
  state = {
    tag: ["tag1", "tag2"],
  };
  tagsRender() {
    if (this.state.tag.length === 0) return <h2>Taglar yo'q.</h2>;

    return this.state.tag.map((tag) => <li key={tag.id}></li>);
  }
  render() {
    return <ul>{this.state.tag.length === 0 ? <h2>Taglar yo'q.</h2> : this.state.tag.map((tag) => <li key={tag.id}>{tag}</li>)}</ul>;
  }
}

// map bilan qaytarulgan har bir elemtda key bo'lishi kerak

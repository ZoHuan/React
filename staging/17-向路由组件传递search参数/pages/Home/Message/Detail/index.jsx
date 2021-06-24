import React, { Component } from "react";
import qs from "querystring";

const DetailData = [
  { id: "01", content: "海贼王" },
  { id: "02", content: "火影忍者" },
  { id: "03", content: "刀剑神域" },
];
export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params;

    // 接收search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));

    const findResult = DetailData.find((datailObj) => {
      return datailObj.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
      </ul>
    );
  }
}

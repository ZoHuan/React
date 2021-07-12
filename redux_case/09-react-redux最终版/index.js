import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // Provider包裹App，是让APP所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

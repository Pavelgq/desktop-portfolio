import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./styles/index.css";
import "./styles/global.css";
import { RoutesList } from "./routing/Routes";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </DndProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

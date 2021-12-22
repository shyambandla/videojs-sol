import { StrictMode, useCallback } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

function Welcome(props) {
  const middlewareAlterSrc = useCallback(async (player) => {
    const Url = new URL(player.currentSrc());
    const xf_uuid = Url.pathname.split("/").pop();
    const alterSrcObject = await api.getSource(xf_uuid);

    return {
      setSource: function (srcObj, next) {
        next(null, alterSrcObject);
      }
    };
  }, []);
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById("root"));

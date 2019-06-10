import React from "react";
import PeerContext from "./context/peerContext";

function Result() {
  const peers = React.useContext(PeerContext);
  return <code>{JSON.stringify(peers)}</code>;
}

export default Result;

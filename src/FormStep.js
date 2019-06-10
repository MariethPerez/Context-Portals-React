import React from "react";
import FormPeer from "./FormPeer";
import Result from "./Result";
import { Provider as PeerContextProvider } from "./context/peerContext";

function FormStep() {
  const [peers, setPeers] = React.useState([]);
  const [step, setStep] = React.useState(0);

  function addPeer(peer) {
    setStep(step + 1);
    setPeers([...peers, { id: peers.length, ...peer }]);
  }

  return (
    <PeerContextProvider value={peers}>
      <div className="steps">
        <h1>Student {step + 1}</h1>
        {step < 3 ? <FormPeer addPeer={addPeer} step={step} /> : <Result />}
      </div>
    </PeerContextProvider>
  );
}

export default FormStep;

import React from "react";
//import FormPeer from "./FormPeer";
//import Result from "./Result";
import { Provider as PeerContextProvider } from "./context/peerContext";
import Spinner from "./Spinner";

//this constants is for LAzzy. This is instead of //import FormPeer from "./FormPeer";
const FormPeer = React.lazy(() => import("./FormPeer"));
const Result = React.lazy(() => import("./Result"));

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
        <React.Suspense fallback={<Spinner />}>
          <h1>Student {step + 1}</h1>
          {step < 3 ? <FormPeer addPeer={addPeer} step={step} /> : <Result />}
        </React.Suspense>
      </div>
    </PeerContextProvider>
  );
}

export default FormStep;

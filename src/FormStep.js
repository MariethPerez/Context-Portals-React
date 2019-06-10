import React from 'react';
import FormPeer from './FormPeer';

function FormStep() {
  const [peers, setPeers] = React.useState([]);
  const [step, setStep] = React.useState(0);

  function addPeer(peer) {
    setStep(step + 1);
    setPeers([...peers, { id: peers.length, ...peer }]);
  }

  return (
    <div className="steps">
      <h1>Student {step + 1}</h1>
      {step < 3 ? (
        <FormPeer addPeer={addPeer} step={step} />
      ) : (
        <code>{JSON.stringify(peers)}</code>
      )}
    </div>
  );
}

export default FormStep;

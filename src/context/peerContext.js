import { createContext } from "react";

const PeerContext = createContext();

export const Provider = PeerContext.Provider;
export const Consumer = PeerContext.Consumer;

export default PeerContext;

import { createContext } from "react";

const AddPeerContext = createContext();

export const Provider = AddPeerContext.Provider;
export const Consumer = AddPeerContext.Consumer;

export default AddPeerContext;

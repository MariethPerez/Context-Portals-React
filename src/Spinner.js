/** @jsx jsx */
import { jsx } from "@emotion/core";
import { green } from "ansi-colors";

//import { FaSpinner } from "react-icons/fa";

const load = { fontSize: "80px", color: "green" };

function Spinner() {
  return <div css={load}>Loading ........</div>;
}

export default Spinner;

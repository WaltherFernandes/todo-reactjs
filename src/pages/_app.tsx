import "../../src/styles/global.css";

import React, { ReactType } from "react";
import { TodosProvider } from "../contexts/TodosContext";
interface Props {
  Component: ReactType;
  pageProps: Props;
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;

import { Graphviz } from "graphviz-react";
import React from "react";

import { useState, useEffect } from "react";

export const DelayedGraphviz = ({ timeout = 1000, ...props }) => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setTimeout(() => setShown(true), timeout);
  }, []);
  return shown ? <Graphviz {...props} /> : <p>Loading...</p>;
};

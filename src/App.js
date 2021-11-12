import React, { useState, useEffect } from "react";
import Message from "./Message";
// import Singleperson from "./Singleperson";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [value, setValue] = useState(0);
  return <Message value={value} setValue={setValue} />;
}
export default App;

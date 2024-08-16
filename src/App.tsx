import isValidProp from "@emotion/is-prop-valid";
import { BrowserRouter as Router } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <StyleSheetManager shouldForwardProp={(prop) => isValidProp(prop)}>
        {/* <AuthUserProvider> */}
        <AppRoutes />
        {/* </AuthUserProvider> */}
      </StyleSheetManager>
    </Router>
  );
};

export default App;

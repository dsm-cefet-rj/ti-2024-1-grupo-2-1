import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
}

export default App;

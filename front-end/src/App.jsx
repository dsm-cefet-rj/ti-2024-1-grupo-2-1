import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import { fetchAnimais } from "./redux/Animais/slice";
import store from "./redux/store";

store.dispatch(fetchAnimais());

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
}

export default App;

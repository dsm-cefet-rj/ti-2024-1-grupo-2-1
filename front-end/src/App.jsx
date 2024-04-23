import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import { fetchAnimais } from "./redux/Animais/slice";
import { fetchUser } from "./redux/user/slice";
import { store, persistor } from "./redux/store";

store.dispatch(fetchAnimais());
store.dispatch(fetchUser());

function App() {
  return (
    <Provider store={store} persistor={persistor}>
      <AppRouter />
    </Provider>
  );
}

export default App;

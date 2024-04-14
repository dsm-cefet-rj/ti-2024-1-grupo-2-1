import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import { fetchAnimais } from "./redux/Animais/slice";
import { fetchUsuarios, postUsuarios } from "./redux/user/slice";
import store from "./redux/store";

store.dispatch(fetchAnimais());
store.dispatch(fetchUsuarios());
store.dispatch(postUsuarios());

function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
}

export default App;

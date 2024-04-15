import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import { fetchAnimais } from "./redux/Animais/slice";
import { fetchUsuarios } from "./redux/user/slice";
import store from "./redux/store";

store.dispatch(fetchAnimais());
store.dispatch(fetchUsuarios());


function App() {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
}

export default App;

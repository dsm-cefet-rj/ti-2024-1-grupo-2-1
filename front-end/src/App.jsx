import { AppRouter } from "./routes/rotas";
import { AuthProvider } from "./contexts/auth";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </AuthProvider>
  );
}

export default App;

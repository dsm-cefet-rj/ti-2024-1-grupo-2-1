import { AppRouter } from "./routes/rotas";

import { Provider } from "react-redux";
import { fetchAnimais } from "./redux/Animais/slice";
import { fetchUser } from "./redux/user/slice";
import { store, persistor } from "./redux/store";
import { useEffect } from "react";

store.dispatch(fetchAnimais());
store.dispatch(fetchUser());

function App() {
  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    // alert('Complete Cache Cleared')
  };
  useEffect(()=>{
      clearCacheData();
  },[])
  return (
    <Provider store={store} persistor={persistor}>
      <AppRouter />
    </Provider>
  );
}

export default App;

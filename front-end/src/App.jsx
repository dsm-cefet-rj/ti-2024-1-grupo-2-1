import { AppRouter } from './routes/rotas';
import { AuthProvider } from './contexts/auth';


function App() {
  return (
    <AuthProvider>
      <AppRouter>
      </AppRouter>
    </AuthProvider>
  );
}

export default App;
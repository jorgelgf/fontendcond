import Rout from './rout';
import { AuthProvider } from './context/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Rout/>
    </AuthProvider>
  );
}
export default App;

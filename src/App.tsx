import { AppRoutes } from "./routes";
import { AppProviders } from "./providers/app";

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}

export default App;

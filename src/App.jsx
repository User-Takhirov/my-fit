import { Home } from "./Home/home";
import { MainLayout } from "./Layout/Main-Layout";

function App() {
  return (
    <>
      <div>
        <MainLayout>
          <Home />
        </MainLayout>
      </div>
    </>
  );
}

export default App;

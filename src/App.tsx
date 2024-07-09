import MainLayout from "./components/layouts/MainLayout";
import config from "./config";

function App() {
  console.log(config.serverUrl);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;

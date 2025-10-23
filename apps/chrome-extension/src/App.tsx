import "./App.css";
import ValidateConfigHOC from "./modules/hoc/validate-config.hoc";
import MainPage from "./modules/screens/main.screen";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  // return <>{apiHost ?? "setup"}test</>;
  return (
    <MantineProvider>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          padding: "1rem",
          zIndex: 1000,
          cursor: "pointer",
          color: "blue",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </div>
      <ValidateConfigHOC>
        <MainPage />
      </ValidateConfigHOC>
    </MantineProvider>
  );
}

export default App;

import { useEffect, useState, type PropsWithChildren } from "react";
import ConfigurationScreen from "../screens/configuration.screen";
import { useConfigStore } from "../../store/config.store";

export default function ValidateConfigHOC({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState(true);
  const { apiHost, setApiHost } = useConfigStore((state) => state);

  const loadConfiguration = async () => {
    const result = await chrome.storage.sync.get(["apiHost"]);
    
    if (result.apiHost) {
      setApiHost(result.apiHost);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadConfiguration();
  }, []);

  if (loading) {
    return <div>Loading configuration...</div>;
  }

  if (!apiHost) {
    return <ConfigurationScreen />;
  }

  return <>{children}</>;
}

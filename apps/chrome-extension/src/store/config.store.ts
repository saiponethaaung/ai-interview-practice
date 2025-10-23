import { create } from "zustand";

interface States {
  apiHost: string | null;
}

interface Actions {
  setApiHost: (host: string) => void;
}

export const useConfigStore = create<States & Actions>((set) => ({
  apiHost: "",
  setApiHost: async (host: string) => {
    chrome.storage.sync.set({ apiHost: host });
    set({ apiHost: host });
  },
}));

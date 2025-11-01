import { create } from "zustand";
import type { JobHelper } from "../helper/job-helper";
import type { ScrappedJob } from "../interfaces/job.interface";

interface States {
  apiHost: string | null;
  helper: JobHelper | null;
  scrappedJob: ScrappedJob | null;
  jobExists: boolean;
  savingJob: boolean;
}

interface Actions {
  setApiHost: (host: string) => void;
  setHelper: (helper: JobHelper | null) => void;
  setSavingJob: (saving: boolean) => void;
}

export const useConfigStore = create<States & Actions>((set) => ({
  apiHost: "",
  setApiHost: async (host: string) => {
    chrome.storage.sync.set({ apiHost: host });
    set({ apiHost: host });
  },
  helper: null,
  setHelper: (helper: JobHelper | null) => {
    // Reset scrappedJob and jobExists when helper changes
    set({ helper, scrappedJob: null, jobExists: false, savingJob: false });
  },
  scrappedJob: null,
  jobExists: false,
  savingJob: false,
  setSavingJob: (saving: boolean) => set({ savingJob: saving }),
}));

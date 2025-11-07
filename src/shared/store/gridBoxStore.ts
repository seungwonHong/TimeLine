import { create } from "zustand";

interface GridBoxStore {
  selectedInterests: {
    web: boolean;
    app: boolean;
    ai: boolean;
    tools: boolean;
    uiux: boolean;
    threeDMotion: boolean;
    video: boolean;
    music: boolean;
    soundDesign: boolean;
    game: boolean;
    dataAnalysis: boolean;
    blockChain: boolean;
  };

  setSelectedInterests: (
    key: keyof GridBoxStore["selectedInterests"],
    value: boolean
  ) => void;
}

const useGridBoxStore = create<GridBoxStore>((set) => ({
  selectedInterests: {
    web: false,
    app: false,
    ai: false,
    tools: false,
    uiux: false,
    threeDMotion: false,
    video: false,
    music: false,
    soundDesign: false,
    game: false,
    dataAnalysis: false,
    blockChain: false,
  },

  setSelectedInterests: (key, value) =>
    set((state) => ({
      selectedInterests: {
        ...state.selectedInterests,
        [key]: value,
      },
    })),
}));

export default useGridBoxStore;

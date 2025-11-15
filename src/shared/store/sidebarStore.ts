import { create } from "zustand";

interface SidebarStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  isClicked: string;
    setIsClicked: (isClicked: string) => void;
    
}

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: true,
  setIsOpen: (isOpen) => set({ isOpen }),
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
  isClicked: "",
  setIsClicked: (isClicked) => set({ isClicked }),
}));

export default useSidebarStore;

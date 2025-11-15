import { create } from "zustand";

interface DropDownStore {
  postFilterOpen: boolean;
  setPostFilterOpen: (isOpen: boolean) => void;
  editPostOpen: string | null;
  setEditPostOpen: (editPostOpen: string | null) => void;
  sidePanelHeaderDropDownOpen: boolean;
  setSidePanelHeaderDropDownOpen: (isOpen: boolean) => void;
  mobilePostButtonDropDownOpen: boolean;
  setMobilePostButtonDropDownOpen: (isOpen: boolean) => void;
  mobileProfileDropDownOpen: boolean;
  setMobileProfileDropDownOpen: (isOpen: boolean) => void;
  sideBarDropDownOpen: boolean;
  setSideBarDropDownOpen: (isOpen: boolean) => void;
}

const useDropDownStore = create<DropDownStore>((set) => ({
  postFilterOpen: false,
  setPostFilterOpen: (postFilterOpen) => set({ postFilterOpen }),
  editPostOpen: null,
  setEditPostOpen: (editPostOpen) => set({ editPostOpen }),
  sidePanelHeaderDropDownOpen: false,
  setSidePanelHeaderDropDownOpen: (sidePanelHeaderDropDownOpen) =>
    set({ sidePanelHeaderDropDownOpen }),
  mobilePostButtonDropDownOpen: false,
  setMobilePostButtonDropDownOpen: (mobilePostButtonDropDownOpen) =>
    set({ mobilePostButtonDropDownOpen }),
  mobileProfileDropDownOpen: false,
  setMobileProfileDropDownOpen: (mobileProfileDropDownOpen) =>
    set({ mobileProfileDropDownOpen }),
  sideBarDropDownOpen: false,
  setSideBarDropDownOpen: (sideBarDropDownOpen) => set({ sideBarDropDownOpen }),
}));

export default useDropDownStore;

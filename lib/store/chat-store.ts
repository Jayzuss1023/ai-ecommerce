import { createStore } from "zustand/vanilla";

// Types
export interface ChatState {
  isOpen: boolean;
  pendingMessage: string | null;
}

export interface ChatActions {
  openChat: () => void;
  openChatWithMessage: (message: string) => void;
  closeChat: () => void;
  toggleChat: () => void;
  clearPendingMessage: () => void;
}

export type ChatStore = ChatState & ChatActions;

// Default state
export const defaultInitState: ChatState = {
  isOpen: false,
  pendingMessage: null,
};

/**
 * Chat store factory - Creates new store instance per provider
 * Simple store for managing chat sheet visibility
 * No persistence needed - Chat should start closed on page load
 */
export const createChatStore = (initState: ChatState = defaultInitState) => {
  return createStore<ChatStore>()((set) => ({
    ...initState,
    openChat: () => set({ isOpen: true }),
    openChatWithMessage: (message: string) =>
      set({ isOpen: true, pendingMessage: message }),
    closeChat: () => set({ isOpen: false }),
    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
    clearPendingMessage: () => set({ pendingMessage: null }),
  }));
};

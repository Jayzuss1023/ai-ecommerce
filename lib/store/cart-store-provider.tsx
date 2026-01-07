"use client";

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { useStore } from "zustand";
import {
  createCartStore,
  type CartStore,
  type CartState,
  defaultInitState,
} from "./cart-store";

// Store API type
export type CartStoreApi = ReturnType<typeof createCartStore>;

// Context
const CartStoreContext = createContext<CartStoreApi | undefined>(undefined);

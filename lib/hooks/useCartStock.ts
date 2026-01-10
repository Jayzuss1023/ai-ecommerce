"use client";
import { useEffect, useState, useCallback } from "react";
import { PRODUCTS_BY_IDS_QUERY } from "../sanity/queries/products";
import type { CartItem } from "../store/cart-store";

export interface StockInfo {
  productId: string;
  currentStock: number;
  isOutOfStock: boolean;
  exceedsStock: boolean;
  availableQuantity: number;
}

export type StockMap = Map<string, StockInfo>;

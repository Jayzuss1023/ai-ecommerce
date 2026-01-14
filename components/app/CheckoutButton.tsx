"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CreditCard } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useCartItems } from "@/lib/store/cart-store-provider";
// import {createCheckoutSession} from "@/lib/actions/checkout";

interface CheckoutButtonProps {
  disabled?: boolean;
}
export function CheckoutButton({ disabled }: CheckoutButtonProps) {
  const router = useRouter();
  const items = useCartItems();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = () => {
    setError(null);

    startTransition(async () => {
      // const result = await createCheckoutSession(items);
    });
  };
}

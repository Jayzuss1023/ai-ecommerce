import { CheckCircle2, Loader2, Package, Search } from "lucide-react";
import type { ToolCallPart } from "./types";
import type { SearchProductsResult } from "@/lib/ai/types";
import type { GetMyOrdersResult } from "@/lib/ai/tools/get-my-orders";
import { getToolDisplayName } from "./utils";

// import { ProductCardWidget } from "./ProductCardWidget";
// import { OrderCardWidget } from "./OrderCardWidget";

interface ToolCallUIProps {
  toolPart: ToolCallPart;
  closeChat: () => void;
}

export function ToolCallUI({ toolPart, closeChat }: ToolCallUIProps) {
  const toolName = toolPart.toolName || toolPart.type.replace("tool-", "");
  const displayName = getToolDisplayName(toolName);

  // Check for completion
  const isComplete =
    toolPart.state === "result" ||
    toolPart.result !== undefined ||
    toolPart.output !== undefined;

  const searchQuery =
    toolName === "searchProducts" && toolPart.args?.query
      ? String(toolPart.args.query)
      : undefined;

  const orderStatus =
    toolName === "getMyOrders" && toolPart.args?.status
      ? String(toolPart.args.status)
      : undefined;

  // Get results based on tool type
  const result = toolPart.result || toolPart.output;
  const productResult = result as SearchProductsResult | undefined;
  const orderResult = result as GetMyOrdersResult | undefined;

  const hasProducts =
    toolName === "searchProducts" &&
    productResult?.found &&
    productResult.products &&
    productResult.products.length > 0;

  const hasOrders =
    toolName === "getMyOrders" &&
    orderResult?.found &&
    orderResult.orders &&
    orderResult.orders.length > 0;

  // Determine icon based on tool type
  const ToolIcon = toolName === "getMyOrders" ? Package : Search;

  return (
    <div>
      {/* Tool status indicator */}
      <div>
        <div>
          <ToolIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        </div>
      </div>
    </div>
  );
}

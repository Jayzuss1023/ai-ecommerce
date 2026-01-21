import { Package, Search, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onSuggestionClick: (message: { text: string }) => void;
  isSignedIn: boolean;
}

const productSuggestions = [
  "Show me oak tables",
  "Leather sofas under $1000",
  "What chairs do you have?",
];

const orderSuggestions = [
  "Where's my order?",
  "Show me my recent orders",
  "Has my order shipped?",
];

export function WelcomeScreen({
  onSuggestionClick,
  isSignedIn,
}: WelcomeScreenProps) {
  return (
    <div>
      <div>
        <Sparkles className="h-8 w-8 text-amber-500" />
        <h3>How can I help you today?</h3>
        <p>
          {isSignedIn
            ? "I can help you find furniture, check your orders, and track deliveries."
            : "I can help you find furniture by style, material, color, or price. Just ask!"}
        </p>

        {/* Product Suggestions */}
        <div>
          <div>
            <Search />
            Find products
          </div>
          <div>
            {productSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => onSuggestionClick({ text: suggestion })}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 hover:border-amber-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:border-amber-600"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Order suggestions - Only for signed in users */}
        {isSignedIn && (
          <div>
            <div>
              <Package className="w-3 h-3" />
              Your orders
            </div>
            <div>
              {orderSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => onSuggestionClick({ text: suggestion })}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm text-amber-700 transition-colors hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300 dark:hover:bg-amber-900/40"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

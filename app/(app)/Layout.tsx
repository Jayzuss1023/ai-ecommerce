import { ClerkProvider } from "@clerk/nextjs";
import { CartStoreProvider } from "@/lib/store/cart-store-provider";
import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "sonner";
import { Header } from "@/components/app/Header";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="bottom-center" />
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
  );
}

export default Layout;

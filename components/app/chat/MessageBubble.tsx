import { Bot, User } from "lucide-react";
import { MessageContent } from "./MessageContent";

interface MessageBubbleProps {
  role: string;
  content: string;
  closeChat: () => void;
}

export function MessageBubble({
  role,
  content,
  closeChat,
}: MessageBubbleProps) {
  const isUser = role === "user";

  return (
    <div>
      {/* Avatar */}
      <div>
        {isUser ? (
          <User className="h-4 w-4 text-white dark:text-zinc-900" />
        ) : (
          <Bot className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        )}
      </div>

      {/* Message Content */}
      <div>
        <MessageContent
          content={content}
          closeChat={closeChat}
          isUser={isUser}
        />
      </div>
    </div>
  );
}

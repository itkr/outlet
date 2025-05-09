"use client";

import { FC, useState } from "react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CircleHelp,
  CornerDownLeft,
  Mic,
  Paperclip,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

const metadata = {
  title: "Top",
  description: "Top page",
};

type Message = {
  id: number;
  message: string;
  sender: "user" | "bot";
  isLoading?: boolean;
};

const firstBotMessage: Message = {
  id: 1,
  message: "Hello, how has your day been? I hope you are doing well.",
  sender: "bot",
};

const actionIcons = [
  {
    icon: () => <ThumbsUp className="size-4" />,
    type: "like",
  },
  {
    icon: () => <ThumbsDown className="size-4" />,
    type: "dislike",
  },
  {
    icon: () => <CircleHelp className="size-4" />,
    type: "question",
  },
];

const Page: FC = () => {
  const [composing, setIsComposing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([firstBotMessage]);
  const [loadingBotMessage, setLoadingBotMessage] = useState(false);

  const onSendMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      message,
      sender: "user",
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate loading bot message
    setLoadingBotMessage(true);
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        message: "This is a response from the bot.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoadingBotMessage(false);
    }, 2000);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get("message") as string;
    if (message.trim() === "") return;
    onSendMessage(message);
    form.reset();
  };

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/top">Top</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold">Top Page</h1>
      <p>This is the top page.</p>
      <div>
        <ScrollArea className="h-[400px] w-full rounded-lg border bg-background">
          <ChatMessageList>
            {messages.map((message, index) => {
              const variant = message.sender === "user" ? "sent" : "received";
              return (
                <ChatBubble key={message.id} variant={variant}>
                  <ChatBubbleAvatar
                    fallback={variant === "sent" ? "US" : "AI"}
                  />
                  <ChatBubbleMessage isLoading={message.isLoading}>
                    {message.message}
                  </ChatBubbleMessage>
                  {/* Action Icons */}
                  <ChatBubbleActionWrapper>
                    {actionIcons.map(({ icon: Icon, type }) => (
                      <ChatBubbleAction
                        className="size-7"
                        key={type}
                        icon={<Icon />}
                        onClick={() =>
                          console.log(
                            "Action " + type + " clicked for message " + index,
                          )
                        }
                      />
                    ))}
                  </ChatBubbleActionWrapper>
                </ChatBubble>
              );
            })}
            {loadingBotMessage && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar fallback="AI" />
                <ChatBubbleMessage isLoading={true}>
                  This is a loading message from the bot.
                </ChatBubbleMessage>
              </ChatBubble>
            )}
          </ChatMessageList>
        </ScrollArea>
      </div>
      <div>
        <form
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
          onSubmit={onSubmit}
        >
          <ChatInput
            placeholder="Type your message here..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
            name="message"
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              if (e.shiftKey) return;
              if (composing) return;
              e.preventDefault();
              const form = e.currentTarget.form as HTMLFormElement;
              const formData = new FormData(form);
              const message = formData.get("message") as string;
              if (message.trim() === "") return;
              onSendMessage(message);
              form.reset();
            }}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>
            <Button size="sm" className="ml-auto gap-1.5" type="submit">
              Send Message
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

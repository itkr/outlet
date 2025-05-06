"use client";

import { FC } from 'react';
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from '@/components/ui/chat/chat-bubble';
import { ChatMessageList } from '@/components/ui/chat/chat-message-list';
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from '@/components/ui/button';

const metadata = {
  title: 'Top',
  description: 'Top page',
};

const messages = [
  {
    id: 1,
    message: 'Hello, how has your day been? I hope you are doing well.',
    sender: 'user',
  },
  {
    id: 2,
    message: 'Hi, I am doing well, thank you for asking. How can I help you today?',
    sender: 'bot',
  },
  {
    id: 3,
    message: '',
    sender: 'bot',
    isLoading: true,
  },
];

const actionIcons = [
  {
    icon: () => <span>👍</span>,
    type: 'like',
  },
  {
    icon: () => <span>👎</span>,
    type: 'dislike',
  },
  {
    icon: () => <span>❓</span>,
    type: 'question',
  },
];

const Page: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Top Page</h1>
      <p>This is the top page.</p>
      <div>

        <ChatMessageList>
          {messages.map((message, index) => {
            const variant = message.sender === 'user' ? 'sent' : 'received';
            return (
              <ChatBubble key={message.id} variant={variant}>
                <ChatBubbleAvatar fallback={variant === 'sent' ? 'US' : 'AI'} />
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
                      // icon={<Icon className="size-4" />}
                      onClick={() => console.log('Action ' + type + ' clicked for message ' + index)}
                    />
                  ))}
                </ChatBubbleActionWrapper>
              </ChatBubble>
            )
          })}
        </ChatMessageList>
      </div>
      <div>
        <form
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            placeholder="Type your message here..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
              {/* <Paperclip className="size-4" /> */}
              <span className="sr-only">Attach file</span>
            </Button>

            <Button variant="ghost" size="icon">
              {/* <Mic className="size-4" /> */}
              <span className="sr-only">Use Microphone</span>
            </Button>

            <Button
              size="sm"
              className="ml-auto gap-1.5"
            >
              Send Message
              {/* <CornerDownLeft className="size-3.5" /> */}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;

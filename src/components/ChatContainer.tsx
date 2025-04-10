import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: string;
  content: string;
  role: 'assistant' | 'user';
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      role: 'assistant',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
      const botResponses = [
        "I understand your question. Let me think about that...",
        "That's an interesting point! Here's what I think...",
        "I'd be happy to help with that. Here's what you need to know...",
        "Great question! The answer is actually quite fascinating...",
        "I've processed your request and here's what I found...",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: uuidv4(),
        content: randomResponse,
        role: 'assistant',
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm your AI assistant. How can I help you today?",
        role: 'assistant',
      },
    ]);
  };

  return (
    <div className="flex flex-col h-full rounded-lg border shadow-sm overflow-hidden">
      <ChatHeader onReset={handleReset} />
      <div className="flex-1 overflow-y-auto p-4 space-y-4 messages-container">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 animate-pulse">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatContainer;

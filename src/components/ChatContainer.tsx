
import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  role: 'assistant' | 'user';
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant powered by Hugging Face. How can I help you today?",
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

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // In a production environment, this would be an API call to your backend
      // which would then call Hugging Face API with proper authentication
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get response from the chatbot');
      }
      
      const data = await response.json();
      
      const botMessage: Message = {
        id: uuidv4(),
        content: data.message || "I'm having trouble processing that right now. Please try again later.",
        role: 'assistant',
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error communicating with the API:', error);
      toast({
        title: "Communication Error",
        description: "Failed to connect to the chatbot service. Please try again.",
        variant: "destructive"
      });
      
      // Fallback response in case of errors
      const errorMessage: Message = {
        id: uuidv4(),
        content: "I'm sorry, I couldn't process your request due to a connection error. Please try again later.",
        role: 'assistant',
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm your AI assistant powered by Hugging Face. How can I help you today?",
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

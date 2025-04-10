
import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onReset: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onReset }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-chatbot-primary text-white">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Friendly Bot</h2>
          <p className="text-xs text-muted-foreground">Powered by Hugging Face</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onReset}
        title="New Chat"
      >
        <RotateCcw className="h-4 w-4" />
        <span className="sr-only">New Chat</span>
      </Button>
    </div>
  );
};

export default ChatHeader;

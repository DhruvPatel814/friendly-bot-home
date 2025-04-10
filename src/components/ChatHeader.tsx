
import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface ChatHeaderProps {
  onReset: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onReset }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <h2 className="text-lg font-semibold">AI Assistant</h2>
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

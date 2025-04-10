
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Lightbulb, Zap } from 'lucide-react';

interface HeroProps {
  onStartChat: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartChat }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-8 py-12 px-4 md:py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-chatbot-dark to-chatbot-primary">
          Chat with our AI Assistant
        </span>
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-3xl">
        Get instant answers, creative ideas, and helpful guidance through our intelligent chatbot interface.
      </p>
      
      <Button 
        onClick={onStartChat} 
        size="lg" 
        className="mt-6 group"
      >
        Start Chatting
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl">
        <FeatureCard 
          icon={<MessageSquare className="h-10 w-10 text-chatbot-primary" />}
          title="Instant Responses"
          description="Get immediate answers to your questions without waiting."
        />
        <FeatureCard 
          icon={<Lightbulb className="h-10 w-10 text-chatbot-primary" />}
          title="Smart Assistance"
          description="Powered by advanced AI to provide helpful, accurate information."
        />
        <FeatureCard 
          icon={<Zap className="h-10 w-10 text-chatbot-primary" />}
          title="Always Available"
          description="Access help anytime, 24/7, whenever you need support."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg border bg-card">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default Hero;

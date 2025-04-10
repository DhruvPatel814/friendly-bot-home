
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import ChatContainer from '@/components/ChatContainer';

const Index: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const handleStartChat = () => {
    setShowChat(true);
    
    // Scroll to chat container
    setTimeout(() => {
      document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-chatbot-dark to-chatbot-primary flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-xl font-bold">ChatBot</span>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><a href="#" className="text-sm font-medium hover:text-primary">Home</a></li>
              <li><a href="#features" className="text-sm font-medium hover:text-primary">Features</a></li>
              <li><a href="#chat-section" className="text-sm font-medium hover:text-primary">Chat</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container">
          <Hero onStartChat={handleStartChat} />
        </section>

        <section 
          id="chat-section" 
          className={`container py-12 ${showChat ? 'block' : 'hidden'}`}
        >
          <div className="max-w-4xl mx-auto chat-container">
            <ChatContainer />
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 ChatBot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

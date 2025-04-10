
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <span className="text-xl font-bold">Friendly Bot</span>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li><Link to="/" className="text-sm font-medium text-primary">Home</Link></li>
              <li><a href="#features" className="text-sm font-medium hover:text-primary">Features</a></li>
              <li><a href="#chat-section" className="text-sm font-medium hover:text-primary">Chat</a></li>
              <li><Link to="/about" className="text-sm font-medium hover:text-primary">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container">
          <Hero onStartChat={handleStartChat} />
        </section>

        <section id="features" className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Friendly Bot?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Powered by AI</h3>
                <p className="text-muted-foreground">
                  Leveraging the latest in natural language processing with Hugging Face AI models for intelligent, 
                  contextual conversations.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Secure by Design</h3>
                <p className="text-muted-foreground">
                  Built with security in mind. All API communication happens through a secure backend, 
                  keeping your credentials safe.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Modern Interface</h3>
                <p className="text-muted-foreground">
                  Clean, responsive design that works seamlessly across desktop and mobile devices for 
                  the best user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          id="chat-section" 
          className={`container py-12 ${showChat ? 'block' : 'hidden'}`}
        >
          <div className="max-w-4xl mx-auto chat-container">
            <ChatContainer />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">What People Say</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our users think about Friendly Bot.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg border">
                <p className="italic mb-4">
                  "Friendly Bot has been incredibly helpful in answering my questions. The responses are quick and accurate!"
                </p>
                <div className="font-medium">Sarah K. - Product Designer</div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <p className="italic mb-4">
                  "I've tried many chatbots, but this one stands out with its natural conversation flow and helpful insights."
                </p>
                <div className="font-medium">Michael T. - Web Developer</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Friendly Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

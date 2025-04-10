
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Shield, Server, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
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
              <li><Link to="/" className="text-sm font-medium hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm font-medium text-primary">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-8">About Friendly Bot</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-4">
              Friendly Bot is an AI-powered chatbot that leverages the Hugging Face Inference API to provide intelligent 
              conversations. Our project demonstrates how modern web applications can integrate with AI services 
              while maintaining security and performance.
            </p>
            <p className="text-muted-foreground">
              This project was built with React, TypeScript, and Tailwind CSS on the frontend, with a secure 
              backend that handles the API communication with Hugging Face.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-chatbot-primary mr-3" />
                  <h3 className="text-xl font-medium">Frontend</h3>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>React with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>React Router for navigation</li>
                  <li>ShadCN UI components</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Server className="h-6 w-6 text-chatbot-primary mr-3" />
                  <h3 className="text-xl font-medium">Backend</h3>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Express.js (example implementation)</li>
                  <li>Serverless functions (alternative)</li>
                  <li>Hugging Face API integration</li>
                  <li>Environment-based configuration</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="border rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-chatbot-primary mr-3" />
                <h3 className="text-xl font-medium">Security Model</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our application follows security best practices by never exposing API keys on the frontend. 
                Instead, the frontend communicates with our backend, which securely stores the Hugging Face 
                API key as an environment variable.
              </p>
              <p className="text-muted-foreground">
                This approach keeps your sensitive credentials secure while allowing the application to 
                utilize the powerful AI capabilities of the Hugging Face API.
              </p>
            </div>
            
            <div className="border rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-chatbot-primary mr-3" />
                <h3 className="text-xl font-medium">API Flow</h3>
              </div>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>User sends a message from the chat interface</li>
                <li>Frontend sends the message to our secure backend API</li>
                <li>Backend authenticates and forwards the request to Hugging Face</li>
                <li>Hugging Face processes the message and returns a response</li>
                <li>Backend forwards the response back to the frontend</li>
                <li>Chat interface displays the response to the user</li>
              </ol>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Deployment Instructions</h2>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Setting up on Vercel</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Clone the repository to your local machine</li>
                <li>Install dependencies with <code className="bg-background px-1 rounded">npm install</code></li>
                <li>Create a <code className="bg-background px-1 rounded">.env</code> file for local development</li>
                <li>Add your Hugging Face API key as <code className="bg-background px-1 rounded">HUGGING_FACE_API_KEY=your_key_here</code></li>
                <li>Link your repository to Vercel</li>
                <li>In Vercel project settings, add the environment variable</li>
                <li>Deploy your project</li>
              </ol>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Friendly Bot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

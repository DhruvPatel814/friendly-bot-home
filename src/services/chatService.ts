
// This is a service to interact with the backend API for chatbot functionality
// In a real implementation, you would call your secure backend endpoint

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '/api';

export interface ChatResponse {
  message: string;
  success: boolean;
}

export async function sendMessage(message: string): Promise<ChatResponse> {
  try {
    // In a production environment, your backend would handle the API key securely
    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error in chat service:', error);
    throw error;
  }
}

// This function would be used to initialize the chatbot or verify API availability
export async function checkAPIStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${BACKEND_URL}/status`);
    return response.ok;
  } catch (error) {
    console.error('API status check failed:', error);
    return false;
  }
}

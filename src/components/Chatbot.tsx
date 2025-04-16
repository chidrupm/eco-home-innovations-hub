
import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: "Hi there! I'm Alex's AI assistant. Feel free to ask me about Alex's projects, skills, or background!",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (would connect to actual AI API in production)
    setTimeout(() => {
      const botResponses: {[key: string]: string} = {
        project: "Alex has worked on several impressive projects, including a real-time collaborative code editor, a machine learning-based recommendation system, and an IoT home automation platform. Check out the Projects section for more details!",
        skill: "Alex's skills include full-stack development with React and Node.js, mobile app development, machine learning with TensorFlow and PyTorch, and cloud services like AWS and Google Cloud.",
        education: "Alex is currently studying Computer Science at MIT, with a focus on Artificial Intelligence and Machine Learning. Expected graduation is in 2024.",
        experience: "Alex has interned at Google, working on their machine learning infrastructure, and at a startup called TechNova, where they built a scalable backend system.",
        contact: "You can reach Alex via email at alex@portfolio.com or through the contact form on this website.",
        default: "I'm Alex's portfolio assistant. I can tell you about Alex's projects, skills, education, experience, or how to get in touch. What would you like to know?"
      };
      
      // Simple keyword matching (would use more sophisticated NLP in production)
      let responseText = botResponses.default;
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (input.toLowerCase().includes(keyword)) {
          responseText = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat} 
        className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-ina-gold hover:bg-ina-gold2'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
          {/* Chat header */}
          <div className="bg-ina-gold text-white p-4">
            <h3 className="font-medium">Chat with Alex's AI Assistant</h3>
          </div>

          {/* Messages container */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg p-3 ${
                    msg.sender === 'user' 
                      ? 'bg-ina-gold text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3 flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSend} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-ina-gold"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-ina-gold hover:bg-ina-gold2 text-white rounded-l-none py-2 px-4"
              disabled={isLoading}
            >
              <Send size={20} />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

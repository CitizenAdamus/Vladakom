import React, { useState, useRef, useEffect } from 'react';
import type { Chat } from '@google/genai';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatRef.current && !isError) {
      const initializeChat = async () => {
        setIsLoading(true);
        let apiKey: string | undefined;
        try {
          // This ensures 'process' is not referenced in environments where it doesn't exist.
          apiKey = process.env.API_KEY;
        } catch (e) {
          apiKey = undefined;
        }

        if (!apiKey) {
          console.error("Gemini API key is not configured.");
          setMessages([{ sender: 'ai', text: "Izvinite, AI asistent nije pravilno konfigurisan. Nedostaje API ključ." }]);
          setIsError(true);
          setIsLoading(false);
          return;
        }

        try {
          const { GoogleGenAI } = await import('@google/genai');
          const ai = new GoogleGenAI({ apiKey });
          chatRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: 'Vi ste prijateljski i koristan asistent za Vladakom Leskovac, veleprodajnu kompaniju voća i povrća. Odgovarajte na pitanja o kompaniji, njenim uslugama, timu i proizvodima na osnovu konteksta veb stranice. Neka vaši odgovori budu sažeti i profesionalni, i komunicirajte na srpskom jeziku.',
            },
          });
          setMessages([{ sender: 'ai', text: 'Zdravo! Kako vam mogu pomoći danas?' }]);
        } catch (error) {
          console.error("Error initializing Gemini:", error);
          setMessages([{ sender: 'ai', text: 'Izvinite, trenutno ne mogu da se povežem.' }]);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      initializeChat();
    }
  }, [isOpen, isError]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading || !chatRef.current || isError) return;

    const userMessage: Message = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userInput });
      const aiMessage: Message = { sender: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      const errorMessage: Message = { sender: 'ai', text: 'Izvinite, došlo je do greške. Molimo pokušajte ponovo.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 z-50"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-gray-800 rounded-lg shadow-2xl flex flex-col transition-transform transform origin-bottom-right z-50" role="dialog" aria-modal="true">
          <header className="flex items-center justify-between p-4 bg-gray-900 rounded-t-lg">
            <h2 className="text-lg font-bold text-white">Vladakom Asistent</h2>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white" aria-label="Zatvori ćaskanje">
              <CloseIcon />
            </button>
          </header>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-[85%] break-words ${msg.sender === 'user' ? 'bg-pink-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                  </div>
                </div>
              ))}
              {isLoading && !chatRef.current && (
                 <div className="flex justify-start">
                   <div className="p-3 rounded-lg bg-gray-700 text-gray-200">
                      <p className="text-sm text-gray-400">Inicijalizacija asistenta...</p>
                   </div>
                 </div>
              )}
              {isLoading && chatRef.current && (
                 <div className="flex justify-start">
                   <div className="p-3 rounded-lg bg-gray-700 text-gray-200">
                      <div className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
                          <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                      </div>
                   </div>
                 </div>
              )}
               <div ref={messagesEndRef} />
            </div>
          </div>

          <footer className="p-4 bg-gray-900 rounded-b-lg border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isError ? "Asistent nije dostupan" : "Napišite poruku..."}
                className="flex-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
                disabled={isLoading || isError}
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 disabled:bg-pink-700 disabled:cursor-not-allowed transition-colors"
                disabled={isLoading || !userInput.trim() || isError}
              >
                Pošalji
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Chatbot;
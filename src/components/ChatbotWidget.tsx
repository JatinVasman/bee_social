import React, { useState } from 'react';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: "👋 Hi! I'm BeeBot. Looking to double your ROI or scale paid ads? Type your query!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let reply = `Thanks for reaching out regarding "${userText}". Would you like to book a 1-on-1 strategy call with our growth team?`;
      if (/price|cost|plan/i.test(userText)) {
        reply = 'We offer customized plans tailored to your brand goals and requirements. Would you like to book a quick consultation with our team?';
      } else if (/seo|google|rank/i.test(userText)) {
        reply = 'Our SEO Hub covers Technical, On-Page, Schema & AI Search (GEO). We guarantee rank growth within 90 days!';
      }
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 700);
  };

  return (
    <>
      <button className="floating-chatbot-btn" onClick={() => setIsOpen(!isOpen)} title="Chat with BeeBot">
        💬
      </button>

      {isOpen && (
        <div style={{ position: 'fixed', bottom: '5.5rem', right: '2rem', width: '340px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '20px', boxShadow: 'var(--shadow-lg)', zIndex: 1500, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: 'var(--secondary)', color: '#FFF', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.25rem' }}>🤖</span>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>BeeBot AI Assistant</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--green-accent)' }}>● Online</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: '#FFF', fontSize: '1.2rem' }}>×</button>
          </div>

          <div style={{ height: '260px', padding: '1rem', overflowY: 'auto', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--bg-subtle)' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: m.sender === 'user' ? 'var(--primary)' : 'var(--bg-card)',
                  color: m.sender === 'user' ? '#FFF' : 'var(--text-main)',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '12px',
                  border: m.sender === 'bot' ? '1px solid var(--border-color)' : 'none',
                  maxWidth: '85%'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', background: 'var(--bg-card)' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              style={{ flexGrow: 1, border: 'none', outline: 'none', fontSize: '0.85rem' }}
            />
            <button onClick={handleSend} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

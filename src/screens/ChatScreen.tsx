import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { BackButton } from '../components/ui/BackButton';

interface Message {
  text: string;
  outgoing: boolean;
  time: string;
}

export function ChatScreen() {
  const { showToast } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I saw you're interested in Lot #402. Happy to answer any questions about feeding and processing schedule.", outgoing: false, time: '2:31 PM' },
    { text: "That looks great! What's the earliest processing date available?", outgoing: true, time: '2:34 PM' },
    { text: 'We have an opening at Bemidji Meat Processing on May 2nd. The animal will be ready for pickup by May 8th.', outgoing: false, time: '2:36 PM' },
    { text: "Perfect, I'll go ahead and place the reservation.", outgoing: true, time: '2:38 PM' },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const sendMsg = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages(prev => [...prev, { text, outgoing: true, time: 'Just now' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for your message! I'll get back to you shortly.", outgoing: false, time: 'Just now' }]);
    }, 1200);
  };

  return (
    <div className="screen" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: 0 }}>
      <div className="top-header">
        <BackButton />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>Jake Morrison</div>
          <div style={{ fontSize: 11, color: 'var(--accent)' }}>● Online</div>
        </div>
        <button className="icon-btn" onClick={() => showToast('Calling...')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.7 2 2 0 011.98-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
        </button>
      </div>

      <div ref={chatRef} style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 80 }}>
        <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--gray-light)', margin: '8px 0' }}>Today, 2:30 PM</div>
        {messages.map((msg, i) => (
          <div key={i}>
            <div className={msg.outgoing ? 'chat-msg-out' : 'chat-msg-in'}>{msg.text}</div>
            <div style={{ textAlign: msg.outgoing ? 'right' : 'left', fontSize: 10, color: 'var(--gray-light)' }}>{msg.time}{msg.outgoing ? ' ✓✓' : ''}</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: '50%', right: 0, background: 'white', borderTop: '1px solid var(--neutral-dark)', padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center', maxWidth: 480, margin: '0 auto', transform: 'translateX(-50%)', width: '100%' }}>
        <input
          type="text"
          placeholder="Message..."
          className="form-input"
          style={{ flex: 1, padding: '10px 16px' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMsg()}
        />
        <button onClick={sendMsg} style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--primary)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
        </button>
      </div>
    </div>
  );
}

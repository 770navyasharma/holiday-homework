import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import thinkingKidImage from '../assets/thinking_kid.png';

export default function Reflection() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="text-center text-primary mb-8">Reflection</h1>
      
      <div className="glass-card mb-8">
        <div className="text-center mb-8">
          <img 
            src={thinkingKidImage} 
            alt="Kid Thinking" 
            className="img-fluid" 
            style={{ maxWidth: '300px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
          />
        </div>

        <div className="space-y-6" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 className="text-secondary mb-2">🤔 What Surprised You?</h3>
            <p style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              I was surprised to learn that while the British built things like railways, it was mostly to help them take resources away from India faster, rather than just to help the local people. It showed me that "development" can have hidden reasons.
            </p>
          </div>

          <div>
            <h3 className="text-primary mb-2">📚 What Did You Learn?</h3>
            <p style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              I learned about the balance between development and exploitation. I also learned that as a future policy maker, every rule we make should be fair to everyone and protect our environment.
            </p>
          </div>

          <div>
            <h3 className="text-accent mb-2" style={{ color: '#E5A900' }}>🌍 What Change Would You Like to See in Real Life?</h3>
            <p style={{ background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              I would like to see more schools teaching kids how to actively save resources, just like my "Rainwater Rule" idea! I want everyone to understand that our actions today decide what kind of world we will live in tomorrow. 
              <br/><br/>
              <strong>"Your ideas today can change tomorrow! ❤️"</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/" className="btn btn-primary">
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
}

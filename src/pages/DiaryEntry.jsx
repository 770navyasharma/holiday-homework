import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import diaryImage from '../assets/diary_page.png';

export default function DiaryEntry() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="text-center text-primary mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>A Weaver's Diary</h1>
      
      <div className="glass-card mb-8" style={{ position: 'relative', marginTop: '3rem', padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: '#FFF9E6', backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)', lineHeight: '32px' }}>
        <img 
          src={diaryImage} 
          alt="Vintage Diary" 
          style={{ width: 'clamp(100px, 20vw, 150px)', position: 'absolute', top: 'clamp(-40px, -10vw, -50px)', right: 'clamp(-10px, -5vw, -20px)', transform: 'rotate(15deg)' }} 
        />
        
        <h3 style={{ fontFamily: 'cursive', marginBottom: '1rem', color: '#555' }}>20th August 1885, Dhaka</h3>
        
        <div style={{ fontFamily: 'cursive', fontSize: '1.2rem', color: '#444' }}>
          <p>Dear Diary,</p>
          <br/>
          <p>Today the British cloth seller came again. He brought machine-made cloth from Manchester. It is cheaper than my handwoven sarees.</p>
          <br/>
          <p>My father’s charkha spins slowly. But people now buy British cloth. Our looms are silent.</p>
          <br/>
          <p>The British built a railway to our village last year. They say it is "development". But the train only takes our cotton to Calcutta port, and brings back British cloth.</p>
          <br/>
          <p>We are losing our work, our skill, our pride. Is this development? Or is this the slow death of our craft?</p>
          <br/>
          <p>- Rahim Chacha, Weaver</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/colonial-exploitation" className="btn btn-secondary">
          <ArrowLeft size={20} /> Back to Exploitation
        </Link>
        <Link to="/if-i-were-in-charge" className="btn btn-primary">
          Next: If I Were In Charge <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import diaryImage from '../assets/diary_page.png';

export default function DiaryEntry() {
  return (
    <div className="container animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="text-center text-primary mb-8">My Diary Entry</h1>
      
      <div className="glass-card mb-8" style={{ position: 'relative', padding: '3rem', backgroundColor: '#FFF9E6', backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e5e5 31px, #e5e5e5 32px)', lineHeight: '32px' }}>
        <img 
          src={diaryImage} 
          alt="Vintage Diary" 
          style={{ width: '150px', position: 'absolute', top: '-50px', right: '-20px', transform: 'rotate(15deg)' }} 
        />
        
        <h3 style={{ fontFamily: 'cursive', marginBottom: '1rem', color: '#555' }}>March 12, 1890</h3>
        
        <div style={{ fontFamily: 'cursive', fontSize: '1.2rem', color: '#444' }}>
          <p>Dear Diary,</p>
          <br/>
          <p>Today I saw something amazing, yet sad. A massive iron snake, breathing fire and smoke, roared through our village! They call it a "train." People say it will connect distant lands, and I must admit, it looked quite magical.</p>
          <br/>
          <p>But my father was quiet at dinner. The British officers took away a large part of our harvest again for "taxes." Even though the rains were poor this year, they showed no mercy. The new cloth from their factories is so cheap that Uncle Ramu had to close his weaving shop.</p>
          <br/>
          <p>I wonder what the future holds for us. Will these new machines bring us prosperity, or will they only take away the little we have left?</p>
          <br/>
          <p>Yours truly,</p>
          <p>Ravi</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/if-i-were-in-charge" className="btn btn-primary">
          Next: If I Were In Charge <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

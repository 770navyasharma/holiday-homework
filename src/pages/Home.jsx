import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import coverImage from '../assets/cover_student.png';

export default function Home() {
  return (
    <div className="container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 0' }}>
      <h1 className="text-primary mb-4" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}>Welcome to My Holiday Homework!</h1>
      <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Hi! I'm excited to share my Social Studies project with you. 
        We'll explore Colonial Rule in India and think about how to build a better future together.
      </p>
      
      <div className="glass-card mb-8" style={{ padding: '0', overflow: 'hidden', maxWidth: '500px', width: '100%' }}>
        <img src={coverImage} alt="Cheerful Indian Student" className="img-fluid" style={{ display: 'block', width: '100%', borderRadius: 'var(--radius-lg)' }} />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/colonial-development" className="btn btn-primary">
          Start Exploring <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import trainImage from '../assets/train_development.png';
import postOfficeImage from '../assets/dev_post.png';
import schoolImage from '../assets/dev_school.png';

export default function ColonialDevelopment() {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center text-primary mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Colonial Rule in India</h1>
      <h2 className="text-center text-secondary mb-8">Development or Exploitation?</h2>
      
      <div className="glass-card mb-8">
        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.6)', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>
            From 1757 to 1947, India was under British colonial rule. The British said they "developed" India by building railways, schools, and telegraphs. But many Indians say Britain "exploited" India by taking away wealth, land, and freedom. Let’s look at both sides.
          </p>
        </div>

        <h3 className="text-secondary mb-6 text-center">What British called “Development”</h3>

        <div className="grid grid-cols-3 gap-8">
          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h4 className="text-secondary mb-2 text-center">Railways & Roads 🚂</h4>
            <img src={trainImage} alt="Vintage Train" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center text-sm"><strong>41,000 km railways by 1947.</strong> Made travel and trade faster. <br/><br/><em>Caption: “Railways helped travel, but also carried raw materials to ports for Britain”</em></p>
          </div>

          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h4 className="text-secondary mb-2 text-center">Telegraph & Post ✉️</h4>
            <img src={postOfficeImage} alt="Post Office" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center text-sm">Messages sent quickly across India.</p>
          </div>

          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h4 className="text-secondary mb-2 text-center">Schools & Colleges 📚</h4>
            <img src={schoolImage} alt="Vintage School" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center text-sm">English education started. New colleges in Calcutta, Bombay, Madras.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/colonial-exploitation" className="btn btn-secondary">
          Next: See the Exploitation <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

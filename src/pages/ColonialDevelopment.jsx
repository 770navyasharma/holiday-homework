import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import trainImage from '../assets/train_development.png';
import postOfficeImage from '../assets/dev_post.png';
import schoolImage from '../assets/dev_school.png';

export default function ColonialDevelopment() {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center text-primary mb-8">Colonial Rule: Development</h1>
      
      <div className="glass-card mb-8">
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
          When the British ruled India, they introduced several new technologies and systems. While their main goal was to help themselves, these changes did bring some "Development" to the country.
        </p>

        <div className="grid grid-cols-3 gap-8">
          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-secondary mb-4 text-center">Railways 🚂</h3>
            <img src={trainImage} alt="Vintage Train" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center">Built a huge network of trains to transport goods and soldiers quickly across the country.</p>
          </div>

          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-secondary mb-4 text-center">Post & Telegraph ✉️</h3>
            <img src={postOfficeImage} alt="Post Office" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center">Set up a modern postal system and telegraph lines, making communication much faster.</p>
          </div>

          <div className="glass-card" style={{ background: 'rgba(78, 205, 196, 0.1)', border: '2px solid var(--secondary)', display: 'flex', flexDirection: 'column' }}>
            <h3 className="text-secondary mb-4 text-center">Modern Education 📚</h3>
            <img src={schoolImage} alt="Vintage School" className="img-fluid mb-4" style={{ flexGrow: 1, objectFit: 'cover' }} />
            <p className="text-center">Opened new schools and colleges teaching science and English.</p>
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

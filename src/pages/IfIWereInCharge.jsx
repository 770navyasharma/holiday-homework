import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import policyMakerImage from '../assets/policy_maker.png';
import treeImage from '../assets/charge_tree.png';
import waterImage from '../assets/charge_water.png';
import cycleImage from '../assets/charge_cycle.png';

export default function IfIWereInCharge() {
  return (
    <div className="container animate-fade-in">
      <h1 className="text-center text-primary mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>If I Were In Charge...</h1>
      
      <div className="glass-card mb-8">
        <h2 className="text-center text-secondary mb-2" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}>Role: Policy Maker</h2>
        <h3 className="text-center text-primary mb-6" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)' }}>Problem: Saving Our Beautiful Planet 🌍</h3>
        
        <p className="text-center mb-8" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
          Today, our planet is facing a big problem. We are using up too much water and cutting down too many trees. 
          If we don't act now, there won't be enough resources for the future! As a policy maker, I would make saving the earth <strong>fun</strong> and <strong>everyone's responsibility</strong>.
        </p>

        {/* Beautiful Collage Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '4px solid white', gridRow: 'span 2' }}>
            <img src={policyMakerImage} alt="Policy Maker" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '1rem', color: 'white' }}>
              <h4 style={{ margin: 0, fontSize: '1.5rem' }}>Leading the Change!</h4>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '4px solid white' }}>
            <img src={waterImage} alt="Rainwater Harvesting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '1rem', color: 'white' }}>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#6BE5DC' }}>💧 The Rainwater Rule</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Every school must harvest rainwater. It's a fun competition!</p>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '4px solid white' }}>
            <img src={treeImage} alt="Planting Trees" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '1rem', color: 'white' }}>
              <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#A8E6CF' }}>🌳 The Birthday Tree</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>A free sapling for every student on their birthday.</p>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '4px solid white', gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 300px' }}>
                <img src={cycleImage} alt="Cycling" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', background: 'var(--accent)' }}>
                <h4 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-dark)' }}>🚲 No-Car Sundays</h4>
                <p style={{ margin: '1rem 0 0 0', fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                  One day a week, we encourage everyone to walk, cycle, or use public transport to keep our air clean and fresh. Let's make the streets safe and green!
                </p>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center" style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#666', marginTop: '2rem' }}>
          "By making small, fun changes today, we can create a giant impact for tomorrow!"
        </p>

      </div>

      <div className="text-center">
        <Link to="/reflection" className="btn btn-secondary">
          Final Reflection <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}

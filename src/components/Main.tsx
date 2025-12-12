import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.png';

function Main({ parentToChild }: any) {
  const { mode } = parentToChild;
  const isDark = mode === 'dark';

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img 
          src={avatar} 
          alt="Avatar" 
          loading="lazy"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/axjh03" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/axjh03/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/axjh03/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
          <h1>Alok Jha</h1>
          <p>Full Stack Engineer</p>
          
          <button 
            className="resume-button"
            onClick={() => window.open('https://drive.google.com/file/d/1SuR0ghHxuC3U60pjbUYYk1eFR8fRqlL8/view?usp=sharing', '_blank')}
            style={{
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.25)' : 'rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '20px',
              padding: '12px 24px',
              color: isDark ? '#f1f5f9' : '#1e293b',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '16px',
              fontFamily: '"Inter", sans-serif',
              boxShadow: isDark ? '0 4px 16px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = isDark ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgba(15, 23, 42, 0.25)' : 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDark ? '0 4px 16px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.1)';
            }}
          >
            View Resume
          </button>

          <div className="mobile_social_icons">
            <a href="https://github.com/axjh03" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/axjh03/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/axjh03/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
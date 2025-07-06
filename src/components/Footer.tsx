import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/axjh03" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/axjh03/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/axjh03/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;
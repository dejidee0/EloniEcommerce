/** @jsxImportSource theme-ui */
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram, logoLinkedin } from 'ionicons/icons';

const SocialLinks = () => {
  return (
    <ul sx={{
        listStyleType: 'none',
        display: ['none', 'none', 'none', 'none','flex'],
        flexDirection: 'row',
        width: 140,
        justifyContent: 'space-evenly',
        color: '#fff',
        paddingTop: 0.2,
      }}>
      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoFacebook} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            borderRadius: 5,
            background: 'white',
            fontSize: 20,
          }}/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoTwitter} role="img" aria-label="logo twitter" sx={{
            color: '#000',
            padding: '1',
            borderRadius: 5,
            background: 'white',
            fontSize: 20,
          }}/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoInstagram} role="img" aria-label="logo instagram" sx={{
            color: '#000',
            padding: '1',
            borderRadius: 5,
            background: 'white',
            fontSize: 20,
          }}/>
        </a>
      </li>

      <li>
        <a href="#" className="social-link">
          <IonIcon icon={logoLinkedin} role="img" aria-label="logo linkedin" sx={{
            color: '#000',
            padding: '1',
            borderRadius: 5,
            background: 'white',
            fontSize: 20,
          }}/>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

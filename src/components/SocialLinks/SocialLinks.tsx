/** @jsxImportSource theme-ui */
import { theme } from '@/Theme/theme';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram, logoLinkedin } from 'ionicons/icons';

const socialLinks = [
  {
    id: 1,
    icon: logoFacebook,
    href: ''
  },
  {
    id: 2,
    icon: logoTwitter,
    href: ''
  },
  {
    id: 3,
    icon: logoInstagram,
    href: ''
  },
  {
    id: 4,
    icon: logoLinkedin,
    href: ''
  },
]

const SocialLinks = () => {
  return (
    <ul
      className='headerSocialContainer'
      sx={{
        ...theme.headerTop.headerSocialContainer
      }}>
      {
        socialLinks.map(socialLink => (
          <li key={socialLink.id}>
            <a
              href={socialLink.href}
              className='socialLink'
              sx={{
                ...theme.headerTop.socialLink
              }}
            >
              <IonIcon
                icon={socialLink.icon}
                role="img"

              />
            </a>
          </li>
        ))
      }
    </ul>
  );
};

export default SocialLinks;

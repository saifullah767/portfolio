export default function SocialLinks({ links, newTab = false }) {
  return (
    <ul className="social-share d-flex liststyle">
      {links.map((link) => (
        <li key={link.name} className={link.name.toLowerCase()}>
          <a
            href={link.href}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer' : undefined}
            aria-label={link.name}
          >
            {link.iconType === 'image' ? (
              <img style={{ width: '30px', height: '30px' }} src={link.icon} alt={link.name} />
            ) : (
              <i className={`feather-${link.icon}`} aria-hidden="true" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

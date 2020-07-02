import ExternalLink from 'components/Atoms/ExternalLink'

import styles from './footer.module.scss'

const Footer: React.FunctionComponent = () => (
  <div className={`${styles.container} padding text-center`}>
    <p>
      <strong>Direitos autorais © Bruno Anken Moromizato Zaninello</strong>
    </p>
    <br />
    <div className={styles['social-icons']}>
      <ExternalLink href="https://www.linkedin.com/in/brunoanken/"><img src="/icons/linkedin.svg" alt="LinkedIn" /></ExternalLink>
      <ExternalLink href="https://www.instagram.com/brunoanken/"><img src="/icons/instagram.svg" alt="Instagram" /></ExternalLink>
      <ExternalLink href="https://github.com/brunoanken"><img src="/icons/github.svg" alt="Twitter" /></ExternalLink>
    </div>
  </div>
)

export default Footer

import styles from './footer.module.scss'

const Footer = () => (
    <div className={`${styles['container']} padding text-center`}>
        <p>
            <strong>Direitos autorais © Bruno Anken Moromizato Zaninello</strong>
        </p>
        <br />
        <div className={styles['social-icons']}>
            <a href="https://www.linkedin.com/in/brunoanken/"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://www.instagram.com/brunoanken/"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="https://twitter.com/Zaninellossauro"><img src="/icons/twitter.svg" alt="Twitter" /></a>
        </div>
    </div>
)

export default Footer
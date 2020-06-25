import styles from './footer.module.scss'

const Footer = () => (
    <div className={`${styles['container']} padding text-center`}>
        <p>
            <strong>Direitos autorais © Bruno Anken Moromizato Zaninello</strong>
        </p>
    </div>
)

export default Footer
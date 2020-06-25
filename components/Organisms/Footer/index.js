import styles from './footer.module.scss'

const Footer = () => (
    <div className={`${styles['container']} padding text-center`}>
        <p>
            Feito por Bruno Anken usando <img src="/icons/react.svg" alt="React" />
        </p>
    </div>
)

export default Footer
import styles from './index.module.scss'

type Props = {
    imgSrc: string,
    title: string,
    children: React.ReactNode
}

const Section: React.FunctionComponent<Props> = ({ imgSrc, title, children }) => (
    <div className={styles['section']}>
        <img src={imgSrc} alt='Ícone' />
        <p className="color-white1">
            <strong>{title}</strong>
        </p>
        <br />
        {children}
    </div>
)
export default Section
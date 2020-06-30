import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode,
    href: string,
    download: boolean
}

const LinkButtonOutline = ({ children, href, download = false }) => (
    <a href={href} download={download} className={styles['container']}>{children}</a>
)

export default LinkButtonOutline
import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode,
    href: string
}

const ExternalLink: React.FunctionComponent<Props> = ({ children, href }) => (
    <a href={href} className={styles['container']}>{children}</a>
)

export default ExternalLink
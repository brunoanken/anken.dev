import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode,
    href: string,
    download: boolean
}

const LinkButtonOutline: React.FunctionComponent<Props> = ({
  children, href, download = false,
}: Props) => (
  <a href={href} download={download} className={styles.container}>{children}</a>
)

export default LinkButtonOutline

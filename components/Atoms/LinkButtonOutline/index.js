import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const LinkButtonOutline = ({ children, href, download = false }) => (
    <a href={href} download={download} className={styles['container']}>{children}</a>
)

LinkButtonOutline.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.bool
}

export default LinkButtonOutline
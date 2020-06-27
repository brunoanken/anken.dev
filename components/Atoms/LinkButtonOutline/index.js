import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const LinkButtonOutline = ({ children, href, download = false }) => (
    <div className={styles['container']}>
        <a href={href} download={download}>{children}</a>
    </div>
)

LinkButtonOutline.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.bool
}

export default LinkButtonOutline
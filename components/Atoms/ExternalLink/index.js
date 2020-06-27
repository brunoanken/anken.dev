import PropTypes from 'prop-types'

import styles from './styles.module.scss'

const ExternalLink = ({ children, href }) => (
    <a href={href} className={styles['container']}>{children}</a>
)

ExternalLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
}

export default ExternalLink
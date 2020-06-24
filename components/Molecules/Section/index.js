import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Section = ({ imgSrc, children }) => (
    <div className={styles['section']}>
        <img src={imgSrc} />
        {children}
    </div>
)

Section.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section
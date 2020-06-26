import PropTypes from 'prop-types'

import styles from './index.module.scss'

const Section = ({ imgSrc, title, children }) => (
    <div className={styles['section']}>
        <img src={imgSrc} />
        <p className="color-white1">
            <strong>{title}</strong>
        </p>
        <br />
        {children}
    </div>
)

Section.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}

export default Section
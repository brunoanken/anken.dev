import PropTypes from 'prop-types'

import styles from './index.module.scss'

const CompanyCard = ({ companyName, companyImageSrc, companyWebsiteUrl, children }) => (
    <div className={styles['container']}>

        <div className={styles['presentation']}>
            <h3>{companyName}</h3>
            <img src={companyImageSrc} />
        </div>

        <div className={styles['description']}>
            {children}
        </div>

        <div className={styles['link']}>
            <a href={companyWebsiteUrl}>Acesse o site da {companyName}</a>
        </div>
    </div>
)

CompanyCard.propTypes = {
    companyName: PropTypes.string.isRequired,
    companyImageSrc: PropTypes.string.isRequired,
    companyWebsiteUrl: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default CompanyCard
import PropTypes from 'prop-types'

import ExternalLink from '../../Atoms/ExternalLink'

import styles from './index.module.scss'

const CompanyCard = ({ companyName, companyImageSrc, companyWebsiteUrl, children }) => (
    <div>

        <div className={styles['presentation']}>
            <h3>{companyName}</h3>
            <img src={companyImageSrc} />
        </div>

        <div className={styles['description']}>
            {children}
        </div>

        <div className={styles['link']}>
            <ExternalLink href={companyWebsiteUrl}>Confira o site da {companyName}</ExternalLink>
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
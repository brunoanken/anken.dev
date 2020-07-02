import ExternalLink from 'components/Atoms/ExternalLink'

import styles from './index.module.scss'

type Props = {
    companyName: string,
    companyImageSrc: string,
    companyWebsiteUrl: string,
    children: React.ReactNode
}

const CompanyCard: React.FunctionComponent<Props> = ({
  companyName, companyImageSrc, companyWebsiteUrl, children,
}: Props) => (
  <div>

    <div className={styles.presentation}>
      <h3>{companyName}</h3>
      <img src={companyImageSrc} alt={`Logo da empresa ${companyName}`} />
    </div>

    <div className={styles.description}>
      {children}
    </div>

    <div className={styles.link}>
      <ExternalLink href={companyWebsiteUrl}>
        Confira o site da
        {companyName}
      </ExternalLink>
    </div>

  </div>
)

export default CompanyCard

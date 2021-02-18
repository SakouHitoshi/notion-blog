import sharedStyles from '../styles/shared.module.css'
import ExtLink from '../components/ext-link'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/sakou_remark',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/SakouHitoshi',
  },
]

export default props => (
  <>
    <footer className={sharedStyles.withlove}>
      <div className="sharedStyles.thanks">
        POWERED BY {'  '}
        <a href="https://notion-blog.now.sh/">Notion Blog</a>
      </div>
      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </footer>
  </>
)

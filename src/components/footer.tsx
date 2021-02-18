import sharedStyles from '../styles/shared.module.css'
import ExtLink from '../components/ext-link'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'

export default props => (
  <>
    <footer className={sharedStyles.withlove}>
      <div className="sharedStyles.thanks">
        POWERED BY {'  '}
        <a href="https://notion-blog.now.sh/">Notion Blog</a>
      </div>
    </footer>
  </>
)

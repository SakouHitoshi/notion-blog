import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Profile', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const defaultUrl = 'https://hosso-blog.jp'
const defaultTitle = 'Hosso Blog'
const defaultOgImageUrl = 'https://hosso-blog.jp/og-image.png'
const defaultDescription =
  'プログラミング学習、音楽の事を中心に書いているブログ'

export default ({
  path = '',
  titlePre = '',
  description = '',
  ogImageUrl = '',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre == '' ? defaultTitle : `${titlePre} - ${defaultTitle}`}
        </title>
        <meta
          name="description"
          content={description == '' ? defaultDescription : description}
        />
        <meta
          property="og:title"
          content={titlePre == '' ? defaultTitle : titlePre}
        />
        <meta
          property="og:description"
          content={description == '' ? defaultDescription : description}
        />
        <meta
          property="og:image"
          content={ogImageUrl == '' ? defaultOgImageUrl : ogImageUrl}
        />
        <meta name="twitter:site" content="@Hosso_remark" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={ogImageUrl == '' ? defaultOgImageUrl : ogImageUrl}
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

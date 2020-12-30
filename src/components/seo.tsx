import Head from 'next/head'

interface SEOProps{
  title: String,
  description?: String,
  image?: String,
  shouldExcludeTitleSuffix?: boolean,
  shouldIndexPage?: boolean
}
export default function SEO ({
  title,
  description,
  image,
  shouldExcludeTitleSuffix =false,
  shouldIndexPage =false
}:SEOProps){

  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Dev Commerce':''}`
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}${image}` :null
  return (
    <Head>
      <title>{pageTitle}</title>
      {!!description && (<meta name="description" content={`${String(description)}`} />)}
      {!!image && (<meta name="image" content={`${pageImage}`} />)}
      {!shouldIndexPage && <meta name='robots' content='noindex,nofollow' />}
    </Head>
  )
}

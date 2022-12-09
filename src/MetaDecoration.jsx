import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const hostName = 'https://louistran2k.github.io/react-app-meta-tags'
const hostName1 = 'https://louistran2k.github.io/'

const MetaDecoration = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={hostName1 + imageUrl} />
      <meta property="og:url" content={hostName1 + window.location.pathname + window.location.search} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  )
}

MetaDecoration.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default MetaDecoration
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import PropTypes from "prop-types"

import Image from "gatsby-image"

const Avatar = () => (
  <StaticQuery
    query={avatarQuery}
    render={data => (
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt="me"
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 40,
          borderRadius: `100%`,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    )}
  />
)

const avatarQuery = graphql`
  query AvatarQuery {
    avatar: file(absolutePath: { regex: "/cat.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
}

export default Avatar

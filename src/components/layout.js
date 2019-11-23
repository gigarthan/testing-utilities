/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer className="mx-auto text-center">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a target="_blank" href="https://www.gatsbyjs.org">
            gatsby
          </a>{" "}
          &{" "}
          <a target="_blank" href="https://tailwindcss.com/">
            tailwindcss
          </a>{" "}
          by{" "}
          <a target="_blank" href="https://twitter.com/gigarthan">
            Gigarthan
          </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

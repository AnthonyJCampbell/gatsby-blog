import Typography from "typography"
import fun from "typography-theme-funston"

fun.baseFontSize = "18px"
fun.headerFontFamily = ["Source Sans Pro"]
fun.headerWeight = 800

fun.bodyFontFamily = ["Source Sans Pro"]

fun.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      textDecoration: `none`,
      color: "#ff0078",
    },
  }
}

delete fun.googleFonts

const typography = new Typography(fun)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

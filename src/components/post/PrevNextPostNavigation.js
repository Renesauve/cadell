/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const renderPreviousLink = ({ prev }) => {
  let previousLink = null
  if (!prev) {
    return <span />
  } else {
    previousLink = `${prev}`
  }

  return (
    <Link className="left" to={previousLink} sx={{}}>
      <span>Previous</span>
    </Link>
  )
}

const renderNextLink = ({ next }) => {
  if (next) {
    return (
      <Link className="right" to={`${next}`} sx={{}}>
        <span>Up Next</span>
      </Link>
    )
  } else {
    return <span />
  }
}

export const PrevNextPostNavigation = ({ ctx, style }) => {
  return (
    <nav sx={{ ...style }}>
      {renderPreviousLink(ctx)}
      {renderNextLink(ctx)}
    </nav>
  )
}

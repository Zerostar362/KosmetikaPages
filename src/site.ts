const currentPath = window.location.pathname
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')

for (const link of navLinks) {
  const href = link.getAttribute('href')
  if (!href) {
    continue
  }

  const isHomeLink = href.endsWith('index.html')
  const isHomePath = currentPath === '/' || currentPath.endsWith('/index.html')
  const isCurrent = isHomeLink
    ? isHomePath
    : currentPath.endsWith(href.replace(/^\//, '/'))

  if (isCurrent) {
    link.setAttribute('aria-current', 'page')
  }
}

const yearTargets = document.querySelectorAll<HTMLElement>('[data-current-year]')
const year = new Date().getFullYear().toString()
for (const target of yearTargets) {
  target.textContent = year
}

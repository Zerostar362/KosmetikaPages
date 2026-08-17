const currentPage = window.location.pathname.split('/').pop() || 'index.html'
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')

for (const link of navLinks) {
  const href = link.getAttribute('href')
  if (!href) {
    continue
  }

  const linkPage = href.split('/').pop() || 'index.html'
  const isHomePath = currentPage === '' || currentPage === 'index.html'
  const isCurrent = linkPage === 'index.html' ? isHomePath : linkPage === currentPage

  if (isCurrent) {
    link.setAttribute('aria-current', 'page')
  }
}

const yearTargets = document.querySelectorAll<HTMLElement>('[data-current-year]')
const year = new Date().getFullYear().toString()
for (const target of yearTargets) {
  target.textContent = year
}

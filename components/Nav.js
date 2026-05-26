import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <Link className="nav-logo" href="/">
        <img src="/tll-logo.svg" alt="The Levitt Lab" />
      </Link>
      <Link className="nav-faq" href="/faqs">FAQs</Link>
    </nav>
  )
}

import Link from 'next/link'

export default function PageShell({ tag, title, lead, children }) {
  return (
    <>
      <Link className="back-link" href="/">← Back</Link>
      <div className="page-hero">
        <span className="page-tag">{tag}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-lead">{lead}</p>
      </div>
      <div className="page-content">
        {children}
      </div>
    </>
  )
}

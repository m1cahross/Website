import PageShell from '@/components/PageShell'

export const metadata = { title: 'Community — The Levitt Lab' }

export default function CompetingPage() {
  return (
    <PageShell
      tag="Community"
      title={<>Peers, not<br />competition.</>}
      lead="At The Levitt Lab, your peers are collaborators and friends — not rivals for the top of a curve. We're all here to grow together."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

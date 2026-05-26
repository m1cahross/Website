import PageShell from '@/components/PageShell'

export const metadata = { title: 'Core — The Levitt Lab' }

export default function BusyworkPage() {
  return (
    <PageShell
      tag="Core"
      title={<>No more<br />busy work.</>}
      lead="Core strips learning down to what actually matters — the foundational skills and knowledge worth having — and drops everything else."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

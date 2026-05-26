import PageShell from '@/components/PageShell'

export const metadata = { title: 'Seminar — The Levitt Lab' }

export default function RealworldPage() {
  return (
    <PageShell
      tag="Seminar"
      title={<>The world<br />is your text.</>}
      lead="Seminar brings real-world issues into the room — economic, political, ethical, environmental — and teaches you to think, debate, and reason about what actually matters."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

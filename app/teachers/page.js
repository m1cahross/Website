import PageShell from '@/components/PageShell'

export const metadata = { title: 'Guides — The Levitt Lab' }

export default function TeachersPage() {
  return (
    <PageShell
      tag="Guides"
      title={<>Adults who<br />actually know you.</>}
      lead="Our Guides aren't teachers managing a classroom of 30. They know your name, your goals, your struggles, and your potential — and they show up for you as a person, not just a student."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

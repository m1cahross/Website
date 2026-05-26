import PageShell from '@/components/PageShell'

export const metadata = { title: 'Mastery-Based — The Levitt Lab' }

export default function GradesPage() {
  return (
    <PageShell
      tag="Mastery-Based"
      title={<>Grades don&apos;t<br />tell the story.</>}
      lead="We assess what you can actually do and understand — not how well you perform on a timed test. Move at your pace. Show real mastery."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

import PageShell from '@/components/PageShell'

export const metadata = { title: 'In-Depth Explorations — The Levitt Lab' }

export default function PassionPage() {
  return (
    <PageShell
      tag="In-Depth Explorations"
      title={<>Chase what<br />you love.</>}
      lead="In-Depth Explorations give you dedicated time and real guidance to go deep on the subjects, questions, and projects you actually care about."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

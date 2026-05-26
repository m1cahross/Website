import PageShell from '@/components/PageShell'

export const metadata = { title: 'Flexibility — The Levitt Lab' }

export default function ClassroomPage() {
  return (
    <PageShell
      tag="Flexibility"
      title={<>Learning isn&apos;t<br />a location.</>}
      lead="We believe learning happens everywhere — not just inside four walls. Flexibility means a schedule and environment that works for you."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

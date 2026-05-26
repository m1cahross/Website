import PageShell from '@/components/PageShell'

export const metadata = { title: "We Won't Fail You — The Levitt Lab" }

export default function WontPage() {
  return (
    <PageShell
      tag="Our Promise"
      title={<>We won&apos;t<br />fail you.</>}
      lead="School was designed for a world that no longer exists. The Levitt Lab was designed for yours — built around curiosity, autonomy, and real growth."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

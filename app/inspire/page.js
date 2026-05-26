import PageShell from '@/components/PageShell'

export const metadata = { title: 'Wonder Sessions — The Levitt Lab' }

export default function InspirePage() {
  return (
    <PageShell
      tag="Wonder Sessions"
      title={<>School doesn&apos;t<br />inspire you.</>}
      lead="Wonder Sessions are immersive, curiosity-driven experiences designed to spark the kind of excitement you haven't felt in a classroom in years — or maybe ever."
    >
      <div className="coming-soon">✦ More coming soon</div>
    </PageShell>
  )
}

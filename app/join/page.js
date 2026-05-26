import PageShell from '@/components/PageShell'

export const metadata = { title: 'Join Us — The Levitt Lab' }

export default function JoinPage() {
  return (
    <PageShell
      tag="Apply"
      title={<>Ready for<br />change?</>}
      lead="Tell us a little about yourself. We read every submission and will reach out personally within a few days."
    >
      <form className="join-form" method="POST">
        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="First and last" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="grade">Current grade</label>
          <input id="grade" name="grade" type="text" placeholder="e.g. 9th grade" />
        </div>
        <div className="form-field">
          <label htmlFor="why">What brings you here?</label>
          <textarea id="why" name="why" rows={4} placeholder="Tell us what you're looking for…" />
        </div>
        <button type="submit" className="submit-btn">Send my interest →</button>
      </form>
    </PageShell>
  )
}

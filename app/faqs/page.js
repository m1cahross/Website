import Link from 'next/link'
import PageShell from '@/components/PageShell'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata = { title: 'FAQs — The Levitt Lab' }

const faqs = [
  {
    q: 'What is The Levitt Lab?',
    a: 'The Levitt Lab is an alternative learning environment designed for students who want more than traditional school can offer — deeper curiosity, real-world relevance, and genuine community.',
  },
  {
    q: 'Who is this for?',
    a: 'Students who feel unchallenged, uninspired, or constrained by the standard school system. If you have big questions and not enough space to explore them, you belong here.',
  },
  {
    q: 'What does a typical day look like?',
    a: 'More content coming soon.',
  },
  {
    q: 'How do I enroll?',
    a: (
      <>
        Start by filling out our interest form on the{' '}
        <Link href="/join" style={{ color: 'var(--purple-dark)', fontWeight: 600 }}>
          Join Us
        </Link>{' '}
        page. We&apos;ll be in touch to learn more about you.
      </>
    ),
  },
]

export default function FaqsPage() {
  return (
    <PageShell
      tag="Frequently Asked Questions"
      title={<>Got<br />questions?</>}
      lead="We have answers. If you don't see yours here, reach out."
    >
      <FaqAccordion items={faqs} />
    </PageShell>
  )
}

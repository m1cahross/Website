import Link from 'next/link'
import styles from './page.module.css'

const cards = [
  [
    { problem: "School doesn't inspire you.", solution: 'Wonder Sessions', href: '/inspire' },
    { problem: "You can't explore the things you're passionate about.", solution: 'In-Depth Explorations', href: '/passion' },
    { problem: "You're forced to do busy work.", solution: 'Core', href: '/busywork' },
    { problem: "You're stuck in a classroom all day.", solution: 'Flexibility', href: '/classroom' },
  ],
  [
    { problem: "You don't learn about real-world issues.", solution: 'Seminar', href: '/realworld' },
    { problem: "Your teachers don't know you as a person.", solution: 'Guides', href: '/teachers' },
    { problem: "You're competing with your peers.", solution: 'Community', href: '/competing' },
    { problem: "You're graded on things that don't matter.", solution: 'Mastery-Based', href: '/grades' },
  ],
]

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroHeadline}>
          School is failing<br />you.
        </h1>
        <div className={styles.heroSub}>
          <Link className={styles.wontLink} href="/wont" title="We won't fail you">
            <span className={styles.wontArrow}>↪</span>
            <span className={styles.wontText}>We won&apos;t.</span>
          </Link>
        </div>
      </section>

      <div className={styles.boxesWrapper}>
        {cards.map((row, ri) => (
          <div key={ri} className={styles.boxesRow}>
            {row.map(({ problem, solution, href }) => (
              <Link key={href} className={styles.problemCard} href={href}>
                <span className={styles.cardDefault}>{problem}</span>
                <span className={styles.cardHover}>{solution}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.ctaBar}>
        <Link href="/join">
          <span className={styles.ctaBlack}>Ready for change?</span>{' '}
          <span className={styles.ctaPurple}>Join us.</span>
        </Link>
      </div>
    </>
  )
}

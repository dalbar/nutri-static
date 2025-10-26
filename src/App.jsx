import './App.css'

function App() {
  const posts = [
    {
      title: 'Rice Bowl Formulas for All-Day Energy',
      date: 'May 10, 2024',
      excerpt:
        'Discover three grain-to-veggie ratios that keep rice bowls light, satisfying, and packed with steady fuel.',
    },
    {
      title: 'Chicken Prep That Stays Juicy',
      date: 'April 28, 2024',
      excerpt:
        'Marinade guides and reheating tricks show how to stretch one batch of chicken across protein-rich meals.',
    },
    {
      title: 'Broccoli Boosters for Every Plate',
      date: 'April 17, 2024',
      excerpt:
        'Steam, roast, or stir-fry—each method unlocks nutrients and flavors that round out your macro-friendly menu.',
    },
  ]

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Nutri-Static Blog</p>
        <h1>Nourishing Plates with Rice, Chicken & Broccoli</h1>
        <p className="hero__tagline">
          Step into a welcoming kitchen where we turn everyday rice, juicy chicken,
          and vibrant broccoli into balanced, energizing meals.
        </p>
      </header>

      <main className="layout">
        <article className="post">
          <h2>Balancing Meals with Everyday Staples</h2>
          <p>
            Rice, chicken, and broccoli might look simple, yet together they form a
            reliable blueprint for nourishing plates. Each bite layers slow-burning
            energy, lean protein, and crisp fiber so you can fuel busy days without
            overthinking what belongs on the table.
          </p>
          <blockquote>
            Aim for a palm of grilled chicken, a cupped hand of warm rice, and two
            handfuls of broccoli—this trio lands close to a 40/30/30 balance of
            carbs, protein, and fiber-rich veggies without tracking macros.
          </blockquote>
          <p>
            Through weekly meal plans, prep-friendly tips, and flavor swaps, we will
            show how this trio flexes for different goals—from post-workout bowls to
            cozy family dinners—while keeping the nutrition math effortless.
          </p>
        </article>

        <aside className="sidebar">
          <h3>Latest Notes</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.title}>
                <p className="sidebar__date">{post.date}</p>
                <p className="sidebar__title">{post.title}</p>
                <p className="sidebar__excerpt">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  )
}

export default App

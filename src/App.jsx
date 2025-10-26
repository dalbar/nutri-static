import './App.css'

function App() {
  const posts = [
    {
      title: 'Why Hello World Matters',
      date: 'May 10, 2024',
      excerpt:
        'A first greeting is a promise that more stories are on the way. Here is what you can expect from this space.',
    },
    {
      title: 'Building Healthy Habits',
      date: 'April 28, 2024',
      excerpt:
        'From simple meal planning to mindful moments, let’s explore small steps that lead to big changes.',
    },
    {
      title: 'Favorite Seasonal Recipes',
      date: 'April 17, 2024',
      excerpt:
        'Fresh, vibrant, and easy to prep—these recipes keep your plate colorful and your routine stress-free.',
    },
  ]

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Nutri-Static Blog</p>
        <h1>Hello, World</h1>
        <p className="hero__tagline">
          Welcome to a fresh space for bite-sized notes on nutrition, routines,
          and feeling good every day.
        </p>
      </header>

      <main className="layout">
        <article className="post">
          <h2>Starting Anew</h2>
          <p>
            Every blog begins with a hello. This one is no different, but I want
            that greeting to feel like a deep breath. Think of this space as a
            quiet corner where we explore the everyday choices that keep us
            balanced.
          </p>
          <blockquote>
            The simplest commitments—drinking more water, stretching between
            meetings, pausing for a mindful snack—add up to a healthier rhythm.
          </blockquote>
          <p>
            Expect short reads, friendly recipes, and practical frameworks that
            make it easier to nourish yourself. I hope you leave each visit with
            one idea worth trying before the next hello.
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

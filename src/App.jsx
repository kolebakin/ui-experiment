import { useState } from 'react'
import './App.css'
import StatusCard from './components/StatusCard.jsx'

const statusCards = [
  {
    title: 'Prototype',
    value: 'Ready for review',
    detail: 'High-fidelity mockups have cleared the final round of usability testing.',
  },
  {
    title: 'Metrics',
    value: '12% uplift',
    detail: 'Micro-interactions already improve the personalization funnel on mobile.',
  },
  {
    title: 'Launch',
    value: '3 days left',
    detail: 'Content freeze starts Friday, so only priority fixes land in this sprint.',
  },
]

const focusPoints = [
  {
    title: 'Shipping onboarding tweaks',
    detail: 'Polish the guided tour cards and keep the motion subtle for first-time visitors.',
  },
  {
    title: 'Stabilizing checkout',
    detail: 'Verify the form state handling across browsers while keeping the interactions snappy.',
  },
  {
    title: 'Refreshing copy tone',
    detail: 'Align the hero messaging with the softer brand voice and reduce the cognitive load.',
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [focusIndex, setFocusIndex] = useState(0)
  const focus = focusPoints[focusIndex]

  const handleAcknowledge = () => {
    setCount((prev) => prev + 1)
    setFocusIndex((prev) => (prev + 1) % focusPoints.length)
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Product showcase</p>
        <h1>Delivery snapshot</h1>
        <p className="lead">
          A lightweight view of the current sprint health and the number of updates acknowledged so far.
        </p>
      </header>

      <section className="status-grid">
        {statusCards.map((card) => (
          <StatusCard key={card.title} {...card} />
        ))}
      </section>

      <section className="cta">
        <div className="focus-panel">
          <div>
            <p className="pill">Current focus</p>
            <h2>{focus.title}</h2>
            <p>{focus.detail}</p>
          </div>
          <button type="button" onClick={handleAcknowledge}>
            Acknowledge update
          </button>
        </div>
        <p className="muted">
          Acknowledged <strong>{count}</strong> updates and counting.
        </p>
      </section>
    </main>
  )
}

export default App

import './StatusCard.css'

export default function StatusCard({ title, value, detail }) {
  return (
    <article className="status-card">
      <header>
        <p className="status-label">{title}</p>
        <p className="status-value">{value}</p>
      </header>
      <p className="status-detail">{detail}</p>
    </article>
  )
}

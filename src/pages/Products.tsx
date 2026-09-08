import { Link } from 'react-router-dom'
import Container from '@components/Container'

const sampleProducts = [
  { id: '1', name: 'Cold Storage Unit A' },
  { id: '2', name: 'Refrigerated Box B' },
  { id: '3', name: 'Temperature Monitor C' },
]

export default function Products() {
  return (
    <Container className="py-8">
      <section className="page">
        <h1>Products</h1>
        <p>Placeholder product catalog for Nam Cold.</p>
        <ul className="product-list">
          {sampleProducts.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

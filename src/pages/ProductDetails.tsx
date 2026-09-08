import { Link, useParams } from 'react-router-dom'
import Container from '@components/Container'

export default function ProductDetails() {
  const { productId } = useParams()

  return (
    <Container className="py-8">
      <section className="page">
        <h1>Product Details</h1>
        <p>Placeholder details for product ID: {productId}</p>
        <Link to="/products">Back to products</Link>
      </section>
    </Container>
  )
}

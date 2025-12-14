import ProductCard, { Product } from './ProductCard';

interface CatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ products, onAddToCart }: CatalogProps) {
  return (
    <section id="catalog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Наша коллекция
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждое изделие создано с безупречным вниманием к деталям
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

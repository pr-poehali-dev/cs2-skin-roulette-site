import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-scale-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden bg-secondary/50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-6">
        <div className="w-full">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            {product.name}
          </h3>
          <p className="text-xl font-heading font-bold text-primary mb-4">
            {product.price.toLocaleString('ru-RU')} ₽
          </p>
        </div>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <Icon name="ShoppingBag" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}

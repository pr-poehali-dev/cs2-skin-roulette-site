import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Product } from './ProductCard';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl font-heading">Корзина</SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full pt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Icon name="ShoppingBag" size={64} className="text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Корзина пуста</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="h-7 w-7 p-0"
                        >
                          <Icon name="Minus" size={14} />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Icon name="Plus" size={14} />
                        </Button>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemoveItem(item.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Icon name="X" size={18} />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-heading">
                  <span>Итого:</span>
                  <span className="font-bold text-primary">
                    {total.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

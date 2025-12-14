import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Главная', href: '#hero' },
    { label: 'Каталог', href: '#catalog' },
    { label: 'О бренде', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">
              LUXE
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative"
            >
              <Icon name="ShoppingBag" size={22} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

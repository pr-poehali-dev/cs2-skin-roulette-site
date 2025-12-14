import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.querySelector('#catalog');
    catalog?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-6 leading-tight">
            Искусство роскоши
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя коллекцию эксклюзивных товаров, созданных для тех, кто ценит безупречное качество и изысканный стиль
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToCatalog}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
            >
              Смотреть коллекцию
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-base font-medium"
            >
              О бренде
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

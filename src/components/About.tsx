export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 text-center">
            О бренде LUXE
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              LUXE — это воплощение элегантности и безупречного вкуса. Мы создаем не просто товары, 
              а произведения искусства, которые становятся частью вашего образа жизни.
            </p>
            <p>
              Каждое изделие в нашей коллекции тщательно отобрано и отражает наши ценности: 
              качество, эксклюзивность и внимание к деталям. Мы работаем только с лучшими 
              мастерами и используем премиальные материалы.
            </p>
            <p>
              Наша философия проста: роскошь должна быть настоящей. Это не просто высокая цена, 
              это история, мастерство и эмоции, которые вызывает каждая вещь.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground">Эксклюзивных изделий</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-accent mb-2">15</div>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-accent mb-2">5000+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

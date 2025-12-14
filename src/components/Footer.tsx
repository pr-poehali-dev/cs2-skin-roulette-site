import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">LUXE</h3>
            <p className="text-primary-foreground/80">
              Искусство роскоши в каждой детали
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button
                  onClick={() => document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  О бренде
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 LUXE. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}

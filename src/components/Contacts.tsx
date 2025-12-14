import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 text-center">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@luxe.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 10:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="bg-background"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-background"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="bg-background"
                />
                <Textarea
                  placeholder="Сообщение"
                  rows={5}
                  required
                  className="bg-background"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Visitor data:', formData);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const features = [
    {
      icon: 'Wrench',
      title: 'База клиентов',
      description: 'Удобное хранение данных о клиентах и истории ремонтов'
    },
    {
      icon: 'Calendar',
      title: 'Планировщик',
      description: 'Календарь заказов и напоминания о сроках выполнения'
    },
    {
      icon: 'FileText',
      title: 'Документы',
      description: 'Автоматическое формирование актов и квитанций'
    },
    {
      icon: 'Package',
      title: 'Склад запчастей',
      description: 'Учет запчастей и автоматический контроль остатков'
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика',
      description: 'Статистика продаж и отчеты по выручке'
    },
    {
      icon: 'Users',
      title: 'Многопользовательский',
      description: 'Работа нескольких мастеров с разными правами доступа'
    }
  ];

  const screenshots = [
    {
      url: 'https://cdn.poehali.dev/projects/18a789fd-9b55-497c-a3a6-4ec50502d9a6/files/d8e6886d-7b64-4bdc-a535-324d9b17efd0.jpg',
      title: 'Главная панель'
    },
    {
      url: 'https://cdn.poehali.dev/projects/18a789fd-9b55-497c-a3a6-4ec50502d9a6/files/a6207b13-1607-4af4-a69c-62ea875855f4.jpg',
      title: 'Аналитика и отчеты'
    },
    {
      url: 'https://cdn.poehali.dev/projects/18a789fd-9b55-497c-a3a6-4ec50502d9a6/files/4614154c-ab0a-4fd3-bc59-7e46006c53ba.jpg',
      title: 'Работа с клиентами'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Программа для ремонта<br />бытовой техники
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Автоматизируйте работу мастерской и увеличьте прибыль в 2 раза
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Download" className="mr-2" size={24} />
                Получить программу
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6"
                onClick={() => document.getElementById('screenshots')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Play" className="mr-2" size={24} />
                Смотреть демо
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Простая установка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Техподдержка 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} />
                <span>Бесплатные обновления</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white opacity-70" />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Возможности программы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Всё необходимое для эффективного управления сервисным центром
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-purple-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Скриншоты программы
            </h2>
            <p className="text-xl text-gray-600">
              Посмотрите, как выглядит интерфейс программы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <img 
                  src={screenshot.url} 
                  alt={screenshot.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-4">{screenshot.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://docs.poehali.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-lg group"
            >
              Подробное описание программы
              <Icon name="ExternalLink" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/18a789fd-9b55-497c-a3a6-4ec50502d9a6/files/4614154c-ab0a-4fd3-bc59-7e46006c53ba.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы увеличить прибыль вашего сервиса?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Более 500 мастерских уже используют нашу программу
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">2x</div>
                <div className="text-lg">Рост прибыли</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">-60%</div>
                <div className="text-lg">Время на документы</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Довольных клиентов</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Начать использовать
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Оставьте заявку
              </h2>
              <p className="text-xl text-gray-600">
                Мы свяжемся с вами и расскажем все детали
              </p>
            </div>

            <Card className="p-8 shadow-2xl border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя *</label>
                    <Input
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон *</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-2 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем сервисном центре..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 focus:border-purple-400"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary text-white text-lg py-6 hover:opacity-90 transition-opacity"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Программа для сервисных центров</h3>
              <p className="text-gray-400">Автоматизация ремонта бытовой техники</p>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="VKontakte"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Telegram"
              >
                <Icon name="Send" size={24} />
              </a>
              <a 
                href="https://ok.ru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Одноклассники"
              >
                <Icon name="Users" size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>

      <script 
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              console.log('Visitor tracked:', {
                userAgent: navigator.userAgent,
                referrer: document.referrer,
                timestamp: new Date().toISOString()
              });
            })();
          `
        }}
      />
    </div>
  );
}

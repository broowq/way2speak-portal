import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">
            Way2Speak
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          <Button className="bg-primary hover:bg-primary-dark">
            Записаться на урок
          </Button>
        </div>
      </div>
    </nav>
  );
};
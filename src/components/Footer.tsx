import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Way2Speak</h3>
            <p className="text-gray-400">
              Онлайн школа английского языка с индивидуальным подходом к каждому студенту
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Курсы</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Разговорный английский
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Бизнес английский
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Подготовка к IELTS
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: info@way2speak.com
              </li>
              <li className="text-gray-400">
                Телефон: +7 (999) 123-45-67
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Way2Speak. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
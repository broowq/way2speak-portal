export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Way2Speak</h3>
            <p className="text-gray-600">
              La tua scuola di inglese online
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@way2speak.com</li>
              <li>Tel: +39 123 456 7890</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Social</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Informazioni</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Termini e Condizioni</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Way2Speak. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};
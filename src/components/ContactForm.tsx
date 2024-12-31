import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "beginner",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.send(
        'service_YOUR_SERVICE_ID',
        'template_YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          level: formData.level,
          to_email: 'YOUR_EMAIL@example.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      
      toast({
        title: "Richiesta inviata con successo!",
        description: "Ti contatteremo presto per programmare la tua lezione di prova.",
      });
      
      setFormData({ name: "", email: "", phone: "", level: "beginner" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'invio della richiesta. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          type="text"
          placeholder="Il tuo nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full"
          disabled={isLoading}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="La tua email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full"
          disabled={isLoading}
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Il tuo numero di telefono"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="w-full"
          disabled={isLoading}
        />
      </div>
      <select
        value={formData.level}
        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
        className="w-full p-2 border rounded-md"
        disabled={isLoading}
      >
        <option value="beginner">Principiante (A1-A2)</option>
        <option value="intermediate">Intermedio (B1-B2)</option>
        <option value="advanced">Avanzato (C1-C2)</option>
      </select>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Invio in corso..." : "Prenota una lezione di prova"}
      </Button>
    </form>
  );
};
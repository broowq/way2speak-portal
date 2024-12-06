import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "beginner",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы API запрос
    console.log("Form submitted:", formData);
    toast({
      title: "Richiesta inviata con successo!",
      description: "Ti contatteremo presto per programmare la tua lezione di prova.",
    });
    setFormData({ name: "", email: "", phone: "", level: "beginner" });
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
        />
      </div>
      <select
        value={formData.level}
        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
        className="w-full p-2 border rounded-md"
      >
        <option value="beginner">Principiante (A1-A2)</option>
        <option value="intermediate">Intermedio (B1-B2)</option>
        <option value="advanced">Avanzato (C1-C2)</option>
      </select>
      <Button type="submit" className="w-full">
        Prenota una lezione di prova
      </Button>
    </form>
  );
};

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LanguageSwitcherProps {
  onLanguageChange: (language: string) => void;
  currentLanguage: string;
}

const LanguageSwitcher = ({ onLanguageChange, currentLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Select value={currentLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[100px] bg-white/80 backdrop-blur">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
          <SelectItem value="am">Հայերեն</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;

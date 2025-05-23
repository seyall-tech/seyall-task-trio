
import { useState, useEffect } from "react";

interface Language {
  code: string;
  script: string;
  text: string;
}

const MultiLanguageSlogan = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const languages: Language[] = [
    { code: "ta", script: "Tamil", text: "யாதும் ஊரே யாவரும் கேளிர்" },
    { code: "hi", script: "Hindi", text: "हर जगह हमारा घर है, हर कोई हमारा भाई है" },
    { code: "kn", script: "Kannada", text: "ಎಲ್ಲಾ ನಮ್ಮ ಊರು, ಎಲ್ಲರೂ ನಮ್ಮವರು" },
    { code: "te", script: "Telugu", text: "ప్రతి ప్రాంతం మా ఇల్లు, ప్రతి ఒక్కరూ మా బంధువులు" },
    { code: "ml", script: "Malayalam", text: "എല്ലാ സ്ഥലങ്ങളും നമ്മുടെ വീട്, എല്ലാവരും നമ്മുടെ ബന്ധു" },
    { code: "bn", script: "Bengali", text: "সব জায়গা আমাদের বাড়ি, সবাই আমাদের আত্মীয়" },
    { code: "mr", script: "Marathi", text: "सर्व ठिकाणे आमचे घर आहेत, सर्व लोक आमचे नातेवाईक आहेत" },
    { code: "gu", script: "Gujarati", text: "બધા સ્થળો અમારું ઘર છે, દરેક વ્યક્તિ અમારો સગો છે" },
    { code: "pa", script: "Punjabi", text: "ਹਰ ਥਾਂ ਸਾਡਾ ਘਰ ਹੈ, ਹਰ ਕੋਈ ਸਾਡਾ ਰਿਸ਼ਤੇਦਾਰ ਹੈ" },
    { code: "or", script: "Odia", text: "ସବୁ ଜାଗା ଆମର ଘର, ସମସ୍ତେ ଆମର ସମ୍ପର୍କୀୟ" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % languages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <div className="mt-2 h-10 overflow-hidden relative">
      <div className="flex flex-col">
        {languages.map((lang, index) => (
          <div
            key={lang.code}
            className={`transition-opacity duration-500 flex items-center justify-center ${
              index === activeIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <p className="text-seyall-accent font-medium text-lg md:text-xl">
              <span className="font-space">{lang.text}</span>
              <span className="text-white/60 text-xs ml-2">({lang.script})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLanguageSlogan;

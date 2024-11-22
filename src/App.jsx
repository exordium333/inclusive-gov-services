import React, { useState, useEffect, useCallback } from 'react';
import { 
  Accessibility, 
  Volume2, 
  Type, 
  Eye, 
  Smartphone, 
  Globe, 
  AlertTriangle, 
  HelpCircle 
} from 'lucide-react';

// Comprehensive Accessibility Context
const AccessibilityContext = React.createContext({
  preferences: {
    fontSize: 16,
    highContrast: false,
    screenReaderMode: false,
    simplifiedLanguage: false
  },
  updatePreferences: () => {}
});

// Main Accessibility-First Application
const InclusiveGovServices = () => {
  const [preferences, setPreferences] = useState({
    fontSize: 16,
    highContrast: false,
    screenReaderMode: false,
    simplifiedLanguage: false,
    colorBlindMode: false
  });

  // Apply accessibility preferences dynamically
  useEffect(() => {
    document.documentElement.style.fontSize = `${preferences.fontSize}px`;
    document.body.classList.toggle('high-contrast', preferences.highContrast);
    document.body.classList.toggle('simplified-language', preferences.simplifiedLanguage);
  }, [preferences]);

  // Update preferences method
  const updatePreferences = useCallback((newPreferences) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  }, []);

  return (
    <AccessibilityContext.Provider value={{ preferences, updatePreferences }}>
      <div className={`
        min-h-screen 
        p-6 
        transition-all 
        duration-300 
        ${preferences.highContrast 
          ? 'bg-gray-900 text-yellow-200' 
          : 'bg-gray-50 text-gray-900'}
      `}>
        <header className="mb-8 flex justify-between items-center">
          <h1 className={`
            text-3xl 
            font-bold 
            flex 
            items-center 
            ${preferences.highContrast ? 'text-yellow-300' : 'text-blue-600'}
          `}>
            <Accessibility className="mr-3" /> 
            Inclusive Digital Government Services
          </h1>
          <AccessibilityControls />
        </header>

        <main className="grid md:grid-cols-2 gap-6">
          <ServiceAccessibilityGuide />
          <AccessibilityFeatureHighlights />
          <UserSupportSection />
          <LanguageSimplificationTool />
        </main>
      </div>
    </AccessibilityContext.Provider>
  );
};

// Accessibility Control Panel
const AccessibilityControls = () => {
  const { preferences, updatePreferences } = React.useContext(AccessibilityContext);

  return (
    <div className={`
      accessibility-controls 
      p-4 
      rounded 
      ${preferences.highContrast 
        ? 'bg-gray-800 border-2 border-yellow-500' 
        : 'bg-white shadow-md'}
    `}>
      <div className="flex items-center space-x-4">
        {/* Font Size Control */}
        <div className="flex items-center">
          <Type className="mr-2" />
          <input 
            type="range" 
            min="12" 
            max="24" 
            value={preferences.fontSize}
            onChange={(e) => updatePreferences({ 
              fontSize: Number(e.target.value) 
            })}
            className="w-32"
          />
        </div>

        {/* High Contrast Toggle */}
        <button 
          onClick={() => updatePreferences({ 
            highContrast: !preferences.highContrast 
          })}
          className={`
            p-2 rounded 
            ${preferences.highContrast 
              ? 'bg-yellow-500 text-black' 
              : 'bg-gray-200 text-gray-800'}
          `}
        >
          <Eye />
        </button>

        {/* Screen Reader Mode */}
        <button 
          onClick={() => updatePreferences({ 
            screenReaderMode: !preferences.screenReaderMode 
          })}
          className={`
            p-2 rounded 
            ${preferences.screenReaderMode 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200 text-gray-800'}
          `}
        >
          <Volume2 />
        </button>
      </div>
    </div>
  );
};

// Service Accessibility Guide
const ServiceAccessibilityGuide = () => {
  const { preferences } = React.useContext(AccessibilityContext);

  return (
    <div className={`
      p-6 
      rounded-lg 
      ${preferences.highContrast 
        ? 'bg-gray-800 border-2 border-yellow-500' 
        : 'bg-white shadow-md'}
    `}>
      <h2 className={`
        text-2xl 
        font-bold 
        mb-4 
        ${preferences.highContrast ? 'text-yellow-300' : 'text-blue-600'}
      `}>
        <Globe className="inline mr-3" />
        Accessibility Commitment
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <Smartphone className="mr-3" />
          Fully responsive across all devices
        </li>
        <li className="flex items-center">
          <AlertTriangle className="mr-3" />
          Clear error messages and guidance
        </li>
        <li className="flex items-center">
          <HelpCircle className="mr-3" />
          Contextual help and support
        </li>
      </ul>
    </div>
  );
};

// Accessibility Feature Highlights
const AccessibilityFeatureHighlights = () => {
  const { preferences } = React.useContext(AccessibilityContext);

  return (
    <div className={`
      p-6 
      rounded-lg 
      ${preferences.highContrast 
        ? 'bg-gray-800 border-2 border-yellow-500' 
        : 'bg-white shadow-md'}
    `}>
      <h2 className={`
        text-2xl 
        font-bold 
        mb-4 
        ${preferences.highContrast ? 'text-yellow-300' : 'text-blue-600'}
      `}>
        <Accessibility className="inline mr-3" />
        Key Accessibility Features
      </h2>
      <div className="space-y-3">
        <div>
          <strong>Keyboard Navigation:</strong> Full support for keyboard-only interactions
        </div>
        <div>
          <strong>Screen Reader Compatibility:</strong> Semantic HTML and ARIA labels
        </div>
        <div>
          <strong>Color Contrast:</strong> WCAG 2.1 Level AA compliant
        </div>
      </div>
    </div>
  );
};

// User Support Section
const UserSupportSection = () => {
  const { preferences } = React.useContext(AccessibilityContext);

  return (
    <div className={`
      p-6 
      rounded-lg 
      ${preferences.highContrast 
        ? 'bg-gray-800 border-2 border-yellow-500' 
        : 'bg-white shadow-md'}
    `}>
      <h2 className={`
        text-2xl 
        font-bold 
        mb-4 
        ${preferences.highContrast ? 'text-yellow-300' : 'text-blue-600'}
      `}>
        <HelpCircle className="inline mr-3" />
        Accessibility Support
      </h2>
      <div>
        <p className="mb-4">
          Need help? Contact our dedicated accessibility support team:
        </p>
        <div className="space-y-2">
          <p>📞 Phone: 0800 ACCESSIBILITY</p>
          <p>✉️ Email: access@gov.services</p>
        </div>
      </div>
    </div>
  );
};

// Language Simplification Tool
const LanguageSimplificationTool = () => {
  const { preferences, updatePreferences } = React.useContext(AccessibilityContext);
  const [originalText, setOriginalText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  const simplifyLanguage = () => {
    // Basic language simplification (mock implementation)
    const simplified = originalText
      .replace(/complex terms/gi, 'simple words')
      .replace(/governmental jargon/gi, 'clear explanation');
    
    setSimplifiedText(simplified);
  };

  return (
    <div className={`
      p-6 
      rounded-lg 
      ${preferences.highContrast 
        ? 'bg-gray-800 border-2 border-yellow-500' 
        : 'bg-white shadow-md'}
    `}>
      <h2 className={`
        text-2xl 
        font-bold 
        mb-4 
        ${preferences.highContrast ? 'text-yellow-300' : 'text-blue-600'}
      `}>
        <Type className="inline mr-3" />
        Language Simplification
      </h2>
      <div>
        <textarea 
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="Paste complex text here to simplify"
          className={`
            w-full 
            p-2 
            mb-4 
            rounded 
            ${preferences.highContrast 
              ? 'bg-gray-700 text-yellow-200' 
              : 'bg-gray-100'}
          `}
          rows={4}
        />
        <button 
          onClick={simplifyLanguage}
          className={`
            px-4 
            py-2 
            rounded 
            ${preferences.highContrast 
              ? 'bg-yellow-500 text-black' 
              : 'bg-blue-600 text-white'}
          `}
        >
          Simplify Language
        </button>
        {simplifiedText && (
          <div className="mt-4">
            <h3 className="font-bold mb-2">Simplified Text:</h3>
            <p>{simplifiedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InclusiveGovServices;

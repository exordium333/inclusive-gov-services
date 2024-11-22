import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';

// Import icons from lucide-react if available, or use emoji fallbacks
let Accessibility = () => '♿';
let Volume2 = () => '🔊';
let Type = () => '📝';
let Eye = () => '👁️';
let Smartphone = () => '📱';
let Globe = () => '🌐';
let AlertTriangle = () => '⚠️';
let HelpCircle = () => '❓';

// Try to import lucide icons if available
try {
  const lucide = require('lucide-react');
  ({ Accessibility, Volume2, Type, Eye, Smartphone, Globe, AlertTriangle, HelpCircle } = lucide);
} catch (e) {
  console.log('Using emoji fallbacks for icons');
}

// Create Accessibility Context
const AccessibilityContext = createContext({
  preferences: {
    fontSize: 16,
    highContrast: false,
    screenReaderMode: false,
    simplifiedLanguage: false
  },
  updatePreferences: () => {}
});

// Accessibility Control Panel Component
const AccessibilityControls = () => {
  const { preferences, updatePreferences } = useContext(AccessibilityContext);

  return (
    <div className="accessibility-controls p-4 rounded"
         style={{
           backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
           border: preferences.highContrast ? '2px solid #ffd700' : 'none',
           boxShadow: preferences.highContrast ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
         }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Type />
          <input
            type="range"
            min="12"
            max="24"
            value={preferences.fontSize}
            onChange={(e) => updatePreferences({ fontSize: Number(e.target.value) })}
            style={{ width: '128px', marginLeft: '8px' }}
          />
        </div>

        <button
          onClick={() => updatePreferences({ highContrast: !preferences.highContrast })}
          style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#ffd700' : '#e2e8f0',
            color: preferences.highContrast ? 'black' : '#1a202c'
          }}
        >
          <Eye />
        </button>

        <button
          onClick={() => updatePreferences({ screenReaderMode: !preferences.screenReaderMode })}
          style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: preferences.screenReaderMode ? '#48bb78' : '#e2e8f0',
            color: preferences.screenReaderMode ? 'white' : '#1a202c'
          }}
        >
          <Volume2 />
        </button>
      </div>
    </div>
  );
};

// Service Accessibility Guide Component
const ServiceAccessibilityGuide = () => {
  const { preferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : 'none',
      boxShadow: preferences.highContrast ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: preferences.highContrast ? '#ffd700' : '#2563eb',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Globe /> Accessibility Commitment
      </h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Smartphone /> Fully responsive across all devices
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertTriangle /> Clear error messages and guidance
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <HelpCircle /> Contextual help and support
        </li>
      </ul>
    </div>
  );
};

// Accessibility Feature Highlights Component
const AccessibilityFeatureHighlights = () => {
  const { preferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : 'none',
      boxShadow: preferences.highContrast ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: preferences.highContrast ? '#ffd700' : '#2563eb',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Accessibility /> Key Accessibility Features
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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

// User Support Section Component
const UserSupportSection = () => {
  const { preferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : 'none',
      boxShadow: preferences.highContrast ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: preferences.highContrast ? '#ffd700' : '#2563eb',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <HelpCircle /> Accessibility Support
      </h2>
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Need help? Contact our dedicated accessibility support team:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p>📞 Phone: 0800 ACCESSIBILITY</p>
          <p>✉️ Email: access@gov.services</p>
        </div>
      </div>
    </div>
  );
};

// Language Simplification Tool Component
const LanguageSimplificationTool = () => {
  const { preferences } = useContext(AccessibilityContext);
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
    <div style={{
      padding: '1.5rem',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : 'none',
      boxShadow: preferences.highContrast ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        color: preferences.highContrast ? '#ffd700' : '#2563eb',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <Type /> Language Simplification
      </h2>
      <div>
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="Paste complex text here to simplify"
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#333' : '#f1f5f9',
            color: preferences.highContrast ? '#ffd700' : 'inherit'
          }}
          rows={4}
        />
        <button
          onClick={simplifyLanguage}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#ffd700' : '#2563eb',
            color: preferences.highContrast ? 'black' : 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Simplify Language
        </button>
        {simplifiedText && (
          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Simplified Text:</h3>
            <p>{simplifiedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const InclusiveGovServices = () => {
  const [preferences, setPreferences] = useState({
    fontSize: 16,
    highContrast: false,
    screenReaderMode: false,
    simplifiedLanguage: false,
    colorBlindMode: false
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${preferences.fontSize}px`;
  }, [preferences.fontSize]);

  const updatePreferences = useCallback((newPreferences) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  }, []);

  return (
    <AccessibilityContext.Provider value={{ preferences, updatePreferences }}>
      <div style={{
        minHeight: '100vh',
        padding: '1.5rem',
        transition: 'all 300ms',
        backgroundColor: preferences.highContrast ? '#1a1a1a' : '#f8fafc',
        color: preferences.highContrast ? '#ffd700' : '#1a202c'
      }}>
        <header style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: preferences.highContrast ? '#ffd700' : '#2563eb'
          }}>
            <Accessibility /> 
            Inclusive Digital Government Services
          </h1>
          <AccessibilityControls />
        </header>

        <main style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          <ServiceAccessibilityGuide />
          <AccessibilityFeatureHighlights />
          <UserSupportSection />
          <LanguageSimplificationTool />
        </main>
      </div>
    </AccessibilityContext.Provider>
  );
};

export default InclusiveGovServices;

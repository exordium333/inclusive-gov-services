import React, { useState, useEffect, createContext, useContext } from 'react';

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

// Accessibility Control Panel
const AccessibilityControls = () => {
  const { preferences, updatePreferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : '1px solid #e0e0e0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>📝</span>
          <input
            type="range"
            min="12"
            max="24"
            value={preferences.fontSize}
            onChange={(e) => updatePreferences({ fontSize: Number(e.target.value) })}
            style={{ width: '128px' }}
          />
        </div>

        <button
          onClick={() => updatePreferences({ highContrast: !preferences.highContrast })}
          style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#ffd700' : '#e2e8f0',
            color: preferences.highContrast ? 'black' : '#1a202c',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          👁️ Contrast
        </button>

        <button
          onClick={() => updatePreferences({ screenReaderMode: !preferences.screenReaderMode })}
          style={{
            padding: '8px',
            borderRadius: '4px',
            backgroundColor: preferences.screenReaderMode ? '#48bb78' : '#e2e8f0',
            color: preferences.screenReaderMode ? 'white' : '#1a202c',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          🔊 Screen Reader
        </button>
      </div>
    </div>
  );
};

// Service Guide Section
const ServiceGuide = () => {
  const { preferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : '1px solid #e0e0e0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: preferences.highContrast ? '#ffd700' : '#2563eb'
      }}>
        🌐 Accessibility Features
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          📱 Fully responsive design
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          ⚠️ Clear error messages
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          ❓ Contextual help
        </li>
      </ul>
    </div>
  );
};

// Support Section
const SupportSection = () => {
  const { preferences } = useContext(AccessibilityContext);

  return (
    <div style={{
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : '1px solid #e0e0e0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: preferences.highContrast ? '#ffd700' : '#2563eb'
      }}>
        ❓ Support
      </h2>
      <div>
        <p style={{ marginBottom: '16px' }}>
          Need assistance? Contact our support team:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p>📞 Phone: 0800 ACCESSIBILITY</p>
          <p>✉️ Email: access@gov.services</p>
        </div>
      </div>
    </div>
  );
};

// Language Tool Section
const LanguageTool = () => {
  const { preferences } = useContext(AccessibilityContext);
  const [originalText, setOriginalText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  const simplifyLanguage = () => {
    const simplified = originalText
      .replace(/complex/gi, 'simple')
      .replace(/difficult/gi, 'easy');
    setSimplifiedText(simplified);
  };

  return (
    <div style={{
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: preferences.highContrast ? '#1a1a1a' : 'white',
      border: preferences.highContrast ? '2px solid #ffd700' : '1px solid #e0e0e0'
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: preferences.highContrast ? '#ffd700' : '#2563eb'
      }}>
        📝 Simplify Language
      </h2>
      <div>
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="Enter text to simplify"
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '16px',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#333' : '#f1f5f9',
            color: preferences.highContrast ? '#ffd700' : 'inherit',
            border: '1px solid #e0e0e0'
          }}
          rows={4}
        />
        <button
          onClick={simplifyLanguage}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: preferences.highContrast ? '#ffd700' : '#2563eb',
            color: preferences.highContrast ? 'black' : 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Simplify
        </button>
        {simplifiedText && (
          <div style={{ marginTop: '16px' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Simplified Text:</h3>
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
    simplifiedLanguage: false
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${preferences.fontSize}px`;
  }, [preferences.fontSize]);

  const updatePreferences = (newPreferences) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  };

  return (
    <AccessibilityContext.Provider value={{ preferences, updatePreferences }}>
      <div style={{
        minHeight: '100vh',
        padding: '24px',
        backgroundColor: preferences.highContrast ? '#1a1a1a' : '#f8fafc',
        color: preferences.highContrast ? '#ffd700' : '#1a202c',
        transition: 'all 300ms'
      }}>
        <header style={{
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: preferences.highContrast ? '#ffd700' : '#2563eb',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            ♿ Inclusive Government Services
          </h1>
          <AccessibilityControls />
        </header>

        <main style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <ServiceGuide />
          <SupportSection />
          <LanguageTool />
        </main>
      </div>
    </AccessibilityContext.Provider>
  );
};

export default InclusiveGovServices;

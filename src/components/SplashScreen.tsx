import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Play className="w-16 h-16 text-purple-500" />
          <span className="text-4xl font-bold text-white">Like Look TV</span>
        </div>
        <p className="text-gray-400 text-sm">Desenvolvido por Like Look Solutions</p>
      </div>
    </div>
  );
}

export default SplashScreen;
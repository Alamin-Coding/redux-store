import React, { useState, useEffect } from 'react';

export default function PageLoadingEffects() {
  const [currentLoader, setCurrentLoader] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentLoader]);

  const loaders = [
    { id: 1, name: "Spinner Dots" },
    { id: 2, name: "Progress Bar" },
    { id: 3, name: "Pulse Circle" },
    { id: 4, name: "Bouncing Balls" },
    { id: 5, name: "Wave Animation" },
    { id: 6, name: "Skeleton Loading" },
  ];

  const handleLoaderChange = (id) => {
    setCurrentLoader(id);
    setIsLoading(true);
  };

  // Spinner Dots Loader
  const SpinnerDots = () => (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex space-x-2 justify-center items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="mt-4 text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );

  // Progress Bar Loader
  const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center w-80">
          <div className="mb-6">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">Loading</h2>
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-300">{progress}%</p>
        </div>
      </div>
    );
  };

  // Pulse Circle Loader
  const PulseCircle = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 bg-white rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-2 left-2 w-16 h-16 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-full animate-bounce"></div>
        </div>
        <p className="mt-6 text-white text-xl font-semibold">Please wait...</p>
      </div>
    </div>
  );

  // Bouncing Balls Loader
const BouncingBalls = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex space-x-2 justify-center items-end h-16 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
        </div>
        <div className="text-green-400 text-lg font-mono">
          <span className="animate-pulse">Loading</span>
          <span className="animate-ping">...</span>
        </div>
      </div>
    </div>
  );

  // Wave Animation Loader
  const WaveAnimation = () => (
    <div className="fixed inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex space-x-1 justify-center items-center h-16 mb-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-white rounded-full animate-pulse"
              style={{
                height: `${20 + Math.sin(i * 0.5) * 20}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>
        <h2 className="text-white text-2xl font-bold mb-2">Getting things ready</h2>
        <p className="text-blue-100">This won't take long...</p>
      </div>
    </div>
  );

  // Skeleton Loading
  const SkeletonLoading = () => (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center mb-8">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
        
        {/* Skeleton Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow animate-pulse">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Main content when not loading
  const MainContent = () => (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Page Loading Effects Demo</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Choose a Loading Effect:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {loaders.map((loader) => (
              <button
                key={loader.id}
                onClick={() => handleLoaderChange(loader.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  currentLoader === loader.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                {loader.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sample Content</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Features:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Multiple loading animation styles</li>
                <li>• Responsive design</li>
                <li>• Smooth transitions</li>
                <li>• Customizable colors</li>
                <li>• Easy to implement</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Use Cases:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Page initialization</li>
                <li>• Data fetching</li>
                <li>• Form submission</li>
                <li>• Image loading</li>
                <li>• Content updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate loader or main content
  if (!isLoading) {
    return <MainContent />;
  }

  switch (currentLoader) {
    case 1:
      return <SpinnerDots />;
    case 2:
      return <ProgressBar />;
    case 3:
      return <PulseCircle />;
    case 4:
      return <BouncingBalls />;
    case 5:
      return <WaveAnimation />;
    case 6:
      return <SkeletonLoading />;
    default:
      return <SpinnerDots />;
  }
}

export const BouncingBalls = () => (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex space-x-2 justify-center items-end h-16 mb-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-green-400 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
        </div>
        <div className="text-green-400 text-lg font-mono">
          <span className="animate-pulse">Loading</span>
          <span className="animate-ping">...</span>
        </div>
      </div>
    </div>
  );

export   const SkeletonLoading = () => (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-center mb-8">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
        
        {/* Skeleton Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow animate-pulse">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
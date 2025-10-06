import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const ServicesSectionTitle = () => {
  return (
    <div className="text-center mb-12 sm:mb-16 md:mb-20 relative pt-4 pb-10 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-100/30 via-orange-50/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated corner decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative top elements */}
      <div className="relative mb-10">
        {/* Elegant top border with glow */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-lg shadow-amber-500/50"></div>
        
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-full border-2 border-amber-300/50 shadow-2xl backdrop-blur-sm relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 animate-pulse" />
          <span className="text-sm sm:text-base font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-amber-900 uppercase relative">
            خدمات مميزة
          </span>
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Main title with enhanced effects */}
      <div className="relative space-y-2 sm:space-y-3 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight relative">
          {/* Shadow text for depth */}
          <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            خدماتنا المميزة
          </span>
          
          {/* Main text */}
          <span className="relative block">
            <span className="block bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent hover:from-amber-600 hover:via-yellow-600 hover:to-orange-600 transition-all duration-500" style={{ lineHeight: '1.1', textShadow: '0 0 80px rgba(251, 191, 36, 0.3)' }}>
              خدماتنا
            </span>
            <span className="block bg-gradient-to-br from-orange-500 via-amber-600 to-yellow-600 bg-clip-text text-transparent hover:from-orange-600 hover:via-amber-700 hover:to-yellow-700 transition-all duration-500" style={{ lineHeight: '1.1', textShadow: '0 0 80px rgba(251, 146, 60, 0.3)' }}>
              المميزة
            </span>
          </span>
        </h2>
        
        {/* Decorative divider with animation */}
        <div className="flex items-center justify-center gap-6 my-8">
          <div className="relative">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="absolute top-0 right-0 w-4 h-0.5 bg-amber-600 animate-ping"></div>
          </div>
          
          <div className="relative">
            <div className="w-4 h-4 rotate-45 bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/50"></div>
            <div className="absolute inset-0 w-4 h-4 rotate-45 bg-gradient-to-br from-amber-400 to-orange-400 blur-sm animate-pulse"></div>
          </div>
          
          <div className="relative">
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            <div className="absolute top-0 left-0 w-4 h-0.5 bg-amber-600 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Enhanced subtitle */}
      <div className="relative max-w-3xl mx-auto px-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light tracking-wide relative">
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            نقدم لك تجربة 
          </span>
          {' '}
          <span className="relative inline-block mx-1 sm:mx-2 group">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 relative z-10">
              استثنائية وفريدة
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
          {' '}
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            في عالم الدفع الإلكتروني
          </span>
        </p>
        
        {/* Decorative dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-bounce"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
    </div>
  );
};

export default ServicesSectionTitle;

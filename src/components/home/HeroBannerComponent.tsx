'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  Store, 
  Users, 
  Calendar, 
  BookmarkCheck, 
  MessageSquare, 
  Heart,
  UserPlus,
  ArrowRight
} from 'lucide-react';

export function HeroBannerComponent() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-900/15 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#F5ECE0] p-4 sm:p-6 lg:p-8">
      
      {/* MAIN LAYOUT GRID (12 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative z-10 pb-10 lg:pb-12">
        
        {/* LEFT COLUMN: Artisan Studio Photo (Spans 6.5 Columns for maximum impact) */}
        <div className="lg:col-span-6 xl:col-span-7 relative rounded-2xl overflow-hidden shadow-xl border border-amber-900/10 h-[340px] sm:h-[400px] lg:h-[440px] group">
          <Image 
            src="/images/sispace_hero_full_banner.png" 
            alt="Diverse female artisans crafting handmade goods in Doha studio" 
            fill
            priority
            className="object-cover object-left group-hover:scale-102 transition-transform duration-700"
          />
          {/* Subtle soft gradient fade into right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-amber-900/10 pointer-events-none" />
        </div>

        {/* RIGHT HALF CONTAINER (5.5 Columns: Script Header + Phone + Features List) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-0">
          
          {/* 1. SCRIPT HEADING ABOVE PHONE & FEATURES */}
          <div className="text-center lg:text-left pl-0 lg:pl-4 mb-4 relative z-10">
            <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#005B48] font-bold tracking-wide transform -rotate-2 leading-none">
              Your Space
            </h2>
            <h2 className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#005B48] font-bold tracking-wide transform -rotate-2 leading-none mt-1">
              Your Community
            </h2>
            <div className="text-[#005B48] flex justify-center lg:justify-start pl-12 mt-1">
              <Heart className="w-5 h-5 fill-[#005B48] text-[#005B48] animate-pulse" />
            </div>
          </div>

          {/* 2. SIDE-BY-SIDE: SMARTPHONE & FEATURES LIST */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            {/* 3D SMARTPHONE MOCKUP (7 Cols inside right container) */}
            <div className="sm:col-span-7 flex justify-center">
              <div className="relative w-56 sm:w-60 lg:w-64 bg-slate-900 p-2.5 rounded-[38px] shadow-2xl border-4 border-slate-800 ring-1 ring-black/10 hover:scale-[1.01] transition-transform duration-300">
                
                {/* Phone Camera Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
                </div>

                {/* Screen Content */}
                <div className="bg-white rounded-[30px] pt-7 pb-4 px-3.5 overflow-hidden text-slate-800 shadow-inner flex flex-col justify-between min-h-[350px]">
                  
                  {/* Screen Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#3D1466] flex items-center justify-center text-white text-[10px] font-bold">
                        Si
                      </div>
                      <span className="font-extrabold text-slate-900 text-xs tracking-tight">SiSpace</span>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-[9px] font-extrabold text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Qatar
                    </div>
                  </div>

                  {/* Screen Menu Grid (6 Crisp Tiles) */}
                  <div className="grid grid-cols-2 gap-2 my-3">
                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <Home className="w-4 h-4 text-[#005B48]" />
                      <span className="text-[10px] font-bold text-slate-700">Homes</span>
                    </div>

                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <Store className="w-4 h-4 text-[#005B48]" />
                      <span className="text-[10px] font-bold text-slate-700">Businesses</span>
                    </div>

                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <Users className="w-4 h-4 text-[#3D1466]" />
                      <span className="text-[10px] font-bold text-slate-700">Community</span>
                    </div>

                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <Heart className="w-4 h-4 text-[#D81B60]" />
                      <span className="text-[10px] font-bold text-slate-700">Events</span>
                    </div>

                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span className="text-[10px] font-bold text-slate-700">Bookings</span>
                    </div>

                    <div className="p-2 bg-slate-50 hover:bg-fuchsia-50 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-100 transition-colors">
                      <MessageSquare className="w-4 h-4 text-[#005B48]" />
                      <span className="text-[10px] font-bold text-slate-700">Messages</span>
                    </div>
                  </div>

                  {/* Register Button in Screen */}
                  <Link 
                    href="/auth/register" 
                    className="w-full py-2 rounded-xl bg-[#004D40] hover:bg-[#00382E] text-white text-[11px] font-extrabold text-center transition-colors shadow-xs block"
                  >
                    Register Now
                  </Link>

                  {/* Screen Footer */}
                  <div className="pt-2 text-center text-[9px] text-slate-400 border-t border-slate-100 mt-2">
                    Doha • Lusail • Al Wakrah
                  </div>

                </div>
              </div>
            </div>

            {/* FEATURE ITEMS LIST & BADGES (5 Cols inside right container) */}
            <div className="sm:col-span-5 space-y-3 text-slate-900">
              
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center shrink-0">
                    <Home className="w-4 h-4 text-[#005B48]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 leading-none">Showcase</h4>
                    <p className="text-[11px] font-extrabold text-slate-700 mt-0.5">Your Home</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center shrink-0">
                    <Store className="w-4 h-4 text-[#3D1466]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 leading-none">Grow</h4>
                    <p className="text-[11px] font-extrabold text-slate-700 mt-0.5">Your Business</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-50 border border-pink-200/80 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-[#D81B60]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 leading-none">Join</h4>
                    <p className="text-[11px] font-extrabold text-slate-700 mt-0.5">Local Communities</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-slate-900 leading-none">Discover</h4>
                    <p className="text-[11px] font-extrabold text-slate-700 mt-0.5">Events & Activities</p>
                  </div>
                </div>
              </div>

              {/* Teal Register Now Pill Button */}
              <div className="pt-1">
                <Link 
                  href="/auth/register" 
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#004D40] hover:bg-[#00382E] text-white font-extrabold text-[11px] shadow-sm hover:shadow transition-all"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register Now</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* App Store & Google Play Badges */}
              <div className="pt-2 border-t border-amber-900/10 space-y-1">
                <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Available on</p>
                <div className="flex flex-col gap-1.5">
                  <a href="#" className="px-2.5 py-1.5 rounded-lg bg-black text-white flex items-center gap-2 hover:bg-slate-800 transition-colors w-full">
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 170 170">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.9-14.36-6.1-3.32-2.73-7.27-7.46-11.85-14.19-6.3-9.2-11.31-19.78-15.02-31.75-3.71-11.97-5.57-23.23-5.57-33.79 0-14.7 3.65-26.68 10.95-35.95 7.3-9.27 16.51-13.98 27.63-14.13 4.54 0 9.77 1.25 15.68 3.75 5.92 2.5 9.94 3.75 12.06 3.75 1.7 0 5.86-1.32 12.48-3.96 6.62-2.64 11.98-3.83 16.08-3.56 12.44.75 22.39 5.37 29.84 13.86-10.87 6.57-16.18 15.82-15.93 27.75.25 9.4 3.9 17.29 10.95 23.67 7.05 6.38 15.35 9.87 24.9 10.47-2.39 7.04-5.54 14.17-9.45 21.39zM119.22 31.96c0-6.72 2.44-13.25 7.31-19.59 4.88-6.34 11.02-10.4 18.42-12.18.3 1.25.45 2.45.45 3.6 0 6.64-2.57 13.31-7.71 20.01-5.14 6.7-11.3 10.83-18.47 12.39-.31-1.42-.47-2.83-.47-4.23z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[7px] leading-none text-slate-300">Download on the</div>
                      <div className="text-[10px] font-bold leading-tight">App Store</div>
                    </div>
                  </a>

                  <a href="#" className="px-2.5 py-1.5 rounded-lg bg-black text-white flex items-center gap-2 hover:bg-slate-800 transition-colors w-full">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 512 512">
                      <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2z"/>
                      <path fill="#34A853" d="M47 31.2l278.3 203.1L47 480.8z"/>
                      <path fill="#EA4335" d="M325.3 277.7l59.8 34.4L104.6 499z"/>
                      <path fill="#FBBC05" d="M465 256L385.1 210l-59.8 46 59.8 46z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-[7px] leading-none text-slate-300">GET IT ON</div>
                      <div className="text-[10px] font-bold leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 3. BOTTOM QATAR MAROON SWOOSH & DOHA SKYLINE VECTOR */}
      <div className="absolute bottom-0 right-0 left-0 h-14 pointer-events-none overflow-hidden">
        
        {/* Maroon Qatar Flag Ribbon Swoosh */}
        <div className="absolute bottom-0 right-0 w-2/3 sm:w-1/2 h-10 bg-gradient-to-r from-transparent via-[#8A1538] to-[#6D122B] transform skew-y-1 origin-bottom-right opacity-90 rounded-tl-full shadow-lg" />
        
        {/* Skyline Outline SVG overlay */}
        <div className="absolute bottom-1 right-4 z-20 opacity-80">
          <svg className="w-56 sm:w-72 h-10 text-slate-800 stroke-current fill-none stroke-[1.5]" viewBox="0 0 400 80">
            {/* Skyline Buildings */}
            <path d="M 200 70 L 200 40 L 210 30 L 220 40 L 220 70 M 230 70 L 230 20 L 245 10 L 260 20 L 260 70 M 270 70 L 270 35 L 280 25 L 290 35 L 290 70 M 300 70 L 300 15 L 315 5 L 330 15 L 330 70 M 340 70 L 350 45 L 360 70" />
            {/* Dhow Boat */}
            <path d="M 365 65 Q 380 75 395 65 L 390 60 Z M 380 60 L 380 35 L 395 55" />
            {/* Water Line */}
            <path d="M 180 72 Q 290 76 398 72" />
          </svg>
        </div>

      </div>

    </div>
  );
}

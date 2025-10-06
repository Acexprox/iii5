import React, { useState, useEffect } from "react";
import { ShieldCheck, Zap, BadgeCheck, Award, ChevronLeft, Gift, Tags, Percent, Globe, Package } from "lucide-react";
import { motion } from "framer-motion";

/*
  ServiceCardA (Premium v2) — Palette update only
  - المطلوب: تغيير الألوان والتدرجات فقط لتتطابق مع بطاقة I
  - لا تغيير في التخطيط أو الأبعاد أو المحتوى
  - يعتمد على لوحة الألوان الدافئة لبطاقة I (Desert Sand / Burnished Bronze)
*/

const ServiceCardA = () => {
  // Detect mobile screen for responsive strokeWidth
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive strokeWidth: thinner on mobile
  const iconStrokeWidth = isMobile ? 1.5 : 2.5;

  return (
    <div
      data-testid="service-card-a"
      className="relative w-[370px] max-w-[370px] min-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[20px] overflow-hidden"
      style={{
        // خلفية محسّنة متعددة الطبقات مع Mesh Gradient
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 248, 237, 0.95) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(252, 239, 218, 0.9) 0%, transparent 50%),
          radial-gradient(ellipse 800px 500px at 110% -5%, rgba(245, 158, 11, 0.18) 0%, rgba(253, 230, 138, 0.12) 35%, transparent 70%),
          radial-gradient(ellipse 600px 400px at -10% 105%, rgba(214, 167, 86, 0.12) 0%, rgba(180, 83, 9, 0.08) 40%, transparent 70%),
          linear-gradient(135deg, 
            #FFF8ED 0%, 
            #FEFBF3 15%,
            #FCEFDA 40%, 
            #FAF0E0 60%,
            #F6E5CB 85%,
            #F4E3C7 100%
          )
        `,
        boxShadow: `
          0 25px 60px rgba(124, 45, 18, 0.15),
          0 15px 35px rgba(124, 45, 18, 0.10),
          0 8px 20px rgba(124, 45, 18, 0.08),
          inset 0 2px 0 rgba(255, 255, 255, 0.98),
          inset 0 -1px 0 rgba(214, 167, 86, 0.08)
        `,
      }}
    >
      {/* إطار زخرفي محسّن مع تونات برونزية وإضاءة ديناميكية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          boxShadow: `
            inset 0 0 0 1px rgba(181, 129, 46, 0.25),
            inset 0 0 0 2px rgba(214, 167, 86, 0.22),
            inset 0 0 0 3px rgba(255, 248, 237, 0.15),
            0 12px 40px rgba(124, 45, 18, 0.12)
          `,
        }}
      />
      
      {/* طبقة إضاءة علوية ناعمة */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          background: `
            radial-gradient(ellipse 60% 30% at 50% 0%, 
              rgba(255, 255, 255, 0.35) 0%, 
              rgba(255, 248, 237, 0.18) 40%, 
              transparent 70%
            )
          `,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* طبقة ظل سفلية دافئة */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          background: `
            radial-gradient(ellipse 70% 35% at 50% 100%, 
              rgba(180, 83, 9, 0.08) 0%, 
              rgba(124, 45, 18, 0.05) 40%, 
              transparent 70%
            )
          `,
        }}
      />

      {/* دبابيس الزوايا - بدون ظلال */}
      <div aria-hidden="true" className="absolute inset-0">
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} m-[10px] w-4 h-4 rounded-sm`}
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(255, 232, 179, 0.25) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(214, 167, 86, 0.20) 0%, 
                  rgba(180, 83, 9, 0.35) 50%, 
                  rgba(214, 167, 86, 0.20) 100%
                ), 
                linear-gradient(180deg, #2A2418 0%, #1F1910 100%)
              `,
              border: "2px solid rgba(214, 167, 86, 0.90)",
              boxShadow: `
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                inset 0 0 8px rgba(214, 167, 86, 0.20)
              `,
            }}
          />
        ))}
      </div>

      {/* عمود معدني فخم مع انعكاسات ثلاثية الأبعاد */}
      <div
        aria-hidden="true"
        className="absolute top-4 bottom-4 rounded-full"
        style={{ width: '3.5px', opacity: 0.98, right: '16px' }}
      >
        {/* هالة خارجية متوهجة ثلاثية */}
        <span
          aria-hidden="true"
          className="absolute -inset-[5px] rounded-full"
          style={{
            background: `
              radial-gradient(ellipse 200% 100% at 50% 50%, 
                rgba(214, 167, 86, 0.25) 0%, 
                rgba(214, 167, 86, 0.15) 30%,
                rgba(180, 83, 9, 0.10) 60%,
                transparent 100%
              )
            `,
            filter: "blur(4px)",
          }}
        />
        
        {/* هالة وسطى للعمق */}
        <span
          aria-hidden="true"
          className="absolute -inset-[2px] rounded-full"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(214, 167, 86, 0.20) 0%, 
                rgba(214, 167, 86, 0.15) 50%,
                rgba(180, 83, 9, 0.10) 100%
              )
            `,
            filter: "blur(2px)",
          }}
        />
        
        {/* جسم العمود الرئيسي - تدرجات متقدمة */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              linear-gradient(180deg, 
                #F4E4B8 0%, 
                #EBCB88 8%,
                #D9AF5A 25%, 
                #C99843 45%, 
                #B9852F 65%,
                #C99843 80%, 
                #E6C07A 92%,
                #F4E4B8 100%
              ),
              linear-gradient(90deg, 
                rgba(255, 255, 255, 0.90) 0%, 
                rgba(255, 255, 255, 0.45) 20%, 
                rgba(255, 255, 255, 0.15) 35%,
                rgba(0, 0, 0, 0.08) 50%, 
                rgba(0, 0, 0, 0.15) 65%,
                rgba(255, 255, 255, 0.25) 80%,
                rgba(255, 255, 255, 0.65) 100%
              )
            `,
            backgroundBlendMode: 'overlay, normal',
            boxShadow: `
              0 10px 22px rgba(212, 175, 55, 0.22),
              0 5px 12px rgba(180, 83, 9, 0.15),
              inset 0 1.5px 0 rgba(255, 255, 255, 0.90),
              inset 0 -1px 0 rgba(124, 45, 18, 0.20),
              inset 2px 0 3px rgba(255, 255, 255, 0.40)
            `,
            border: "1px solid rgba(214, 167, 86, 0.40)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 6%, black 94%, transparent 100%)",
            filter: "saturate(108%) brightness(104%)",
          }}
        />
        
        {/* انعكاس ضوئي قوي - يسار */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[1px] rounded-full"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(255, 255, 255, 0.85) 15%,
                rgba(255, 255, 255, 0.55) 35%,
                rgba(255, 255, 255, 0.30) 50%,
                rgba(255, 255, 255, 0.55) 65%,
                rgba(255, 255, 255, 0.85) 85%,
                rgba(255, 255, 255, 0.95) 100%
              )
            `,
            mixBlendMode: "screen",
            opacity: 0.75,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            transform: "translateX(-0.5px)",
          }}
        />
        
        {/* لمعة مركزية متدرجة */}
        <span
          aria-hidden="true"
          className="absolute inset-[0.5px] rounded-full"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(255, 255, 255, 0.80) 0%,
                rgba(255, 255, 255, 0.50) 20%,
                rgba(255, 255, 255, 0.20) 40%,
                rgba(255, 255, 255, 0.10) 50%,
                rgba(255, 255, 255, 0.20) 60%,
                rgba(255, 255, 255, 0.50) 80%,
                rgba(255, 255, 255, 0.80) 100%
              )
            `,
            mixBlendMode: "soft-light",
            opacity: 0.70,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        />
        
        {/* نسيج معدني دقيق محسّن */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              repeating-linear-gradient(180deg, 
                rgba(255, 255, 255, 0.08) 0px, 
                rgba(255, 255, 255, 0.08) 1.5px, 
                rgba(0, 0, 0, 0.04) 1.5px, 
                rgba(0, 0, 0, 0.04) 3px
              )
            `,
            opacity: 0.18,
            mixBlendMode: 'overlay',
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
        
        {/* توهج داخلي خفيف */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `
              inset 0 0 8px rgba(214, 167, 86, 0.15),
              inset 0 0 4px rgba(255, 248, 237, 0.10)
            `,
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        />
      </div>

      {/* الشريط العلوي - عنوان فرعي + عنوان */}
      <div className="relative z-10 px-6 pt-6" dir="rtl">
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            aria-label="شارة خدمة البطاقات الإلكترونية المميزة"
            data-testid="service-card-a-subtitle-badge"
            className="inline-flex items-center gap-1 rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#3F2D17",
              background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
              boxShadow:
                "0 2px 6px rgba(120,53,15,0.18), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 2px 8px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(255,255,255,0.6)",
              border: "1px solid rgba(214,167,86,0.45)",
              padding: "8px 14px",
              minWidth: "72px",
              minHeight: "30px",
              position: "relative",
              overflow: "hidden",
              transform: "translateX(-4px)"
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0.08))",
                mixBlendMode: "screen",
                opacity: 0.85,
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "2px",
                borderRadius: "9999px",
                boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.35), inset -2px -2px 6px rgba(0,0,0,0.08)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "9999px",
                background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                opacity: 0.10,
                filter: "saturate(110%)",
                pointerEvents: "none"
              }}
            />
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "2px",
                left: "8px",
                width: "42%",
                height: "38%",
                borderRadius: "9999px",
                transform: "rotate(-18deg)",
                background: "linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                filter: "blur(1px)",
                opacity: 0.65,
                pointerEvents: "none"
              }}
            />
          </button>
          <div
            aria-hidden="true"
            className="h-px flex-1 mx-4 relative"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #B8582F 15%, #B8582F 85%, transparent 100%)",
              boxShadow: `
                0 0 10px rgba(184, 88, 47, 0.5),
                0 1px 3px rgba(139, 52, 32, 0.4),
                0 -1px 2px rgba(220, 139, 94, 0.3)
              `,
              height: "1.5px",
            }}
          />
          <span 
            className="text-[11px] text-gray-400/80 font-semibold"
            aria-label="البطاقة A"
          >
            CARD A
          </span>
        </div>

        <div className="flex items-center gap-0 mt-6" style={{ alignItems: "center" }}>
          {/* خط رأسي صغير احترافي */}
          <div
            aria-hidden="true"
            className="rounded-full flex-shrink-0"
            style={{
              width: "7px",
              height: "26px",
              background: "linear-gradient(180deg, #DC8B5E 0%, #B8582F 20%, #8B3420 40%, #6B2418 50%, #8B3420 60%, #B8582F 80%, #DC8B5E 100%)",
              boxShadow: `
                0 0 15px rgba(184, 88, 47, 0.5),
                0 4px 10px rgba(107, 36, 24, 0.4),
                0 2px 5px rgba(139, 52, 32, 0.6),
                inset 2px 0 2px rgba(255, 200, 160, 0.4),
                inset -2px 0 3px rgba(50, 20, 15, 0.5),
                inset 0 1px 1px rgba(255, 220, 190, 0.3),
                inset 0 -1px 2px rgba(40, 15, 10, 0.4)
              `,
              marginRight: "-1px",
              transform: "translateY(-3px)",
              border: "0.5px solid rgba(139, 52, 32, 0.3)",
            }}
          />
          
          <h3
            data-testid="service-card-a-title"
            className="text-[26px] font-black tracking-tight"
            style={{
              background: "linear-gradient(135deg, #B8582F 0%, #C97D33 25%, #D69146 50%, #C97D33 75%, #B8582F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              WebkitTextStroke: "0.5px rgba(139, 52, 32, 0.3)",
              filter: `
                drop-shadow(0 1px 1px rgba(255,255,255,0.8))
                drop-shadow(0 2px 4px rgba(139,52,32,0.5))
                drop-shadow(0 3px 8px rgba(139,52,32,0.3))
              `,
              lineHeight: "32px",
              display: "flex",
              alignItems: "center",
            }}
          >
            بطاقات إلكترونية
          </h3>
        </div>
      </div>

      {/* الجسم المقسوم: سكة معلومات يمين + سطح بطولي يسار */}
      <div className="relative z-10 grid grid-cols-[1fr_1.05fr] gap-1.5 px-6 mt-4" dir="rtl">
        {/* يمين: كتل المعلومات */}
        <div
          data-testid="service-card-a-info"
          className="flex flex-col gap-3 pr-1"
        >
          {/* كتلة 1 - فئات متعددة */}
          <div
            role="article"
            aria-label="معلومات عن فئات البطاقات المتعددة"
            tabIndex="0"
            className="rounded-xl p-3 pb-5 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] active:scale-98"
            style={{
              height: "170px",
              minHeight: "170px",
              maxHeight: "170px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: `
                radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.88) 100%),
                linear-gradient(135deg, rgba(255, 248, 237, 0.95) 0%, rgba(255, 255, 255, 0.90) 100%)
              `,
              boxShadow: `
                0 8px 20px rgba(120, 53, 15, 0.04),
                0 4px 12px rgba(120, 53, 15, 0.035),
                0 2px 6px rgba(124, 45, 18, 0.03),
                0 1px 3px rgba(180, 83, 9, 0.02),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                inset 0 0 20px rgba(255, 248, 237, 0.11)
              `,
              border: "1px solid rgba(214, 167, 86, 0.50)",
              transform: "translateZ(0)",
              willChange: "transform",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 18px 45px rgba(120, 53, 15, 0.09),
                0 12px 32px rgba(120, 53, 15, 0.08),
                0 8px 22px rgba(124, 45, 18, 0.07),
                0 4px 12px rgba(180, 83, 9, 0.05),
                0 0 0 3px rgba(214, 167, 86, 0.14),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 0 35px rgba(255, 248, 237, 0.20),
                inset 0 0 65px rgba(214, 167, 86, 0.06)
              `;
              e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.75)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 8px 20px rgba(120, 53, 15, 0.04),
                0 4px 12px rgba(120, 53, 15, 0.035),
                0 2px 6px rgba(124, 45, 18, 0.03),
                0 1px 3px rgba(180, 83, 9, 0.02),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                inset 0 0 20px rgba(255, 248, 237, 0.11)
              `;
              e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.50)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = `
                0 5px 16px rgba(120, 53, 15, 0.07),
                0 2px 9px rgba(124, 45, 18, 0.06),
                inset 0 3px 10px rgba(120, 53, 15, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.95)
              `;
              e.currentTarget.style.transform = "translateY(0.5px)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = `
                0 18px 45px rgba(120, 53, 15, 0.09),
                0 12px 32px rgba(120, 53, 15, 0.08),
                0 8px 22px rgba(124, 45, 18, 0.07),
                0 4px 12px rgba(180, 83, 9, 0.05),
                0 0 0 3px rgba(214, 167, 86, 0.14),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 0 35px rgba(255, 248, 237, 0.20),
                inset 0 0 65px rgba(214, 167, 86, 0.06)
              `;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Tags size={15} style={{ color: "#8B6914", strokeWidth: 2.5, flexShrink: 0 }} />
              <div className="text-[14px] font-extrabold leading-tight" style={{ color: "#3A2F1A" }}>
                فئات متعددة
              </div>
            </div>
            <div 
              className="h-[2px] w-[35px] rounded-full mb-1.5"
              style={{
                background: "linear-gradient(90deg, #D6A756 0%, #E6C07A 20%, #F4E4B8 50%, #E6C07A 80%, #D6A756 100%)",
                boxShadow: "0 0 12px rgba(214, 167, 86, 0.9), 0 2px 4px rgba(214, 167, 86, 0.6), 0 -1px 3px rgba(230, 192, 122, 0.7)",
                minHeight: "2px",
                flexShrink: 0
              }}
            />
            <div className="text-[12px] leading-snug font-semibold" style={{ color: "#6B4E2E" }}>
              مجموعة واسعة من البطاقات الإلكترونية مسبقة الدفع تشمل: بطاقات مالية، بطاقات ألعاب، وبطاقات تسوق للمتاجر الإلكترونية العالمية
            </div>
          </div>
          
          {/* كتلة 2 - توافق عالمي */}
          <div
            role="article"
            aria-label="معلومات عن التوافق العالمي للبطاقات"
            tabIndex="0"
            className="rounded-xl p-3 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] active:scale-98"
            style={{
              height: "125px",
              minHeight: "125px",
              maxHeight: "125px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: `
                radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.88) 100%),
                linear-gradient(135deg, rgba(255, 248, 237, 0.95) 0%, rgba(255, 255, 255, 0.90) 100%)
              `,
              boxShadow: `
                0 8px 20px rgba(120, 53, 15, 0.04),
                0 4px 12px rgba(120, 53, 15, 0.035),
                0 2px 6px rgba(124, 45, 18, 0.03),
                0 1px 3px rgba(180, 83, 9, 0.02),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                inset 0 0 20px rgba(255, 248, 237, 0.11)
              `,
              border: "1px solid rgba(214, 167, 86, 0.50)",
              transform: "translateZ(0) translateY(0px)",
              willChange: "transform",
              marginTop: "0px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 18px 45px rgba(120, 53, 15, 0.09),
                0 12px 32px rgba(120, 53, 15, 0.08),
                0 8px 22px rgba(124, 45, 18, 0.07),
                0 4px 12px rgba(180, 83, 9, 0.05),
                0 0 0 3px rgba(214, 167, 86, 0.14),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 0 35px rgba(255, 248, 237, 0.20),
                inset 0 0 65px rgba(214, 167, 86, 0.06)
              `;
              e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.75)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 8px 20px rgba(120, 53, 15, 0.04),
                0 4px 12px rgba(120, 53, 15, 0.035),
                0 2px 6px rgba(124, 45, 18, 0.03),
                0 1px 3px rgba(180, 83, 9, 0.02),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                inset 0 0 20px rgba(255, 248, 237, 0.11)
              `;
              e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.50)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.boxShadow = `
                0 5px 16px rgba(120, 53, 15, 0.07),
                0 2px 9px rgba(124, 45, 18, 0.06),
                inset 0 3px 10px rgba(120, 53, 15, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.95)
              `;
              e.currentTarget.style.transform = "translateY(0.5px)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.boxShadow = `
                0 18px 45px rgba(120, 53, 15, 0.09),
                0 12px 32px rgba(120, 53, 15, 0.08),
                0 8px 22px rgba(124, 45, 18, 0.07),
                0 4px 12px rgba(180, 83, 9, 0.05),
                0 0 0 3px rgba(214, 167, 86, 0.14),
                inset 0 2px 0 rgba(255, 255, 255, 0.98),
                inset 0 0 35px rgba(255, 248, 237, 0.20),
                inset 0 0 65px rgba(214, 167, 86, 0.06)
              `;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Globe size={15} style={{ color: "#8B6914", strokeWidth: 2.5, flexShrink: 0 }} />
              <div className="text-[14px] font-extrabold leading-tight" style={{ color: "#3A2F1A" }}>
                توافق عالمي
              </div>
            </div>
            <div 
              className="h-[2px] w-[35px] rounded-full mb-1.5"
              style={{
                background: "linear-gradient(90deg, #D6A756 0%, #E6C07A 20%, #F4E4B8 50%, #E6C07A 80%, #D6A756 100%)",
                boxShadow: "0 0 12px rgba(214, 167, 86, 0.9), 0 2px 4px rgba(214, 167, 86, 0.6), 0 -1px 3px rgba(230, 192, 122, 0.7)"
              }}
            />
            <div className="text-[12px] leading-snug font-semibold" style={{ color: "#6B4E2E" }}>
              متوافقة مع جميع المنصات الرقمية، التطبيقات، والمواقع الإلكترونية حول العالم
            </div>
          </div>
        </div>

        {/* يسار: مقسم إلى حاويتين منفصلتين */}
        <div className="flex flex-col gap-3">
          {/* الحاوية الأولى: سطح بطولي مع الدوائر الثلاث */}
          <div 
            className="relative cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] active:scale-98" 
            style={{ transform: "translateZ(0)", willChange: "transform", minHeight: "245px" }}
            onMouseEnter={(e) => {
              const bgDiv = e.currentTarget.querySelector('.surface-bg');
              if (bgDiv) {
                bgDiv.style.boxShadow = `
                  0 18px 45px rgba(120, 53, 15, 0.09),
                  0 12px 32px rgba(120, 53, 15, 0.08),
                  0 8px 22px rgba(124, 45, 18, 0.07),
                  0 4px 12px rgba(180, 83, 9, 0.05),
                  0 0 0 3px rgba(214, 167, 86, 0.14),
                  inset 0 2px 0 rgba(255, 255, 255, 0.98),
                  inset 0 0 35px rgba(255, 248, 237, 0.20),
                  inset 0 0 65px rgba(214, 167, 86, 0.06)
                `;
                bgDiv.style.borderColor = "rgba(214, 167, 86, 0.75)";
                bgDiv.style.transform = "translateY(-1px)";
                bgDiv.style.background = `
                  radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.75) 0%, transparent 40%),
                  radial-gradient(ellipse 420px 220px at 0% 10%, rgba(214, 167, 86, 0.28) 0%, rgba(214, 167, 86, 0.15) 40%, transparent 65%),
                  radial-gradient(ellipse 420px 220px at 120% 90%, rgba(245, 158, 11, 0.22) 0%, rgba(253, 230, 138, 0.12) 40%, transparent 65%),
                  linear-gradient(135deg, rgba(255, 248, 237, 0.35) 0%, rgba(252, 239, 218, 0.25) 100%)
                `;
              }
            }}
            onMouseLeave={(e) => {
              const bgDiv = e.currentTarget.querySelector('.surface-bg');
              if (bgDiv) {
                bgDiv.style.boxShadow = `
                  0 8px 20px rgba(120, 53, 15, 0.04),
                  0 4px 12px rgba(120, 53, 15, 0.035),
                  0 2px 6px rgba(124, 45, 18, 0.03),
                  0 1px 3px rgba(180, 83, 9, 0.02),
                  inset 0 2px 0 rgba(255, 255, 255, 0.98),
                  inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                  inset 0 0 20px rgba(255, 248, 237, 0.11)
                `;
                bgDiv.style.borderColor = "rgba(214, 167, 86, 0.50)";
                bgDiv.style.transform = "translateY(0)";
                bgDiv.style.background = `
                  radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.60) 0%, transparent 40%),
                  radial-gradient(ellipse 420px 220px at 0% 10%, rgba(214, 167, 86, 0.22) 0%, rgba(214, 167, 86, 0.10) 40%, transparent 65%),
                  radial-gradient(ellipse 420px 220px at 120% 90%, rgba(245, 158, 11, 0.16) 0%, rgba(253, 230, 138, 0.08) 40%, transparent 65%),
                  linear-gradient(135deg, rgba(255, 248, 237, 0.25) 0%, rgba(252, 239, 218, 0.15) 100%)
                `;
              }
            }}
            onMouseDown={(e) => {
              const bgDiv = e.currentTarget.querySelector('.surface-bg');
              if (bgDiv) {
                bgDiv.style.boxShadow = `
                  0 5px 16px rgba(120, 53, 15, 0.07),
                  0 2px 9px rgba(124, 45, 18, 0.06),
                  inset 0 3px 10px rgba(120, 53, 15, 0.08),
                  inset 0 1px 0 rgba(255, 255, 255, 0.95)
                `;
                bgDiv.style.transform = "translateY(0.5px)";
              }
            }}
            onMouseUp={(e) => {
              const bgDiv = e.currentTarget.querySelector('.surface-bg');
              if (bgDiv) {
                bgDiv.style.boxShadow = `
                  0 18px 45px rgba(120, 53, 15, 0.09),
                  0 12px 32px rgba(120, 53, 15, 0.08),
                  0 8px 22px rgba(124, 45, 18, 0.07),
                  0 4px 12px rgba(180, 83, 9, 0.05),
                  0 0 0 3px rgba(214, 167, 86, 0.14),
                  inset 0 2px 0 rgba(255, 255, 255, 0.98),
                  inset 0 0 35px rgba(255, 248, 237, 0.20),
                  inset 0 0 65px rgba(214, 167, 86, 0.06)
                `;
                bgDiv.style.transform = "translateY(-1px)";
              }
            }}
          >
            <div
              aria-hidden="true"
              className="surface-bg absolute inset-0 rounded-xl transition-all duration-300"
              style={{
                background: `
                  radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.60) 0%, transparent 40%),
                  radial-gradient(ellipse 420px 220px at 0% 10%, rgba(214, 167, 86, 0.22) 0%, rgba(214, 167, 86, 0.10) 40%, transparent 65%),
                  radial-gradient(ellipse 420px 220px at 120% 90%, rgba(245, 158, 11, 0.16) 0%, rgba(253, 230, 138, 0.08) 40%, transparent 65%),
                  linear-gradient(135deg, rgba(255, 248, 237, 0.25) 0%, rgba(252, 239, 218, 0.15) 100%)
                `,
                border: "1px solid rgba(214, 167, 86, 0.50)",
                boxShadow: `
                  0 8px 20px rgba(120, 53, 15, 0.04),
                  0 4px 12px rgba(120, 53, 15, 0.035),
                  0 2px 6px rgba(124, 45, 18, 0.03),
                  0 1px 3px rgba(180, 83, 9, 0.02),
                  inset 0 2px 0 rgba(255, 255, 255, 0.98),
                  inset 0 -1px 0 rgba(214, 167, 86, 0.04),
                  inset 0 0 20px rgba(255, 248, 237, 0.11)
                `,
                pointerEvents: "none"
              }}
            />

            <div className="relative z-10 h-full flex items-center justify-center p-4">
              {/* أقواس زخرفية + أيقونات موزعة دائريًا */}
              <div className="relative w-20 h-20">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `scale(${1 + i * 0.18})`,
                      boxShadow:
                        "0 0 0 1px rgba(214,167,86,0.25), 0 0 40px rgba(180,83,9,0.10)",
                    }}
                  />
                ))}

                {/* أيقونات الهدايا/العروض/الخصومات موزعة على محيط الدوائر */}
                {[
                  { Icon: Gift, angle: 0, testid: 'service-card-a-arc-icon-gift', label: 'هدايا', ariaLabel: 'عروض الهدايا المتاحة' },
                  { Icon: Tags, angle: 120, testid: 'service-card-a-arc-icon-offers', label: 'عروض', ariaLabel: 'العروض الخاصة' },
                  { Icon: Percent, angle: 240, testid: 'service-card-a-arc-icon-discount', label: 'خصم', ariaLabel: 'الخصومات المتاحة' },
                ].map(({ Icon, angle, testid, label, ariaLabel }, idx) => (
                  <span
                    key={idx}
                    data-testid={testid}
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(48px) rotate(${-angle}deg)` }}
                    role="img"
                    aria-label={ariaLabel}
                  >
                    <span className="flex flex-col items-center gap-1">
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                        style={{
                          background: `
                            radial-gradient(circle at 30% 30%, 
                              rgba(255, 255, 255, 1) 0%, 
                              rgba(250, 250, 250, 1) 30%,
                              rgba(240, 240, 240, 1) 60%,
                              rgba(230, 230, 230, 1) 85%,
                              rgba(220, 220, 220, 1) 100%
                            )
                          `,
                          border: "none",
                          boxShadow: `
                            0 8px 16px rgba(0, 0, 0, 0.12),
                            0 4px 8px rgba(0, 0, 0, 0.08),
                            0 2px 4px rgba(0, 0, 0, 0.06),
                            inset 0 1px 2px rgba(255, 255, 255, 1),
                            inset 0 -2px 4px rgba(0, 0, 0, 0.06),
                            inset -1px -1px 2px rgba(0, 0, 0, 0.04)
                          `,
                        }}
                        aria-hidden="true"
                      >
                        <Icon 
                          size={18} 
                          style={{
                            color: "#8B6914",
                            strokeWidth: 1.5,
                          }}
                          aria-hidden="true"
                        />
                      </span>
                      <span 
                        className="text-[10px] font-bold whitespace-nowrap"
                        style={{ 
                          color: "#3F2D17",
                          textShadow: "0 1px 2px rgba(255,255,255,0.8)"
                        }}
                        aria-hidden="true"
                      >
                        {label}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* زر المزيد مباشرة بدون حاوية */}
          <button
            type="button"
            aria-label="اعرض المزيد من التفاصيل حول البطاقات الإلكترونية"
            data-testid="service-card-a-cta-button"
            className="service-card-a-more-btn group relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-wider uppercase transition-all duration-200 ease-out"
            style={{
              height: "50px",
              justifyContent: "center"
            }}
          >
            <span className="relative z-10" aria-hidden="true">المزيد</span>
            <ChevronLeft 
              size={11} 
              className="relative z-10 opacity-65 group-hover:opacity-90 transition-opacity duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* كتلة 3 - باقات متنوعة - الآن على كامل العرض */}
      <div className="relative z-10 px-6 mt-4" dir="rtl">
        <div
          role="article"
          aria-label="معلومات عن الباقات المتنوعة"
          tabIndex="0"
          className="rounded-xl p-3 text-center cursor-pointer transition-all duration-300 ease-out hover:scale-[1.06] active:scale-98"
          style={{
            height: "65px",
            minHeight: "65px",
            maxHeight: "65px",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingTop: "6px",
            background: "#FFFFFF",
            border: "1.5px dashed rgba(214, 167, 86, 0.65)",
            boxShadow: `
              0 8px 20px rgba(120, 53, 15, 0.04),
              0 4px 12px rgba(120, 53, 15, 0.035),
              0 2px 6px rgba(124, 45, 18, 0.03),
              0 1px 3px rgba(180, 83, 9, 0.02),
              inset 0 2px 0 rgba(255, 255, 255, 0.98),
              inset 0 -1px 0 rgba(214, 167, 86, 0.04),
              inset 0 0 20px rgba(255, 248, 237, 0.11)
            `,
            transform: "translateZ(0)",
            willChange: "transform"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `
              0 18px 45px rgba(120, 53, 15, 0.09),
              0 12px 32px rgba(120, 53, 15, 0.08),
              0 8px 22px rgba(124, 45, 18, 0.07),
              0 4px 12px rgba(180, 83, 9, 0.05),
              0 0 0 3px rgba(214, 167, 86, 0.14),
              inset 0 2px 0 rgba(255, 255, 255, 0.98),
              inset 0 0 35px rgba(255, 248, 237, 0.20),
              inset 0 0 65px rgba(214, 167, 86, 0.06)
            `;
            e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.85)";
            e.currentTarget.style.borderWidth = "2px";
            e.currentTarget.style.background = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `
              0 8px 20px rgba(120, 53, 15, 0.04),
              0 4px 12px rgba(120, 53, 15, 0.035),
              0 2px 6px rgba(124, 45, 18, 0.03),
              0 1px 3px rgba(180, 83, 9, 0.02),
              inset 0 2px 0 rgba(255, 255, 255, 0.98),
              inset 0 -1px 0 rgba(214, 167, 86, 0.04),
              inset 0 0 20px rgba(255, 248, 237, 0.11)
            `;
            e.currentTarget.style.borderColor = "rgba(214, 167, 86, 0.65)";
            e.currentTarget.style.borderWidth = "1.5px";
            e.currentTarget.style.background = "#FFFFFF";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = `
              0 5px 16px rgba(120, 53, 15, 0.07),
              0 2px 9px rgba(124, 45, 18, 0.06),
              inset 0 3px 10px rgba(120, 53, 15, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.95)
            `;
            e.currentTarget.style.transform = "translateY(0.5px)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = `
              0 18px 45px rgba(120, 53, 15, 0.09),
              0 12px 32px rgba(120, 53, 15, 0.08),
              0 8px 22px rgba(124, 45, 18, 0.07),
              0 4px 12px rgba(180, 83, 9, 0.05),
              0 0 0 3px rgba(214, 167, 86, 0.14),
              inset 0 2px 0 rgba(255, 255, 255, 0.98),
              inset 0 0 35px rgba(255, 248, 237, 0.20),
              inset 0 0 65px rgba(214, 167, 86, 0.06)
            `;
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
        >
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex items-center justify-start gap-2 mb-1">
              <Package size={16} style={{ color: "#8B6914", strokeWidth: 2.5 }} />
              <div className="text-[14px] font-extrabold leading-tight" style={{ color: "#3A2F1A" }}>
                باقات متنوعة
              </div>
            </div>
            <div 
              className="h-[2px] w-[35px] rounded-full mb-1.5"
              style={{
                background: "linear-gradient(90deg, #D6A756 0%, #E6C07A 20%, #F4E4B8 50%, #E6C07A 80%, #D6A756 100%)",
                boxShadow: "0 0 12px rgba(214, 167, 86, 0.9), 0 2px 4px rgba(214, 167, 86, 0.6), 0 -1px 3px rgba(230, 192, 122, 0.7)"
              }}
            />
            <div className="text-[11px] leading-relaxed font-semibold text-right w-full pr-1" style={{ color: "#6B4E2E" }}>
              باقات تناسب الجميع بأسعار مرنة ومتنوعة لكل الاحتياجات
            </div>
          </div>
        </div>
      </div>

      {/* فاصل */}
      <div className="px-6 mt-5" aria-hidden="true">
        <div
          className="h-[2px] w-full rounded-full service-card-divider-animated"
          style={{
            background:
              "linear-gradient(90deg, transparent, #7C5D13, #7C5D13, transparent)",
          }}
        />
      </div>

      {/* أيقونات المزايا */}
      <div
        data-testid="service-card-a-features"
        className="grid grid-cols-4 gap-2 text-center px-6 pt-5" dir="rtl"
      >
        {/* Security */}
        <div 
          className="flex flex-col items-center gap-1"
        >
          <span
            className="inline-flex items-center justify-center w-9 h-9 relative"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)
              `,
              boxShadow: `
                0 4px 8px rgba(0, 0, 0, 0.12),
                0 2px 4px rgba(0, 0, 0, 0.08),
                0 8px 16px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1),
                inset 0 -2px 4px rgba(0, 0, 0, 0.04)
              `,
              border: "none",
              borderRadius: "50%",
            }}
            data-testid="service-card-a-feature-security"
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.2, 0.95, 1.05, 1]
              }}
              transition={{ 
                delay: 0.4,
                duration: 1.1,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 1.1,
                  times: [0, 0.5, 0.75, 0.9, 1],
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <ShieldCheck 
                size={18}
                strokeWidth={iconStrokeWidth}
                className="text-blue-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </span>
          <span 
            className="text-[11px] font-extrabold" 
            style={{ color: "#3F2D17" }}
            role="text"
            aria-label="ميزة الأمان"
          >
            أمان
          </span>
        </div>
        {/* Speed */}
        <div 
          className="flex flex-col items-center gap-1"
        >
          <span
            className="inline-flex items-center justify-center w-9 h-9 relative"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)
              `,
              boxShadow: `
                0 4px 8px rgba(0, 0, 0, 0.12),
                0 2px 4px rgba(0, 0, 0, 0.08),
                0 8px 16px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1),
                inset 0 -2px 4px rgba(0, 0, 0, 0.04)
              `,
              border: "none",
              borderRadius: "50%",
            }}
            data-testid="service-card-a-feature-speed"
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.2, 0.95, 1.05, 1]
              }}
              transition={{ 
                delay: 0.8,
                duration: 1.1,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 1.1,
                  times: [0, 0.5, 0.75, 0.9, 1],
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <Zap 
                size={18}
                strokeWidth={iconStrokeWidth}
                className="text-green-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </span>
          <span 
            className="text-[11px] font-extrabold" 
            style={{ color: "#3F2D17" }}
            role="text"
            aria-label="ميزة السرعة"
          >
            سرعة
          </span>
        </div>
        {/* Trust */}
        <div 
          className="flex flex-col items-center gap-1"
        >
          <span
            className="inline-flex items-center justify-center w-9 h-9 relative"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)
              `,
              boxShadow: `
                0 4px 8px rgba(0, 0, 0, 0.12),
                0 2px 4px rgba(0, 0, 0, 0.08),
                0 8px 16px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1),
                inset 0 -2px 4px rgba(0, 0, 0, 0.04)
              `,
              border: "none",
              borderRadius: "50%",
            }}
            data-testid="service-card-a-feature-trust"
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.2, 0.95, 1.05, 1]
              }}
              transition={{ 
                delay: 1.2,
                duration: 1.1,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 1.1,
                  times: [0, 0.5, 0.75, 0.9, 1],
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <BadgeCheck 
                size={18}
                strokeWidth={iconStrokeWidth}
                className="text-purple-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </span>
          <span 
            className="text-[11px] font-extrabold" 
            style={{ color: "#3F2D17" }}
            role="text"
            aria-label="ميزة الثقة"
          >
            ثقة
          </span>
        </div>
        {/* Quality */}
        <div 
          className="flex flex-col items-center gap-1"
        >
          <span
            className="inline-flex items-center justify-center w-9 h-9 relative"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)
              `,
              boxShadow: `
                0 4px 8px rgba(0, 0, 0, 0.12),
                0 2px 4px rgba(0, 0, 0, 0.08),
                0 8px 16px rgba(0, 0, 0, 0.06),
                inset 0 1px 0 rgba(255, 255, 255, 1),
                inset 0 -2px 4px rgba(0, 0, 0, 0.04)
              `,
              border: "none",
              borderRadius: "50%",
            }}
            data-testid="service-card-a-feature-quality"
          >
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0
              }}
              animate={{ 
                opacity: 1,
                scale: [0, 1.2, 0.95, 1.05, 1]
              }}
              transition={{ 
                delay: 1.6,
                duration: 1.1,
                opacity: { duration: 0.3, ease: "easeOut" },
                scale: { 
                  duration: 1.1,
                  times: [0, 0.5, 0.75, 0.9, 1],
                  ease: [0.34, 1.56, 0.64, 1]
                }
              }}
              whileHover={{ 
                scale: 1.4,
                rotate: [0, -8, 8, -8, 8, 0],
                y: -2,
                transition: { 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }
              }}
              whileTap={{ 
                scale: 0.85,
                transition: { duration: 0.1 }
              }}
            >
              <Award 
                size={18}
                strokeWidth={iconStrokeWidth}
                className="text-amber-600"
                style={{
                  filter: `
                    drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
                    drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
                    drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
                    drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
                  `,
                  transform: 'translateZ(0)',
                  cursor: 'pointer',
                }}
              />
            </motion.div>
          </span>
          <span 
            className="text-[11px] font-extrabold" 
            style={{ color: "#3F2D17" }}
            role="text"
            aria-label="ميزة الجودة"
          >
            جودة
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardA;
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Fang - 古典产品经理",
  description: "hunterfang，大锤，武汉，古典产品经理",
};

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12 md:px-12">
      {/* 主卡片 - 个人名片 */}
      <div className="card max-w-2xl w-full animate-fade-in">
        {/* 装饰线 */}
        <div className="flex items-center gap-3 mb-8 md:mb-10">
          <div className="w-12 h-[2px] bg-brand"></div>
          <span className="font-label text-brand tracking-wider">PROFILE</span>
        </div>

        {/* 主标题区域 */}
        <div className="mb-8 md:mb-10 animate-fade-in-delay-1">
          <h1 className="font-display text-near-black mb-3">
            hunterfang
          </h1>
          <div className="flex items-center gap-2 font-body text-olive">
            <span className="w-1 h-1 rounded-full bg-olive"></span>
            <span>大锤</span>
            <span className="text-border-warm">·</span>
            <span>武汉</span>
            <span className="text-border-warm">·</span>
            <span>古典产品经理</span>
          </div>
        </div>

        {/* 引言 */}
        <div className="section-title mb-8 md:mb-10 animate-fade-in-delay-2">
          <p className="font-body-lead text-charcoal leading-relaxed pl-1">
            虔诚、敬畏、煎熬，
            <br />
            不想传递事实，想去传递价值
          </p>
        </div>

        {/* 底部装饰 */}
        <div className="flex items-center justify-between pt-6 border-t border-border-cream animate-fade-in-delay-3">
          <div className="flex gap-2">
            <span className="inline-block px-3 py-1 bg-tag-light text-brand text-xs font-sans font-medium rounded-sm">
              产品思维
            </span>
            <span className="inline-block px-3 py-1 bg-tag-default text-brand text-xs font-sans font-medium rounded-sm">
              用户价值
            </span>
          </div>
          <div className="text-stone font-caption">
            © 2026
          </div>
        </div>
      </div>

      {/* 纸质质感增强 - 额外的装饰元素 */}
      <div className="fixed top-12 right-12 hidden lg:block opacity-20 pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="#1B365D" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="fixed bottom-12 left-12 hidden lg:block opacity-10 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="2" y="2" width="36" height="36" stroke="#1B365D" strokeWidth="1" />
        </svg>
      </div>
    </main>
  );
}

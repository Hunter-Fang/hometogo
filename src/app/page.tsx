import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Fang",
  description: "古典产品经理",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 精致的背景纹理 */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(26, 54, 93, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(26, 54, 93, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(26, 54, 93, 0.02) 0%, transparent 50%)
          `,
          opacity: 0.8
        }}
      />

      {/* 主容器 */}
      <div className="container relative z-10 min-h-screen flex flex-col justify-center py-32 md:py-48">
        
        {/* 顶部品牌线 */}
        <div className="animate-hero mb-20 md:mb-32">
          <div className="divider-brand" />
        </div>

        {/* 核心内容区 - 极致留白 */}
        <div className="max-w-5xl">
          
          {/* 主名字 - 超大排版 */}
          <div className="animate-title mb-12 md:mb-16">
            <h1 className="text-hero">
              hunter
              <br />
              <span className="text-brand">fang</span>
            </h1>
          </div>

          {/* 副标题 - 优雅间距 */}
          <div className="animate-meta mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-small text-text-tertiary tracking-widest uppercase">
                古典产品经理
              </p>
              <div className="hidden md:block w-12 h-px bg-border" />
              <p className="text-small text-text-quaternary">
                武汉 · 中国
              </p>
            </div>
          </div>

          {/* 分割线 */}
          <div className="animate-divider mb-16 md:mb-24">
            <div className="divider-elegant" />
          </div>

          {/* 标签 - 精致设计 */}
          <div className="animate-tags mb-20 md:mb-32">
            <div className="flex flex-wrap gap-4">
              <span className="tag-elegant">大锤</span>
              <span className="tag-elegant">产品思维</span>
              <span className="tag-elegant">用户价值</span>
            </div>
          </div>

          {/* 引言 - 优雅引用 */}
          <div className="animate-quote mb-24 md:mb-40">
            <blockquote className="quote-elegant">
              <p className="text-body-lg text-text-secondary leading-relaxed">
                虔诚、敬畏、煎熬，
                <br />
                <span className="text-brand font-medium">不想传递事实，想去传递价值</span>
              </p>
            </blockquote>
          </div>

          {/* 底部信息 - 极致简约 */}
          <div className="animate-footer">
            <div className="divider-elegant mb-12" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex items-center gap-8 text-small text-text-quaternary">
                <span>© 2026</span>
                <div className="dots-decoration">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
              </div>
              
              <div className="flex gap-10">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-elegant"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-elegant"
                >
                  GitHub
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="link-elegant"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 右侧装饰 - 仅桌面端 */}
        <div className="hidden lg:block fixed right-16 top-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-32 bg-border-light" />
            <div 
              className="text-caption text-text-quaternary"
              style={{ writingMode: 'vertical-rl' as const }}
            >
              贰零贰陆
            </div>
            <div className="w-px h-32 bg-border-light" />
          </div>
        </div>

      </div>

      {/* 底部角落装饰 */}
      <div className="fixed bottom-12 left-12 hidden lg:block">
        <div className="dots-decoration">
          <div className="w-1 h-1 rounded-full bg-brand/20" />
          <div className="w-1 h-1 rounded-full bg-brand/40" />
          <div className="w-1 h-1 rounded-full bg-brand/20" />
        </div>
      </div>

    </main>
  );
}

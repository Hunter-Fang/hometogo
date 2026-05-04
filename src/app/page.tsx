import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Fang",
  description: "古典产品经理 · 传递价值而非事实",
};

export default function Home() {
  return (
    <main>
      <div className="page-container">
        <div className="content-area">

          {/* 品牌色短线 */}
          <div className="anim-1">
            <div className="divider-brand" />
          </div>

          {/* 主名字 */}
          <div className="anim-2">
            <h1 className="hero-name">
              hunter
              <br />
              <span className="brand-accent">fang</span>
            </h1>
          </div>

          {/* 身份 */}
          <div className="anim-3">
            <p className="subtitle">古典产品经理</p>
            <p className="location">武汉 · 中国</p>
          </div>

          {/* 分隔线 */}
          <div className="anim-4">
            <div className="divider" />
          </div>

          {/* 标签 */}
          <div className="anim-5">
            <div>
              <span className="tag">大锤</span>
              <span className="tag">产品思维</span>
              <span className="tag">用户价值</span>
            </div>
          </div>

          {/* 分隔线 */}
          <div className="anim-6">
            <div className="divider" />
          </div>

          {/* 引言 */}
          <div className="anim-6">
            <blockquote className="quote-block">
              <p className="quote-text">
                虔诚、敬畏、煎熬，
                <br />
                <span className="brand-highlight">不想传递事实，想去传递价值</span>
              </p>
            </blockquote>
          </div>

          {/* 底部 */}
          <div className="anim-7">
            <div className="footer-section">
              <div className="footer-row">
                <div className="footer-text">
                  © 2026 &nbsp;·&nbsp; Personal Profile
                </div>
                <div className="footer-links">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Twitter
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                    GitHub
                  </a>
                  <a href="mailto:hello@example.com" className="footer-link">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

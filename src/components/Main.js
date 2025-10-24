import React from 'react';
import '../styles/Main.css';

const Main = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              대화로 연결되는 곳
            </h1>
            <p className="hero-subtitle">
              후알(WHOR)은 질문과 대화로 사람 사이를 잇습니다<br />
              서로의 생각을 나누고, 마음이 가까워지는 순간을 만듭니다
            </p>
            <div className="hero-actions">
              <button className="hero-btn primary">후알카드를 경험해보세요</button>
              <button className="hero-btn secondary">커뮤니티 참여하기</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="conversation-cards">
              <div className="card card-1">💭</div>
              <div className="card card-2">💬</div>
              <div className="card card-3">🤝</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">About WHOR</h2>
            <p className="about-description">
              후알의 일상을 통해 공감을 더합니다. 질문 카드를 통해 대화를 디자인하고, 
              사람들 사이의 의미 있는 연결을 만들어갑니다.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>의미 있는 질문</h3>
                <p>깊이 있는 대화를 이끌어내는 질문들</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3>커뮤니티</h3>
                <p>함께 성장하는 사람들의 공간</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <h3>창의적 대화</h3>
                <p>새로운 관점과 아이디어를 발견</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="community">
        <div className="features-container">
          <h2 className="section-title">WHOR의 특징</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">🃏</div>
              <h3 className="card-title">질문 카드</h3>
              <p className="card-description">
                다양한 주제의 질문 카드로 자연스러운 대화를 시작하세요
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🌱</div>
              <h3 className="card-title">성장하는 커뮤니티</h3>
              <p className="card-description">
                함께 대화하고 성장하는 사람들의 따뜻한 공간
              </p>
            </div>
            <div className="feature-card">
              <div className="card-icon">🎨</div>
              <h3 className="card-title">창의적 프로젝트</h3>
              <p className="card-description">
                대화에서 시작되는 다양한 창작 활동과 프로젝트
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">지금 시작해보세요</h2>
          <p className="cta-description">
            첫 번째 질문 카드로 의미 있는 대화를 시작해보세요
          </p>
          <button className="cta-button">무료로 시작하기</button>
        </div>
      </section>
    </main>
  );
};

export default Main;

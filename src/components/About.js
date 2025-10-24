import React, { useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="about-hero-title">후알에 대해</h1>
          <p className="about-hero-subtitle">
            질문과 대화로 사람 사이를 잇는 공간, 후알의 이야기
          </p>
        </div>
      </section>

      {/* Story Section - 좌우 분할 레이아웃 */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-grid">
            <div className="story-text-content">
              <h2 className="story-title">후알의 시작</h2>
              <p className="story-text">
                후알은 '좋은 대화'를 만들고 싶다는 마음에서 시작됐습니다.
              </p>
              <p className="story-text">
                질문 하나로 서로의 생각이 열리고, 마음이 가까워지는 경험이 너무 좋았거든요.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-icon">💬</div>
            </div>
          </div>
          
          <div className="story-highlight">
            <p className="story-highlight-text">
              그 대화들이 쌓이자 자연스럽게 사람들이 모였고,<br />
              우리는 제품을 넘어서 사람이 계속 연결되는<br />
              커뮤니티를 만들기로 했습니다.
            </p>
          </div>

          <div className="story-belief">
            <p className="story-belief-text">
              후알은 지금도 질문으로 이어지는 관계,<br />
              그리고 그 안에서 생겨나는 이해와 변화를 믿습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section - 세로 스택 레이아웃 */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <h2 className="philosophy-title">후알이 추구하는 커뮤니티</h2>
          <div className="philosophy-stack">
            <div className="philosophy-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <div className="step-icon">❓</div>
                <h3 className="step-title">질문</h3>
                <p className="step-description">
                  일상을 주제로 질문하며 인사이트를 교환하며 대화에서 끝나지 않고
                </p>
              </div>
            </div>
            
            
            <div className="philosophy-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-icon">🔍</div>
                <h3 className="step-title">탐색</h3>
                <p className="step-description">
                  자신도 몰랐던 부분을 깨웁니다 스스로가 어떤 사람인지 발견합니다
                </p>
              </div>
            </div>
            
            
            <div className="philosophy-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <div className="step-icon">🚀</div>
                <h3 className="step-title">행동</h3>
                <p className="step-description">
                  스스로 행동합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - 카드 스타일 */}
      <section className="journey-section">
        <div className="journey-container">
          <h2 className="journey-title">후알의 여정</h2>
          <div className="journey-cards">
            <div className="journey-card">
              <div className="card-year">2022</div>
              <h3 className="card-title">후알의 성장기반</h3>
              <p className="card-description">
                후알의 시초가 되었던, 물음표토크를 잠시 소개해드리겠습니다. 
                물음표 토크 : 일상을 소재로 참여자의 질문을 받고 답하는 토크쇼. 
                실제 일상을 소재로 다양한 주제로 이야기
              </p>
            </div>

            <div className="journey-card">
              <div className="card-year">2023</div>
              <h3 className="card-title">커뮤니티가 커지다</h3>
              <p className="card-description">
                5여명으로 시작된 물음표 토크는 3년 동안 청년, 청소년, 기업가 등 
                누적 500명 이상의 참여자가 함께해 규모와 깊이를 키웠습니다. 
                이 과정에서 쌓인 경험은 단순한 이벤트를 넘어서는 의미를 가졌습니다.
              </p>
            </div>

            <div className="journey-card">
              <div className="card-year">2024</div>
              <h3 className="card-title">후알 카드 개발</h3>
              <p className="card-description">
                3년의 커뮤니티 경험을 바탕으로, 후알은 사람들이 각자의 자리에서 
                스스로 대화 문화를 만들어갈 수 있도록 후알카드를 개발했습니다. 
                질 높은 대화를 위해 청소년부터 어른을 위한 다양한 카드가 준비되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2 className="about-cta-title">함께 시작해보세요</h2>
          <p className="about-cta-description">
            후알과 함께 의미 있는 대화의 여정을 시작해보세요
          </p>
          <button className="about-cta-button">후알카드 체험하기</button>
        </div>
      </section>
    </div>
  );
};

export default About;

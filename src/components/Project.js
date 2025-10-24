import React, { useEffect } from 'react';
import '../styles/Project.css';

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-hero-container">
          <h1 className="project-hero-title">브랜딩 서비스</h1>
          <p className="project-hero-subtitle">
            브랜딩을 통해 기업의 개성을 만드는 역할을 합니다
          </p>
        </div>
      </section>

      {/* Branding Services Section */}
      <section className="branding-section">
        <div className="branding-container">
          <div className="branding-intro">
            <div className="intro-content">
              <h3 className="intro-title">후알과 함께 하는 기업</h3>
              <p className="intro-description">
                후알의 브랜딩 서비스로 당신의 기업만의 고유한 개성과 가치를 표현하세요.
                단순한 디자인을 넘어서 브랜드의 본질을 담은 의미 있는 커뮤니케이션을 만들어드립니다.
              </p>
            </div>
            <div className="intro-visual">
              <div className="intro-icon">🎨</div>
            </div>
          </div>

          <div className="branding-cases">
            <h3 className="cases-title">브랜딩 사례</h3>
            <div className="cases-grid">
              <div className="case-card">
                <div className="case-badge">공지</div>
                <div className="case-content">
                  <h4 className="case-company">리함</h4>
                  <p className="case-description">
                    해외이사 정보과 지식을 콘텐츠로 제작해 친근하게 전달했습니다
                  </p>
                  <div className="case-date">2025-09-17</div>
                </div>
              </div>

              <div className="case-card">
                <div className="case-badge">공지</div>
                <div className="case-content">
                  <h4 className="case-company">아이노스</h4>
                  <p className="case-description">
                    파주 맛집 아이노스 메뉴의 개성을 살렸습니다
                  </p>
                  <div className="case-date">2025-09-17</div>
                </div>
              </div>

              <div className="case-card">
                <div className="case-badge">공지</div>
                <div className="case-content">
                  <h4 className="case-company">모든 에듀케이션</h4>
                  <p className="case-description">
                    퍼니소피 장난감만의 둥글고 포근한 색감을 살렸습니다
                  </p>
                  <div className="case-date">2025-09-06</div>
                </div>
              </div>
            </div>
          </div>

          <div className="branding-services">
            <h3 className="services-title">브랜딩 서비스</h3>
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">🎯</div>
                <h4 className="service-name">브랜드 아이덴티티</h4>
                <p className="service-desc">기업의 핵심 가치와 개성을 담은 브랜드 아이덴티티 설계</p>
              </div>
              <div className="service-item">
                <div className="service-icon">📝</div>
                <h4 className="service-name">콘텐츠 기획</h4>
                <p className="service-desc">브랜드 스토리를 담은 의미 있는 콘텐츠 기획 및 제작</p>
              </div>
              <div className="service-item">
                <div className="service-icon">🎨</div>
                <h4 className="service-name">비주얼 디자인</h4>
                <p className="service-desc">브랜드의 특성을 반영한 시각적 디자인 및 가이드라인</p>
              </div>
              <div className="service-item">
                <div className="service-icon">💬</div>
                <h4 className="service-name">커뮤니케이션</h4>
                <p className="service-desc">고객과의 소통을 위한 브랜드 커뮤니케이션 전략</p>
              </div>
            </div>
          </div>

          <div className="branding-cta">
            <h3 className="branding-cta-title">브랜딩 문의</h3>
            <p className="branding-cta-description">
              당신의 기업만의 특별한 브랜딩을 함께 만들어보세요
            </p>
            <div className="branding-buttons">
              <button className="branding-btn primary">브랜딩 상담 신청</button>
              <button className="branding-btn secondary">포트폴리오 보기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

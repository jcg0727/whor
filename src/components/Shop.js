import React, { useEffect } from 'react';
import '../styles/Shop.css';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero-container">
          <h1 className="shop-hero-title">후알카드 Shop</h1>
          <p className="shop-hero-subtitle">
            의미 있는 대화를 위한 질문 카드와 함께하세요
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="featured-container">
          <h2 className="section-title">추천 상품</h2>
          <div className="featured-grid">
            <div className="product-card featured">
              <div className="product-badge">BEST</div>
              <div className="product-image">
                <div className="product-icon">🃏</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">후알카드 완전 세트</h3>
                <p className="product-description">
                  나, 공동체, 연인, 가족 모든 카드가 포함된 세트
                </p>
                <div className="product-price">
                  <span className="price">₩89,000</span>
                  <span className="original-price">₩100,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">👤</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">나 카드</h3>
                <p className="product-description">
                  나 자신과의 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">👥</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">공동체 카드</h3>
                <p className="product-description">
                  함께하는 사람들과의 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="products-section">
        <div className="products-container">
          <h2 className="section-title">전체 상품</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">👤</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">나 카드</h3>
                <p className="product-description">
                  나 자신과의 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">👥</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">공동체 카드</h3>
                <p className="product-description">
                  함께하는 사람들과의 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">💕</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">연인 카드</h3>
                <p className="product-description">
                  연인과의 깊이 있는 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="product-icon">👨‍👩‍👧‍👦</div>
              </div>
              <div className="product-info">
                <h3 className="product-title">가족 카드</h3>
                <p className="product-description">
                  가족과 함께 나누는 따뜻한 대화를 위한 질문 카드
                </p>
                <div className="product-price">
                  <span className="price">₩25,000</span>
                </div>
                <button className="product-btn">장바구니 담기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Section */}
      <section className="bundle-section">
        <div className="bundle-container">
          <h2 className="section-title">세트 상품</h2>
          <div className="bundle-grid">
            <div className="bundle-card">
              <div className="bundle-badge">SAVE 20%</div>
              <div className="bundle-image">
                <div className="bundle-icon">📦</div>
              </div>
              <div className="bundle-info">
                <h3 className="bundle-title">후알카드 완전 세트</h3>
                <p className="bundle-description">
                  나, 공동체, 연인, 가족 모든 카드가 포함된 완전판
                </p>
                <div className="bundle-price">
                  <span className="price">₩89,000</span>
                  <span className="original-price">₩100,000</span>
                </div>
                <button className="bundle-btn">지금 구매하기</button>
              </div>
            </div>

            <div className="bundle-card">
              <div className="bundle-badge">NEW</div>
              <div className="bundle-image">
                <div className="bundle-icon">🎁</div>
              </div>
              <div className="bundle-info">
                <h3 className="bundle-title">선물용 세트</h3>
                <p className="bundle-description">
                  특별한 사람에게 선물하기 좋은 세트
                </p>
                <div className="bundle-price">
                  <span className="price">₩45,000</span>
                </div>
                <button className="bundle-btn">선물하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta-section">
        <div className="shop-cta-container">
          <h2 className="shop-cta-title">더 많은 질문이 필요하신가요?</h2>
          <p className="shop-cta-description">
            맞춤형 질문 카드 제작 서비스도 제공합니다
          </p>
          <button className="shop-cta-button">문의하기</button>
        </div>
      </section>
    </div>
  );
};

export default Shop;

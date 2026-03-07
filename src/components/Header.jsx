import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo & Branding */}
        <NavLink to="/dashboard" className="header-brand" onClick={closeMobileMenu}>
          <div className="header-logo-icon">
            <img src="/vaxicare-logo.png" alt="VaxiCare Logo" className="logo-img" />
          </div>
          <span className="header-title">
            Vaxi<span className="header-title-highlight">Care</span>
          </span>
        </NavLink>

        {/* Center: Child Selector (Desktop) */}
        <div className="header-profile-selector">
          <button className="profile-btn">
            <div className="profile-img-container">
              <img
                data-alt="Close up portrait of a smiling baby"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJPGYQYTNVzVliN4t2tO8LjX0EvQXv5XVCO8k-i4thiz2dI4Bm541Cc35a09EuaztjfplgGETfsoPw03bFxsWjV3ObwFQNo4yydbEQPANci5OXIMmeWW7xg4QZPkWMkokvW0vPy9Mcu6SgGMEgxww-_0L2FZYYpV0LmdpqSKkq8ScMstr2UgtPQ5pEsTUb2vg4x6Y0rssiXPf4cO6ISFoPYd2P23LTMooeE_XgP4S9liTUnIc2DWMGjJiLMUo--wRhBLfiBcSkBPQ"
                alt="Baby"
              />
            </div>
            <div className="profile-info">
              <span className="profile-label">Active Profile</span>
              <span className="profile-name">Child: Aarav</span>
            </div>
            <span className="chevron-arrow"></span>
          </button>
        </div>

        {/* Right: Notifications & User */}
        <div className="header-actions">
          <button className="notification-btn">
            <img src="/bell-icon.png" alt="Notifications" className="bell-img" />
          </button>

          <div className="divider"></div>

          <button className="user-btn">
            <img
              className="user-avatar"
              data-alt="Profile picture of parent or guardian"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhrgHkk4ReWg8tP8FX8mwEAZNdFHejpfH3g01USUj1Nflc8PY-1a6Uz08lROuVoyBEKt4m3LYVSiVq4HkZbK6sJCy4iCDv3o-h50bTpCSIQ5IVEG7lR2-kBBtrWeW-kFiDpv50XSpzq6hMzJm5XDYqYfDuMb1LBhLZVrOU-gEXILp96L_K2QqAVryempmZvcMk2H6VPiLRf6sHqQD0VLLsF5NJSPC7RFsFfalkgRSvhu2gCm_bqL4lWWC_rbA9_UOssQYJ9h47Z2k"
              alt="Parent avatar"
            />
            <span className="chevron-arrow"></span>
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Sub-header/Navigation Tabs (Desktop) */}
      <nav className="header-nav">
        <div className="nav-container">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Dashboard</NavLink>
          <NavLink to="/vaccine-tracker" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Vaccine Tracker</NavLink>
          <NavLink to="/digital-card" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Digital Card</NavLink>
          <NavLink to="/awareness" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Awareness</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>Profile</NavLink>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Profile Selector (Mobile) */}
        <div className="mobile-profile">
          <button className="profile-btn">
            <div className="profile-img-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJPGYQYTNVzVliN4t2tO8LjX0EvQXv5XVCO8k-i4thiz2dI4Bm541Cc35a09EuaztjfplgGETfsoPw03bFxsWjV3ObwFQNo4yydbEQPANci5OXIMmeWW7xg4QZPkWMkokvW0vPy9Mcu6SgGMEgxww-_0L2FZYYpV0LmdpqSKkq8ScMstr2UgtPQ5pEsTUb2vg4x6Y0rssiXPf4cO6ISFoPYd2P23LTMooeE_XgP4S9liTUnIc2DWMGjJiLMUo--wRhBLfiBcSkBPQ"
                alt="Baby"
              />
            </div>
            <div className="profile-info">
              <span className="profile-label">Active Profile</span>
              <span className="profile-name">Child: Aarav</span>
            </div>
            <span className="chevron-arrow"></span>
          </button>
        </div>

        {/* Navigation Links (Mobile) */}
        <nav className="mobile-nav">
          <NavLink to="/dashboard" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Dashboard</NavLink>
          <NavLink to="/vaccine-tracker" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Vaccine Tracker</NavLink>
          <NavLink to="/digital-card" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Digital Card</NavLink>
          <NavLink to="/awareness" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Awareness</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>Profile</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

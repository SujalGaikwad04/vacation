import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const vaccines = [
        {
            name: 'Hepatitis B (Dose 3)',
            subtitle: 'Pediatric formulation',
            date: '15 Sep 2023',
            status: 'Completed',
            action: 'View Certificate',
        },
        {
            name: 'Influenza (Annual)',
            subtitle: 'Seasonal Flu Shot',
            date: '01 Oct 2023',
            status: 'Missed',
            action: 'Recovery Plan',
        },
        {
            name: 'MMR (Dose 1)',
            subtitle: 'Measles, Mumps, Rubella',
            date: '12 May 2022',
            status: 'Completed',
            action: 'View Certificate',
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed':
                return 'status-completed';
            case 'Missed':
                return 'status-missed';
            case 'Upcoming':
                return 'status-upcoming';
            default:
                return '';
        }
    };

    const getActionClass = (action) => {
        switch (action) {
            case 'View Certificate':
                return 'action-view';
            case 'Recovery Plan':
                return 'action-recovery';
            case 'Mark Done':
                return 'action-done';
            default:
                return '';
        }
    };

    return (
        <div className="dashboard">
            {/* ===== Child Profile Header ===== */}
            <div className="profile-header">
                <div className="profile-left">
                    <div className="profile-avatar">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJPGYQYTNVzVliN4t2tO8LjX0EvQXv5XVCO8k-i4thiz2dI4Bm541Cc35a09EuaztjfplgGETfsoPw03bFxsWjV3ObwFQNo4yydbEQPANci5OXIMmeWW7xg4QZPkWMkokvW0vPy9Mcu6SgGMEgxww-_0L2FZYYpV0LmdpqSKkq8ScMstr2UgtPQ5pEsTUb2vg4x6Y0rssiXPf4cO6ISFoPYd2P23LTMooeE_XgP4S9liTUnIc2DWMGjJiLMUo--wRhBLfiBcSkBPQ"
                            alt="Aarav"
                        />
                    </div>
                    <div className="profile-info">
                        <h2 className="profile-name">Aarav</h2>
                        <span className="profile-badge">ACTIVE PROFILE</span>
                        <p className="profile-meta">2 Years, Male</p>
                        <p className="profile-dob">DOB: 12/05/2021</p>
                    </div>
                </div>

                <div className="profile-center">
                    <div className="progress-section">
                        <div className="progress-header">
                            <span className="progress-label">Vaccination Progress</span>
                            <span className="progress-percent">75%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '75%' }}></div>
                        </div>
                        <span className="progress-detail">12 of 16 vaccines completed</span>
                    </div>
                </div>

                <div className="profile-right">
                    <button className="switch-child-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 3 21 3 21 8"></polyline>
                            <line x1="4" y1="20" x2="21" y2="3"></line>
                            <polyline points="21 16 21 21 16 21"></polyline>
                            <line x1="15" y1="15" x2="21" y2="21"></line>
                        </svg>
                        Switch Child
                    </button>
                </div>
            </div>

            {/* ===== Middle Section: Upcoming Vaccine + Milestones ===== */}
            <div className="middle-section">
                {/* Upcoming Vaccine Card - Dark Premium */}
                <div className="upcoming-vaccine-card">
                    <div className="upcoming-bg-image">
                        <img src="/vaccine_vial.png" alt="" />
                    </div>
                    <div className="upcoming-content">
                        <div className="upcoming-left">
                            <span className="priority-badge">
                                <span className="priority-dot"></span>
                                PRIORITY SCHEDULE
                            </span>
                            <h3 className="upcoming-name">DTP Booster</h3>
                            <div className="upcoming-date-row">
                                <p className="upcoming-date">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    Due: 25 Oct 2023
                                </p>
                                <span className="days-badge">In 12 Days</span>
                            </div>
                        </div>
                        <div className="upcoming-right">
                            <button className="view-details-btn">View Details</button>
                            <button className="set-reminder-btn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                Set Reminder
                            </button>
                        </div>
                    </div>
                </div>

                {/* Milestones Card */}
                <div className="milestones-card">
                    <h3 className="milestones-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Aarav's Milestones
                    </h3>

                    <div className="milestone-item">
                        <div className="milestone-icon milestone-green">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <div className="milestone-info">
                            <strong>First Vaccine</strong>
                            <span className="milestone-detail">Completed on May 13, 2021</span>
                            <span className="milestone-tag tag-achieved">ACHIEVED</span>
                        </div>
                    </div>

                    <div className="milestone-item">
                        <div className="milestone-icon milestone-blue">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div className="milestone-info">
                            <strong>On Track</strong>
                            <span className="milestone-detail">92% Consistency Score</span>
                            <span className="milestone-tag tag-current">CURRENT STATUS</span>
                        </div>
                    </div>

                    <div className="milestone-item">
                        <div className="milestone-icon milestone-red">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                        </div>
                        <div className="milestone-info">
                            <strong>Immunity Guardian</strong>
                            <span className="milestone-detail">Reach 15 vaccinations</span>
                            <div className="milestone-progress">
                                <div className="milestone-progress-fill" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Stats Row ===== */}
            <div className="stats-row">
                <div className="stat-card stat-card-purple">
                    <div className="stat-icon-wrapper stat-icon-purple">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">TOTAL CHILDREN</span>
                        <span className="stat-value">2</span>
                        <span className="stat-subtitle">Registered profiles</span>
                    </div>
                </div>

                <div className="stat-card stat-card-orange">
                    <div className="stat-icon-wrapper stat-icon-orange">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">UPCOMING</span>
                        <span className="stat-value stat-orange">1 Due</span>
                        <span className="stat-subtitle">Next: DTP Booster</span>
                    </div>
                </div>

                <div className="stat-card stat-card-green">
                    <div className="stat-icon-wrapper stat-icon-green">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <span className="stat-label">COMPLIANCE</span>
                        <span className="stat-value stat-green">Perfect</span>
                        <span className="stat-subtitle">All vaccines on time</span>
                    </div>
                </div>
            </div>

            {/* ===== Bottom Section: Timeline + Sidebar ===== */}
            <div className="dashboard-bottom">
                {/* Vaccination Timeline */}
                <div className="timeline-card">
                    <div className="timeline-header">
                        <h3 className="timeline-title">Vaccination Timeline</h3>
                        <a href="#" className="full-history-link">Full History</a>
                    </div>
                    <div className="timeline-table-wrapper">
                        <table className="timeline-table">
                            <thead>
                                <tr>
                                    <th>VACCINE NAME</th>
                                    <th>DUE DATE</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vaccines.map((vaccine, index) => (
                                    <tr key={index}>
                                        <td className="vaccine-name-cell">
                                            <div className="vaccine-name-main">{vaccine.name}</div>
                                            <div className="vaccine-name-sub">{vaccine.subtitle}</div>
                                        </td>
                                        <td className="vaccine-date-cell">{vaccine.date}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(vaccine.status)}`}>
                                                {vaccine.status === 'Completed' && (
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                )}
                                                {vaccine.status === 'Missed' && (
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                                    </svg>
                                                )}
                                                {vaccine.status}
                                            </span>
                                        </td>
                                        <td>
                                            <a href="#" className={`action-link ${getActionClass(vaccine.action)}`}>
                                                {vaccine.action}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="sidebar-cards">
                    {/* Did You Know Card */}
                    <div className="did-you-know-card">
                        <h4 className="dyk-title">DID YOU KNOW?</h4>
                        <p className="dyk-text">
                            Getting the DTP booster on time provides critical protection against Whooping Cough as your child becomes more active in social settings.
                        </p>
                        <a href="#" className="dyk-link">
                            Go to Awareness Hub →
                        </a>
                    </div>

                    {/* Digital Vaccine Card */}
                    <div className="digital-card-promo">
                        <h4 className="dvc-title">Digital Vaccine Card</h4>
                        <p className="dvc-text">
                            Access your child's verified vaccination records anytime, even offline.
                        </p>
                        <button className="dvc-btn">Download QR Code</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

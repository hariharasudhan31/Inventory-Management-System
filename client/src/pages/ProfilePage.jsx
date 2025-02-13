import Page from "../components/Page";
import "./ProfilePage.css"; // Import the CSS file

function ProfilePage() {
    return (
        <Page>
            <div className="profile-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <h2>IMS</h2>
                    <nav>
                        <ul>
                            <li>Dashboard</li>
                            <li>Products</li>
                            <li>User</li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="main-content">
                    {/* Top Navigation */}
                    <header className="top-nav">
                        <button className="logout-btn">Logout</button>
                    </header>

                    {/* User Profile Section */}
                    <div className="profile-card">
                        <div className="profile-pic"></div>
                        <div className="profile-info">
                            <h3>User Name</h3>
                            <p><strong>Role:</strong> Administrator</p>
                            <p><strong>Email:</strong> user@example.com</p>
                        </div>
                    </div>

                    {/* Business Details Form */}
                    <div className="business-card">
                        <h3>Business Details</h3>
                        <form>
                            <label>Business Name</label>
                            <input type="text" />

                            <label>Address</label>
                            <input type="text" />

                            <label>Contact Number</label>
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default ProfilePage;

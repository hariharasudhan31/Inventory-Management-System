import Page from "../components/Page";
import "./HomePage.css";

function HomePage() {
    return (
        <Page>
            <div className="dashboard-container">
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

                    {/* Overview Cards */}
                    <div className="stats-container">
                        <div className="stats-card">Total Sales</div>
                        <div className="stats-card">Total Profit</div>
                        <div className="stats-card">Stock Value</div>
                    </div>

                    {/* Charts */}
                    <div className="charts-container">
                        <div className="chart-box">Sales Chart</div>
                        <div className="chart-box">Profit Chart</div>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default HomePage;

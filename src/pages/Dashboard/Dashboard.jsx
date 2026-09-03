import { useAuth } from "../../context/AuthContext";

import Sidebar from "../../components/dashboard/Sidebar";
import DashboardTopbar from "../../components/dashboard/DashboardTopbar";
import StatCard from "../../components/dashboard/StatCard";
import QuickActionCard from "../../components/dashboard/QuickActionCard";
import RecentDocuments from "../../components/dashboard/RecentDocuments";
import RecentActivity from "../../components/dashboard/RecentActivity";

function Dashboard() {
  const { user } = useAuth();

  const userName = user?.name || "User";

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <DashboardTopbar />

        <main className="dashboard-main">

          {/* Welcome */}
          <section className="dashboard-welcome">
            <div>
              <span className="topbar-eyebrow">
                OVERVIEW
              </span>

              <h2>
                Welcome back, {userName}.
              </h2>

              <p>
                Manage your documents, discover information,
                and turn your PDFs into searchable knowledge.
              </p>
            </div>

            <div className="dashboard-date">
              <i className="bi bi-calendar3 me-2"></i>
              Your workspace
            </div>
          </section>

          {/* Stats */}
          <section className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <StatCard
                icon="bi-files"
                value="24"
                label="Total Documents"
                description="PDFs in your workspace"
                iconClass="stat-blue"
              />
            </div>

            <div className="col-sm-6 col-xl-3">
              <StatCard
                icon="bi-check2-circle"
                value="21"
                label="Processed"
                description="Ready for search"
                iconClass="stat-green"
              />
            </div>

            <div className="col-sm-6 col-xl-3">
              <StatCard
                icon="bi-search"
                value="86"
                label="Searches"
                description="Queries this month"
                iconClass="stat-orange"
              />
            </div>

            <div className="col-sm-6 col-xl-3">
              <StatCard
                icon="bi-hdd"
                value="42%"
                label="Storage Used"
                description="Within workspace limit"
                iconClass="stat-purple"
              />
            </div>
          </section>

          {/* Quick Actions */}
          <section className="dashboard-section">
            <div className="dashboard-section-header">
              <div>
                <span className="panel-eyebrow">
                  QUICK ACTIONS
                </span>

                <h5>
                  What would you like to do?
                </h5>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <QuickActionCard
                  icon="bi-cloud-arrow-up"
                  title="Upload PDF"
                  description="Add a new document to your workspace."
                  path="/documents"
                  variant="blue"
                />
              </div>

              <div className="col-md-4">
                <QuickActionCard
                  icon="bi-search"
                  title="Search Documents"
                  description="Find information using keywords or meaning."
                  path="/search"
                  variant="orange"
                />
              </div>

              <div className="col-md-4">
                <QuickActionCard
                  icon="bi-chat-square-text"
                  title="Chat with PDF"
                  description="Ask questions about your documents."
                  path="/documents"
                  variant="blue"
                />
              </div>
            </div>
          </section>

          {/* Documents + Activity */}
          <section className="dashboard-section">
            <div className="row g-4">
              <div className="col-xl-7">
                <RecentDocuments />
              </div>

              <div className="col-xl-5">
                <RecentActivity />
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
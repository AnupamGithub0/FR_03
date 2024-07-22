import { Link } from "react-router-dom";
import Container from "../Container";

export default function AdminDashboard() {
  return (
    <Container>
      <div className="flex">
        <main className="flex-1 p-6">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to={"/dashboard/admin/create-tournament"}
              className={`bg-white p-6 rounded-lg shadow-lg`}
            >
              <h2 className="text-xl font-semibold mb-4">Create Tournament</h2>
              <p className="text-gray-600">For FF</p>
            </Link>

            <Link
              to={"/dashboard/admin/users"}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Total User</h2>
              <p className="text-gray-600">Active</p>
            </Link>

            <Link
              to={"/dashboard/admin/tournament"}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">
                Share room id and password
              </h2>
              <p className="text-gray-600">
                Provide you room details for all user
              </p>
            </Link>
          </section>
        </main>
      </div>
    </Container>
  );
}

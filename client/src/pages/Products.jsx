import Page from "../components/Page";

function Products() {
    return (
        <Page>
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="w-1/5 bg-gray-100 p-5">
                    <h2 className="text-xl font-bold mb-5">IMS</h2>
                    <nav>
                        <ul>
                            <li className="mb-2"><a href="#" className="block p-2 hover:bg-gray-200">Dashboard</a></li>
                            <li className="mb-2"><a href="#" className="block p-2 hover:bg-gray-200">Products</a></li>
                            <li><a href="#" className="block p-2 hover:bg-gray-200">User</a></li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="w-4/5 p-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl font-bold">Products</h1>
                        <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between mb-5">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Add Product</button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border p-2 rounded w-1/3"
                        />
                    </div>

                    {/* Product Table */}
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Product Name</th>
                                <th className="border p-2">Stock</th>
                                <th className="border p-2">Price</th>
                                <th className="border p-2">Status</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Product rows will be added dynamically */}
                        </tbody>
                    </table>
                </main>
            </div>
        </Page>
    );
}

export default Products;

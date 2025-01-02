import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function UserIndex({users}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Id</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Name</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Email</th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user) => {
                                        return (
                                            <tr key={user.id} className="border-b">
                                                <td className="px-4 py-4 whitespace-nowrap">{user.id}</td>
                                                <td className="px-4 py-4 whitespace-nowrap">{user.name}</td>
                                                <td className="px-4 py-4 whitespace-nowrap">{user.email}</td>
                                                <td className="px-4 py-4 whitespace-nowrap"></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <Pagination links={users.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

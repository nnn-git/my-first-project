import UserProfileCard from '@/components/UserProfileCard';

export default function ProfilePage() {
    
    
    const mockUserData = {
        name: "Бат-Эрдэнэ",
        id: "a8e9d1c7-f5b4-4a2e-9d0b-3c7a6e1f4d2b",
        isTeacher: true 
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-12">Хэрэглэгчийн Профайл</h1>
            
           
            <UserProfileCard
                userName={mockUserData.name}
                userId={mockUserData.id}
                isTeacher={mockUserData.isTeacher}
            />

            <p className="mt-8 text-sm text-gray-500">
                test
            </p>
        </div>
    );
}
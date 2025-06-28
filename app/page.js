'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-6 border-2 border-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">👩‍💻 Coding Profiles Hub</h1>
        <p className="text-lg text-gray-300">
          A simple platform to showcase your GitHub, LeetCode, and Codeforces profiles.
          Submit your coding handles and connect with fellow developers!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="w-full sm:w-auto text-black cursor-pointer font-semibold bg-white hover:bg-gray-200 transition"
            onClick={() => router.push('/users')}
          >
            🔍 View All Users
          </Button>

          <Button
            className="w-full sm:w-auto border cursor-pointer border-white bg-transparent hover:bg-white hover:text-black transition"
            onClick={() => router.push('/submit')}
          >
            ✍️ Submit Your Profile
          </Button>
        </div>
      </div>
    </div>
  );
}

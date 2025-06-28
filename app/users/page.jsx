"use client";

import { useEffect, useState } from "react";
import { listUserData } from "@/appwrite/services/dashboard";
import ProfileCard from "@/components/profileCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await listUserData();
        setUsers(res?.documents || []);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        📜 Submitted Profiles
      </h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-400">No profiles submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <ProfileCard
              key={user.$id}
              name={user.name}
              email={user.email}
              github={user.github_id}
              leetcode={user.leetcode_id}
              codeforces={user.cf_id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

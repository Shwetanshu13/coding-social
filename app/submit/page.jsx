"use client";

import { useState } from "react";
import { addUserData } from "@/appwrite/services/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github_id: "",
    leetcode_id: "",
    cf_id: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUserData(formData);
    router.push("/users");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-white rounded-xl p-6 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Submit Your Profile</h1>

        <Input
          name="name"
          placeholder="Name"
          className={"p-4"}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          className={"p-4"}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="github_id"
          placeholder="GitHub Username"
          className={"p-4"}
          value={formData.github_id}
          onChange={handleChange}
          required
        />
        <Input
          name="leetcode_id"
          placeholder="LeetCode Username"
          className={"p-4"}
          value={formData.leetcode_id}
          onChange={handleChange}
          required
        />
        <Input
          name="cf_id"
          placeholder="Codeforces Username"
          className={"p-4"}
          value={formData.cf_id}
          onChange={handleChange}
          required
        />

        <Button type="submit" className="w-full cursor-pointer">
          Submit
        </Button>
      </form>
    </div>
  );
}

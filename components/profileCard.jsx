"use client";

import Image from "next/image";

export default function ProfileCard({
  name,
  email,
  github,
  leetcode,
  codeforces,
}) {
  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 transition duration-300 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-3xl text-center font-bold text-white mb-2">
          {name}
        </h2>
        <p className="text-md text-center text-gray-400 mb-6">{email}</p>
      </div>

      <div className="flex items-center justify-center gap-6">
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Image
            src="/github.png"
            alt="GitHub"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform"
          />
        </a>

        <a
          href={`https://leetcode.com/u/${leetcode}`}
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
        >
          <Image
            src="/leetcode.png"
            alt="LeetCode"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform"
          />
        </a>

        <a
          href={`https://codeforces.com/profile/${codeforces}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Codeforces"
        >
          <Image
            src="/cf.png"
            alt="Codeforces"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}

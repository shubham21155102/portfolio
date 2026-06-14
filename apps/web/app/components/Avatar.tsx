"use client";

const GRADIENTS = [
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-fuchsia-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
  "from-sky-500 to-indigo-600",
  "from-lime-500 to-emerald-600",
];

function initials(name: string) {
  const words = name
    .replace(/[(),.&]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0]!.slice(0, 2).toUpperCase();
  return (words[0]![0]! + words[1]![0]!).toUpperCase();
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

interface Props {
  name: string;
  size?: number;
  className?: string;
}

export default function Avatar({ name, size = 48, className = "" }: Props) {
  const gradient = GRADIENTS[hash(name) % GRADIENTS.length];
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white shadow-lg ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.38),
      }}
      aria-hidden
    >
      {initials(name)}
    </span>
  );
}

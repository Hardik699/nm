import { motion } from "framer-motion";

export function SkeletonCard() {
  return (
    <motion.div
      className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 space-y-4"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded w-1/2"></div>
      <div className="h-20 bg-slate-700 rounded"></div>
    </motion.div>
  );
}

export function SkeletonTableRow() {
  return (
    <motion.tr
      className="border-b border-slate-700"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <td className="px-4 py-3">
        <div className="h-4 bg-slate-700 rounded w-20"></div>
      </td>
      <td className="px-4 py-3">
        <div className="h-4 bg-slate-700 rounded w-32"></div>
      </td>
      <td className="px-4 py-3">
        <div className="h-4 bg-slate-700 rounded w-24"></div>
      </td>
      <td className="px-4 py-3">
        <div className="h-4 bg-slate-700 rounded w-28"></div>
      </td>
    </motion.tr>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-4 bg-slate-700 rounded ${
            i === lines - 1 ? "w-2/3" : "w-full"
          }`}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar() {
  return (
    <motion.div
      className="w-16 h-16 bg-slate-700 rounded-full"
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}

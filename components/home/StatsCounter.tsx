"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 1156, suffix: "+", label: "Total Clients Served" },
  { end: 1680, suffix: "+", label: "Total Policies Sold" },
  { end: 18, suffix: "+", label: "Death Claims Settled" },
  { end: 126, suffix: "+", label: "Maturity Claims Paid" },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-primary">
            {inView ? (
              <CountUp end={s.end} duration={2.5} separator="," />
            ) : (
              "0"
            )}
            <span>{s.suffix}</span>
          </div>
          <p className="text-gray-700 text-sm font-medium mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

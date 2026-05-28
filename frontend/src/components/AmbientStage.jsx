import React from 'react';
import { motion } from 'framer-motion';

/**
 * Abstract atmospheric placeholders — NOT fake dashboards.
 * Soft silhouettes, ambient interface shapes, light composition blocks.
 */

export const AmbientStage = ({ children, className = '', aspect = 'aspect-[4/3]' }) => (
  <div className={`relative ${aspect} overflow-hidden rounded-2xl ${className}`}>
    {/* Warm cream base */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#fdf9f3] via-[#fbf3e7] to-[#f5ead7]" />
    {/* Top light */}
    <div className="absolute inset-x-12 top-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent" />
    {/* Floor warmth */}
    <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-amber-100/40 to-transparent" />
    {/* Single light streak */}
    <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
    {/* Soft silhouette blocks */}
    {children}
  </div>
);

/* Blurred ambient shapes - suggest UI without faking it */
export const AmbientSilhouette = ({ variant = 'card' }) => {
  if (variant === 'card') {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-[55%] aspect-[4/5] rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-2xl shadow-amber-900/10"
        />
      </div>
    );
  }
  if (variant === 'feed') {
    return (
      <div className="absolute inset-0 p-6 flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl h-16 shadow-sm"
          />
        ))}
      </div>
    );
  }
  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 p-6 grid grid-cols-3 gap-2.5">
        {[0,1,2,3,4,5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className={`bg-white/60 backdrop-blur-sm border border-white/80 rounded-lg shadow-sm ${i === 2 ? 'bg-amber-200/60' : ''}`}
          />
        ))}
      </div>
    );
  }
  return null;
};

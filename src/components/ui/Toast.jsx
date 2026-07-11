"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="toast-viewport">
      <AnimatePresence>
        {toast ? (
          <motion.div
            key={toast.id}
            className={`toast-card ${toast.type}`}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role="status"
          >
            <span className="toast-icon">
              {toast.type === "error" ? <AlertCircle size={19} /> : <CheckCircle2 size={19} />}
            </span>
            <div className="toast-body">
              <div className="toast-title">{toast.title}</div>
              <div className="toast-desc">{toast.desc}</div>
            </div>
            <button type="button" className="toast-close" aria-label="Dismiss notification" onClick={onClose}>
              <X size={15} />
            </button>
            <motion.span
              className="toast-progress"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>,
    document.body
  );
}

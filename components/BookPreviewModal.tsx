"use client";

import { useEffect, useState } from "react";

interface BookPreviewModalProps {
  pageCount: number;
  previewBaseUrl: string;
  triggerLabel?: string;
}

export default function BookPreviewModal({
  pageCount,
  previewBaseUrl,
  triggerLabel = "Leseprobe ansehen ›",
}: BookPreviewModalProps) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
      if (e.key === "ArrowRight") setPage((p) => Math.min(pageCount, p + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, pageCount]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setPage(1);
          setOpen(true);
        }}
        style={{
          background: "transparent",
          border: "none",
          padding: 0,
          color: "inherit",
          cursor: "pointer",
          textDecoration: "underline",
          font: "inherit",
          fontSize: 14,
          marginTop: 12,
        }}
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Leseprobe"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              touchAction: "pan-y",
            }}
          >
            <img
              src={`${previewBaseUrl}${page}.jpg`}
              alt={`Leseprobe Seite ${page} von ${pageCount}`}
              style={{
                display: "block",
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                background: "white",
              }}
            />
            <button
              type="button"
              aria-label="Schließen"
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: -40,
                right: 0,
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: 28,
                cursor: "pointer",
                padding: 4,
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "white",
              fontSize: 14,
            }}
          >
            <button
              type="button"
              aria-label="Vorherige Seite"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                cursor: page === 1 ? "not-allowed" : "pointer",
                opacity: page === 1 ? 0.4 : 1,
                fontSize: 20,
                lineHeight: 1,
              }}
            >
              ‹
            </button>
            <span>
              {page} / {pageCount}
            </span>
            <button
              type="button"
              aria-label="Nächste Seite"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={page === pageCount}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                cursor: page === pageCount ? "not-allowed" : "pointer",
                opacity: page === pageCount ? 0.4 : 1,
                fontSize: 20,
                lineHeight: 1,
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

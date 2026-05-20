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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navButtonStyle = (disabled: boolean): React.CSSProperties => ({
    width: 44,
    height: 44,
    flexShrink: 0,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.35)",
    color: "white",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.35 : 1,
    fontSize: 22,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 16px",
            boxSizing: "border-box",
          }}
        >
          <button
            type="button"
            aria-label="Schließen"
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 16,
              right: 20,
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: 32,
              cursor: "pointer",
              lineHeight: 1,
              zIndex: 2,
            }}
          >
            ×
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              maxWidth: "100%",
              maxHeight: "calc(100vh - 110px)",
            }}
          >
            <button
              type="button"
              aria-label="Vorherige Seite"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              style={navButtonStyle(page === 1)}
            >
              ‹
            </button>

            <img
              src={`${previewBaseUrl}${page}.jpg`}
              alt={`Leseprobe Seite ${page} von ${pageCount}`}
              style={{
                display: "block",
                maxWidth: "calc(100vw - 160px)",
                maxHeight: "calc(100vh - 110px)",
                objectFit: "contain",
                background: "white",
              }}
            />

            <button
              type="button"
              aria-label="Nächste Seite"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={page === pageCount}
              style={navButtonStyle(page === pageCount)}
            >
              ›
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: 16,
              color: "white",
              fontSize: 14,
              letterSpacing: "0.04em",
            }}
          >
            {page} / {pageCount}
          </div>
        </div>
      )}
    </>
  );
}

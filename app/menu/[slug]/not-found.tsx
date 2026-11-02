import { notFound } from "next/navigation";
import { menuItems } from "@/data/menu";

export default function NotFound() {
  // This page shows when a menu slug is not found
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🍽️</div>
      <h1
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "2.5rem",
          fontWeight: 600,
          color: "var(--espresso)",
          marginBottom: "0.75rem",
        }}
      >
        Item Not Found
      </h1>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "1rem",
          color: "var(--text-muted)",
          maxWidth: 400,
          lineHeight: 1.7,
          marginBottom: "2rem",
        }}
      >
        We couldn&apos;t find that dish. It may have moved or been removed from
        the menu.
      </p>
      <a href="/menu" className="btn-primary">
        Browse the Menu
      </a>
    </div>
  );
}

void notFound;
void menuItems;

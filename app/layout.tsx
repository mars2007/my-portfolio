import type { Metadata } from "next";
import "./globals.css"; // Tailwindの設定が読み込まれます
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fumiaki Masakiyo | Official Portfolio",
  description: "AI, Data Science, and Information Education Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">
        {/* ヘンダー / ナビゲーション */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight text-indigo-600">
              Masakiyo Lab
            </Link>
            <nav className="flex gap-6 font-medium">
              <Link href="/profile" className="hover:text-indigo-600 transition">Profile</Link>
              <Link href="/projects" className="hover:text-indigo-600 transition">Projects</Link>
              <Link href="/lab" className="hover:text-indigo-600 transition">Education</Link>
            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* フッター */}
        <footer className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center text-sm">
            © {new Date().getFullYear()} Fumiaki Masakiyo. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
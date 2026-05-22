import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-950 text-white rounded-2xl p-8 md:p-12 shadow-xl">
        <div className="max-w-3xl">
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm block mb-2">
            AI & Data Science & Education
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            政清 史晃 / Fumiaki Masakiyo
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            ICT、データサイエンス、AIの社会実装と教育を専門としています。
            理論の探求にとどまらず、PythonやRを用いた具体的なシミュレーション、Web技術の活用など、手を動かす教育と開発を実践しています。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/profile" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-lg transition shadow-md">
              詳しいプロフィール
            </Link>
            <a href="https://github.com/mars2007" target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-lg border border-slate-700 transition">
              GitHubを見る
            </a>
          </div>
        </div>
      </section>

      {/* 注目の研究・開発領域 */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-indigo-600 text-2xl mb-3">🤖</div>
          <h3 className="font-bold text-lg mb-2">Artificial Intelligence</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            ディープラーニング（CNN, RNN, LSTM, YOLOなど）のアルゴリズム理解と、それらを活用した画像認識・時系列解析の実装。
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-indigo-600 text-2xl mb-3">📊</div>
          <h3 className="font-bold text-lg mb-2">Data Science</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            統計学の基礎から、RやPythonを用いたデータ解析、数理モデル構築、株価・マクロデータのテクニカルな分析アプローチ。
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-indigo-600 text-2xl mb-3">💻</div>
          <h3 className="font-bold text-lg mb-2">Information Education</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            プログラミング初学者向けのカリキュラム設計、Webアプリケーション開発、キャリア支援と連動したIT人材の育成。
          </p>
        </div>
      </section>
    </div>
  );
}
export default function EducationPage() {
  // 担当科目・教育テーマのデータ
  const courses = [
    {
      title: "🤖 人工知能（AI）基礎 / 応用演習",
      description: "ニューラルネットワークの基礎数理から、CNN、RNN、LSTM、最新のYOLOを用いた画像認識などの実装演習。PythonとGoogle Colabを活用し、理論をコードで動かして体感する授業を展開しています。",
      target: "情報系科目・ゼミナール"
    },
    {
      title: "📊 統計学・データサイエンス実践",
      description: "R言語やPythonを用いたデータ分析、多変量解析、数理モデルの構築。データを客観的に読み解き、社会課題や実務（経済・技術シミュレーションなど）にアプローチする力を養います。",
      target: "全学共通 / 専門基礎科目"
    },
    {
      title: "💻 プログラミング＆Web技術演習",
      description: "プログラミング初学者を対象としたロジック構築の指導、およびHTML/CSS/JavaScriptからモダンなWebフレームワーク（Next.js等）に繋がる実践的なICT教育を行っています。",
      target: "初学者向けカリキュラム"
    }
  ];

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* ページタイトル */}
      <div className="border-b pb-4 border-indigo-200">
        <h2 className="text-3xl font-bold text-slate-900">Education & Lab / 教育・担当活動</h2>
        <p className="text-slate-500 mt-2 text-sm">大学における講義・演習内容、および教育活動への取り組みについて紹介します。</p>
      </div>

      {/* 教育ビジョン */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 md:p-8 rounded-2xl shadow-md">
        <h3 className="text-lg font-bold text-indigo-300 mb-3">教育へのアプローチ / Vision</h3>
        <p className="text-slate-200 text-sm md:text-base leading-relaxed">
          「数理の基礎」と「実践的な実装力」の融合を目指しています。
          単にツールとしてのAIやプログラミングを学ぶだけでなく、その背景にある統計学やアルゴリズムの仕組みを紐解き、学生自らが主体的にシステムを構築できる『自走する人材』の育成に注力しています。
        </p>
      </section>

      {/* 主要な担当・開講科目 */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 border-l-4 border-indigo-600 pl-3">
          📚 主な担当領域・開講講義
        </h3>
        
        <div className="grid gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h4 className="font-bold text-lg text-slate-900">{course.title}</h4>
                <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full w-fit">
                  {course.target}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* キャリア支援への取り組み */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          💼 キャリアサポート・学内貢献
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          学内におけるキャリア支援活動の統括（キャリアセンターの運営・就職指導）にも深く関わっています。
          IT・データサイエンス人材が強く求められる現代の労働市場において、学生が自身の専門スキル（工業・情報・ICT）を武器に、納得のいく進路を選択できるよう、個別面談や企業連携プログラムの企画・運営を行っています。
        </p>
      </section>
    </div>
  );
}
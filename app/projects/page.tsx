export default function ProjectsPage() {
  // 手動で管理する主要プロジェクト（後ほどGitHub API連動に拡張可能）
  const projects = [
    {
      title: "AI & Neural Network Educational Materials",
      description: "初学者向けのAI基礎教材。バックプロパゲーションの数理視覚化や、YOLO、RNN/LSTMのPython実装コード集。",
      tags: ["Python", "PyTorch", "Google Colab"],
      link: "https://github.com/mars2007"
    },
    {
      title: "Data Science & Statistical Analysis Tool",
      description: "R言語およびPythonを用いた統計解析、多変量解析、および時系列予測（株価やマクロ経済指標のテクニカル分析など）のシミュレーション環境。",
      tags: ["R", "Python", "Data Science"],
      link: "https://github.com/mars2007"
    },
    {
      title: "Academic License & Device Management Scripts",
      description: "教育機関におけるMicrosoft 365ライセンス割り当てや、学内端末の展開を効率化するための自動化スクリプト群。",
      tags: ["PowerShell", "Office 365"],
      link: "https://github.com/mars2007"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3 border-indigo-200 gap-2">
        <h2 className="text-3xl font-bold">Projects / 成果物・リポジトリ</h2>
        <a href="https://github.com/mars2007" target="_blank" rel="noopener noreferrer" className="text-sm bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-md transition flex items-center gap-1 w-fit">
          GitHub Profile ↗
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between hover:border-indigo-300 transition-colors">
            <div>
              <h3 className="font-bold text-lg mb-2 text-indigo-950">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1">
                ソースコードを見る ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
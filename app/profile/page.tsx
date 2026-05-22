export default function ProfilePage() {
  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold border-b pb-3 border-indigo-200">Profile / プロフィール</h2>
      
      {/* 基本情報 */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 flex flex-col items-center justify-center border-r border-slate-100 pb-4 md:pb-0">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-3xl mb-2">👨‍🏫</div>
          <h3 className="font-bold text-lg">政清 史晃</h3>
          <p className="text-xs text-slate-500">Fumiaki Masakiyo</p>
        </div>
        <div className="md:col-span-2 space-y-3 text-sm">
          <p><strong>所属:</strong> 大学教員 (AI・データサイエンス教育 / キャリア支援)</p>
          <p><strong>専門分野:</strong> 情報教育、数理モデル、ニューラルネットワーク、Webアプリケーション実装</p>
          <p><strong>保有資格:</strong> 高等学校教諭一種免許状（工業） 等</p>
          <p className="text-slate-600 leading-relaxed">
            大学において情報科学、AIの基礎、統計学・データサイエンスの講義・演習を担当。
            理論に偏らず、学生が実際に手を動かしてシミュレーションや実装を行えるカリキュラム開発に注力しています。
          </p>
        </div>
      </section>

      {/* 略歴・教育研究活動 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">⏱️ 略歴・活動</h3>
        <div className="relative border-l border-slate-200 pl-6 ml-2 space-y-6 text-sm">
          <div className="relative">
            <span className="absolute -left-[31px] top-1 bg-indigo-600 w-3 h-3 rounded-full"></span>
            <span className="text-xs font-semibold text-indigo-600 block">教育活動</span>
            <h4 className="font-bold">AI・データサイエンスカリキュラムの構築</h4>
            <p className="text-slate-600 mt-1">
              Python（YOLOを用いた画像認識、LSTMによる時系列解析）やR言語を用いた、初学者向けのデータサイエンス実践教材の開発と指導。
            </p>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-1 bg-indigo-600 w-3 h-3 rounded-full"></span>
            <span className="text-xs font-semibold text-indigo-600 block">学内貢献</span>
            <h4 className="font-bold">キャリア支援・就職指導体制の統括</h4>
            <p className="text-slate-600 mt-1">
              キャリアセンターにおける学生の就職支援、企業連携の強化、および学内情報システムのライセンス・インフラ管理への助言。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
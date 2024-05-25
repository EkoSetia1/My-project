import ContentLayout from "../Layout/ContentLayout";
import DefaultLayout from "../Layout/DefaultLayout";

function HomeSection() {
  return (
    <DefaultLayout>
      <ContentLayout
        // title="Welcome to My Portfolio"
        // color="text-slate-100"
        style="bg-[url('../src/assets/horikita.png')] bg-cover bg-center bg-no-repeat"
      >
        <main className="grid grid-cols-3 ">
          <div className="col-span-2 flex flex-col gap-40 justify-between">
            <div>
              <h1 className="font-Caveat text-8xl font-extrabold text-slate-100 ">
                Eko Setiawan
              </h1>
              <p className="text-slate-100 font-light ">
                ウィーブー人間ではない
              </p>
            </div>
            <div>
              <p className=" text-slate-100  ">
                私はタイピングと絵を描くのが好きなただの人です。さらに詳しく知りたい場合は、下のボタンをクリックするか、左側のナビゲーションにあるお問い合わせページにアクセスしてください。
              </p>
              <button className="bg-amber-500 py-2 px-16 rounded-sm  font-medium text-stone-900 mt-4 hover:bg-amber-600 active:bg-amber-700 active:translate-x-1 active:translate-y-1">
                Contact me
              </button>
            </div>
          </div>
        </main>
      </ContentLayout>
    </DefaultLayout>
  );
}

export default HomeSection;

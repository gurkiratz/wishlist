import { RecoilRoot } from "recoil"
// import Categories from "./components/Categories"
import WishTable from "./components/WishTable"

function App() {
  return (
    <RecoilRoot>
      <div className="py-2 px-4">
        <h1 className="text-3xl font-bold text-timberwolf-200">
          Your Own Wishlist
        </h1>
        <p className="">
          By{" "}
          <a
            href="https://github.com/gurkiratz"
            target="_blank"
            className="underline"
          >
            Gurkirat
          </a>
        </p>
      </div>
      <div className="px-4 py-2 flex flex-col md:flex-row gap-16">
        {/* <div className="w-full md:w-1/6">
          <h2>Categories</h2>
          <Categories />
        </div> */}
        <div className="w-full">
          <WishTable />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App

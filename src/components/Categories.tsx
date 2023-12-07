const Categories = () => {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 gap-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <button
          type="button"
          className="py-2 px-4 hover:bg-timberwolf-700 focus:ring-timberwolf-500 focus:ring-offset-timberwolf-200 text-raisin_black w-full transition ease-in duration-200 text-center border-2 border-timberwolf-300 text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          +
        </button>
      </div>
    </div>
  )
}

const CategoryCard = () => {
  return (
    <button
      type="button"
      className="py-2 px-4 bg-timberwolf-600 hover:bg-timberwolf-700 focus:ring-timberwolf-500 focus:ring-offset-timberwolf-200 text-raisin_black w-full transition ease-in duration-200 text-left text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 "
    >
      Square is me
    </button>
  )
}

export default Categories

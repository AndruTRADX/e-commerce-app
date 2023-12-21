import SearchOptions from '../common/SearchOptions'

const AsideLeft = ({
  isLogin,
  setLogin,
}: {
  isLogin: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <aside className="md:w-[320px] xs:w-[220px] h-screen mt-8 pb-16 mr-8 hidden xs:block sticky top-8 overflow-y-auto">
      <div className="border border-slate-200 rounded-lg p-4">
        <SearchOptions isLogin={isLogin} setLogin={setLogin} />
      </div>
    </aside>
  )
}

export default AsideLeft

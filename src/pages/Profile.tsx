import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import LazyImage from '../common/LazyImage'
import Navbar from '../components/Navbar'
import { useAuth } from '../hooks/useAuth'

const Profile = ({
  isLogin,
  setLogin,
}: {
  isLogin: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const auth = useAuth()

  return (
    <main className="w-full min-h-screen flex flex-col items-center px-8">
      <Navbar isLogin={isLogin} setLogin={setLogin} />
      <article className="w-full flex flex-grow min-h-full max-w-screen-xl">
        <div className="w-full flex-col flex justify-start relative">
          <div className="w-full bg-slate-50 h-[130px] border-x border-slate-200" />
          <LazyImage
            className="rounded-full border-[4px] border-white shadow-lg shadow-slate-200 w-[120px] h-[120px] absolute top-20 left-5"
            src={`https://ui-avatars.com/api/?background=334155&color=fff&name=${
              auth?.user?.name as string
            }`}
          />
          <div className="w-full flex flex-col xs:flex-row justify-between xs:pl-[156px] pt-24 xs:pt-3 gap-y-2 border-t border-slate-200">
            <div>
              <h2 className="text-2xl xs:text-3xl capitalize text-slate-700 font-semibold">
                {auth?.user?.name as string}
              </h2>
              <p className="text-base text-slate-400 font-normal">
                {auth?.user?.email as string}
              </p>
            </div>

            <button
              className="flex items-center py-2.5 px-3.5 h-min border border-slate-200 mt-2 gap-2 hover:bg-slate-50 cursor-pointer rounded-lg"
              onClick={() => {
                auth?.signOut()
                setLogin(false)
              }}
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5 text-slate-700" />
            <p className="text-slate-700 font-semibold">Log Out</p>
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Profile

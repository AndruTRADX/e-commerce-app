import MobileModal from '../common/MobileModal'
import SearchOptions from '../common/SearchOptions'

interface AsideSearchMobileProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLogin: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

const AsideSearchMobile = ({
  open,
  setOpen,
  isLogin,
  setLogin,
}: AsideSearchMobileProps) => {
  return (
    <MobileModal
      title="Searching Options"
      open={open}
      setOpen={setOpen}
      children={
        <div className='min-w-[260px]'>
          <SearchOptions isLogin={isLogin} setLogin={setLogin} />
        </div>
      }
    />
  )
}

export default AsideSearchMobile

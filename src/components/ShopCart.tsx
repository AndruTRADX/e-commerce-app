import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ProductShopCart from './ProductShopCart'

const products = [
  {
    id: 'hisduabdsak',
    name: 'Nintendo Switch',
    description: 'Very cool Nintendo console',
    image: 'https://picsum.photos/400/400/',
    price: 299,
    stock: 5,
    category: '64b5b1adde53eeff0026b0fd',
    brand: '64b5b219de53eeff0026b100',
  },
  {
    id: 'nasbdhkasdbhk',
    name: 'Nintendo Switch',
    description: 'Very cool Nintendo console',
    image: 'https://picsum.photos/400/400/',
    price: 299,
    stock: 5,
    category: '64b5b1adde53eeff0026b0fd',
    brand: '64b5b219de53eeff0026b100',
  },
]

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
}

const ShopCart = ({ open, setOpen }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-500 bg-opacity-75 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-slate-700">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-slate-400 hover:text-slate-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-slate-200"
                          >
                            {products.map((product, index) => (
                              <ProductShopCart
                                product={product}
                                index={index}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-slate-700">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-slate-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-slate-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-slate-700 hover:text-slate-800"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShopCart

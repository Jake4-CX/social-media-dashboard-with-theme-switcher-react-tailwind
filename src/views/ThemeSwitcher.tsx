
export function ThemeSwitcher() {
  
  return (
    <div>
      <nav className="flex flex-row justify-between items-center bg-white p-4 mx-auto md:px-52 w-screen">
        <div className="p-6 pl-0">
          <h2 className="text-2xl font-bold">Social Media Dashboard</h2>
          <p className="font-bold">Total Followers: 23,004</p>
        </div>

        <hr className="border-t-4 border-gray-400"/>

        <div className="right-0 flex gap-x-3">
          <a className="font-bold m-auto">Dark Mode</a>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer h-0 w-0 opacity-0"/>
            <div className="w-16 h-8 bg-gradient-to-r from-[#3a9adb] to-[#56c792] rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-8 peer-checked:after:border-[#eef4fb] after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-[#eef4fb] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-[#3a9adb] peer-checked:to-[#56c792]"></div>
          </label>
        </div>
      </nav>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 md:mx-48 mx-8">
        { [1, 2, 3, 4].map((social, i) => (
                <div className="bg-gray-200 rounded-lg border-t-[#1790f1] border-t-4 h-[280px] col-span-1">
                  <div className="flex flex-col justify-between items-center p-4">
                    <div className="flex flex-row gap-x-2 pt-3">
                      <img className="h-6 w-6" src="images/icon-facebook.svg" alt="facebook" />
                      <p>@nathanf</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold text-8xl">1987</h1>
                      <a className="text-lg uppercase pt-2">Followers {social}</a>
                      <a className="flex flex-row text-[#55caab] font-bold pt-6">
                        <img className="m-auto mr-1 h-2 w-2" src="images/icon-up.svg" alt="up" />
                        <span className="mr-1">12</span>
                        <span>Today</span>
                      </a>
                    </div>
                  </div>
                </div>
        ))}
      </div>


    </div>
  )
}
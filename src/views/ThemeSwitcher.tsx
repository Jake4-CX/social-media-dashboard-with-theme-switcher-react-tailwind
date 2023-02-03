import { useState } from "react"

export function ThemeSwitcher() {

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  const followers_media = [
    {"name": "facebook", "socialName": "@nathanf", "followers": 1987, "today": 12, "icon": "images/icon-facebook.svg", "color": "#1790f1", "type": "followers"},
    {"name": "twitter", "socialName": "@nathanf", "followers": 1044, "today": 99, "icon": "images/icon-twitter.svg", "color": "#1da1f2", "type": "followers"},
    {"name": "instagram", "socialName": "@realnathanf", "followers": "11k", "today": 1099, "icon": "images/icon-instagram.svg", "color": "#c13584", "type": "followers"},
    {"name": "youtube", "socialName": "Nathan F.", "followers": 8239, "today": -144, "icon": "images/icon-youtube.svg", "color": "#ff0000", "type": "subscribers"}
  ]

  const overview_media = [
    {"name": "Page Views", "icon": "images/icon-facebook.svg", "color": "#1790f1", "number": 87, "percentage": 3},
    {"name": "Likes", "icon": "images/icon-facebook.svg", "color": "#1790f1", "number": 52, "percentage": -2},
    {"name": "Likes", "icon": "images/icon-instagram.svg", "color": "#c13584", "number": 5462, "percentage": 2257},
    {"name": "Profile Views", "icon": "images/icon-instagram.svg", "color": "#c13584", "number": 52, "percentage": 1375},
    {"name": "Retweets", "icon": "images/icon-twitter.svg", "color": "#1da1f2", "number": 117, "percentage": 303},
    {"name": "Likes", "icon": "images/icon-twitter.svg", "color": "#1da1f2", "number": 507, "percentage": 553},
    {"name": "Likes", "icon": "images/icon-youtube.svg", "color": "#ff0000", "number": 107, "percentage": -19},
    {"name": "Total Views", "icon": "images/icon-youtube.svg", "color": "#ff0000", "number": 1407, "percentage": -12}
  ]
  
  return (
    <div className="px-8 2xl:px-52 p-4 mx-auto w-screen">
      <div className="fixed inset-0 -z-20 w-full h-full bg-white dark:bg-[#1d2029]"></div>
      <div className="fixed inset-0 -z-10 w-full h-[240px] bg-[#f8f9fe] dark:bg-[#20222f] rounded-b-xl"></div>
      <nav className="flex flex-row justify-between items-center z-20">
        <div className="p-6 pl-0">
          <h2 className="text-2xl font-bold text-[#20202a] dark:text-white">Social Media Dashboard</h2>
          <p className="font-bold text-[#676978] dark:text-[#9398ba]">Total Followers: 23,004</p>
        </div>

        <div className="right-0 flex gap-x-3">
          <a className="font-bold m-auto text-[#9b9cb1] dark:text-[#fdfeff]">Dark Mode</a>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer h-0 w-0 opacity-0" onClick={toggleTheme}/>
            <div className="w-16 h-8 bg-gradient-to-r from-[#3a9adb] to-[#56c792] rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-8 peer-checked:after:border-[#eef4fb] after:content-[''] after:absolute sm:after:top-1 after:top-2 after:left-[4px] after:bg-[#eef4fb] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-[#3a9adb] peer-checked:to-[#56c792]"></div>
          </label>
        </div>

      </nav>

      <hr className="md:border-none border-t-[1px] border-[#898c9b] dark:boarder-[#373a4d] w-full pb-4 z-10"/>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-6 z-10">
        { followers_media.map((social, i) => (
                <div className={ "bg-[#f0f3fa] duration-300 hover:bg-[#e1e3f0] cursor-pointer dark:bg-[#252b43] rounded-lg border-t-4 h-[280px] col-span-1 border-t-[" + social.color + "]" }>
                  <div className="flex flex-col justify-between items-center p-4">
                    <div className="flex flex-row gap-x-2 pt-3">
                      <img className="h-6 w-6" src={social.icon} alt={social.name} />
                      <p className="font-semibold text-[#636476]">{social.socialName}</p>
                    </div>
                    <div className="flex flex-col items-center mx-24 m-auto">
                      <h1 className="font-bold text-8xl object-scale-down dark:text-white">{social.followers}</h1>
                      <a className="text-lg uppercase pt-2 text-[#6d6f7b] tracking-[0.5em]">{social.type}</a>
                      { social.today > 0 ? 
                        <a className="flex flex-row text-[#55caab] font-bold pt-6">
                          <img className="m-auto mr-1 h-2 w-2" src="images/icon-up.svg" alt="up" />
                          <span className="mr-1">{social.today}</span>
                          <span>Today</span>
                        </a>
                      : 
                        <a className="flex flex-row text-[#dc414c] font-bold pt-6">
                          <img className="m-auto mr-1 h-2 w-2" src="images/icon-down.svg" alt="down" />
                          <span className="mr-1">{social.today}</span>
                          <span>Today</span>
                        </a> }
                    </div>
                  </div>
                </div>
        ))}
      </div>

      <div className="">
        <h1 className="font-bold text-3xl mb-12 mt-16 text-[#666779] dark:text-white">Overview - Today</h1>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-cols-1 gap-6 z-10">
        { overview_media.map((social, i) => (
                <div className={ "bg-[#f0f3fa] duration-300 hover:bg-[#e1e3f0] cursor-pointer dark:bg-[#252b43] rounded-lg h-[140px] col-span-1" }>
                  <div className="grid grid-cols-2 grid-rows-2 p-4 gap-4 mt-4">
                      <div className="col-span-2 row-span-2 flex flex-row px-6">
                        <h3 className="w-full font-bold text-lg text-[#595c6d]">{social.name}</h3>
                        <img className="m-auto h-6 w-6" src={social.icon} alt={social.name} />
                      </div>
                      <div className="col-span-2 row-span-2 flex items-center justify-center px-6">
                        <h2 className="w-full font-bold text-4xl dark:text-white">{social.number}</h2>
                        {
                          social.percentage >= 0 ?
                          <a className="m-auto flex flex-row text-[#55caab] font-bold pt-6 my-0">
                            <img className="m-auto mr-1 h-2 w-2" src="images/icon-up.svg" alt="up" />
                            <span className="mr-1">{social.percentage}</span>
                            <span>%</span>
                          </a>
                          :
                          <a className="m-auto flex flex-row text-[#dc414c] font-bold pt-6">
                            <img className="m-auto mr-1 h-2 w-2" src="images/icon-down.svg" alt="down" />
                            <span className="mr-1">{social.percentage}</span>
                            <span>%</span>
                          </a>
                        }
                    </div>
                </div>
              </div>
        ))}
        </div>
    </div>
  )
}
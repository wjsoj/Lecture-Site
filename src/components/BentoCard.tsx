import { useDark } from 'rspress/runtime';
import { useEffect } from 'react';

function Card({ children,className='' }) {
  return (
    <div className={`tw-rounded-2xl tw-transition-all tw-duration-500 tw-px-2 tw-py-4 md:tw-px-10 md:tw-py-6 tw-bg-slate-50 dark:tw-bg-slate-800 tw-shadow-md ${className}`}>
      {children}
    </div>
  )
}

export default function BentoCard() {

  const isDark = useDark() ? 'tw-dark' : '';
  useEffect(() => {
    console.log('isDark:', isDark)
  })

  return (    
    <div className={`tw-flex tw-flex-col tw-items-center tw-space-y-2 md:tw-space-y-20 ${isDark}`}>
      {/* 大分割线 */}
      <div className="tw-w-[80vw] tw-h-[1px] tw-bg-slate-200 dark:tw-bg-black tw-transition-all tw-duration-500 tw-my-6"></div>
      <h1 className='tw-text-3xl md:tw-text-5xl tw-text-transparent tw-font-semibold tw-bg-clip-text tw-bg-gradient-to-br tw-from-cyan-400 tw-to-blue-600'>关于本项目</h1>
      <div className="tw-px-2 tw-max-w-screen-sm lg:tw-max-w-screen-2xl md:tw-px-4 xl:tw-px-36 tw-py-10 tw-grid tw-grid-cols-2 tw-grid-rows-8 lg:tw-grid-rows-4 lg:tw-grid-cols-4 lg:tw-grid-flow-col tw-gap-x-2 tw-gap-y-4 md:tw-gap-4">
        <Card className="tw-flex tw-flex-col tw-items-center">
          <img src="rspress-icon.png" alt="rspress" className="tw-w-2/3" />
          <h1 className="tw-text-lg md:tw-text-2xl tw-font-semibold tw-text-center">Based On Rspress</h1>
        </Card>
        <div className="tw-rounded-2xl tw-px-10 tw-py-6 tw-group tw-row-span-2 tw-relative tw-shadow-lg" style={{ 
            backgroundImage: 'url(vertical.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
        </div>
        <div className='tw-rounded-2xl tw-transition-all tw-duration-500  tw-shadow-xl tw-flex tw-justify-center tw-items-center' style={{
          backgroundImage: 'linear-gradient(125deg, #fff, #111)',
          backgroundSize: '500%',
          animation: 'bggradient 10s ease infinite',
        }}>
          <h1 className=' tw-text-3xl tw-font-semibold tw-bg-clip-text' style={{
            backgroundSize: '400%',
            animation: 'textgradient 10s ease infinite',
          }}>深色模式 <br /> 全面支持</h1>
        </div>
        <Card>            
          <h1>Card 4</h1>
        </Card>
        <Card className="tw-flex tw-flex-col tw-items-center tw-relative">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" fill="currentColor" className=" tw-bg-white dark:tw-bg-black tw-rounded-full tw-w-12 md:tw-w-20">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <p className="tw-mt-4 tw-px-2 md:tw-px-0 tw-font-semibold tw-font-mono tw-text-center tw-text-xs md:tw-text-sm">基于开源项目的Github反向代理服务，有效解决部分网络环境下文件加载速度慢的问题</p>
        </Card>
        <div className="tw-rounded-2xl tw-px-10 tw-py-6 tw-group tw-col-span-2 tw-row-span-2 tw-relative tw-mb-6 lg:tw-mb-0 tw-shadow-lg">
          <div className="tw-absolute tw-rounded-2xl tw-top-0 tw-left-0 tw-w-full tw-h-full tw-brightness-75 dark:tw-brightness-50 group-hover:tw-brightness-105 group-hover:dark:tw-brightness-95 tw-transition-all tw-ease-in tw-duration-500" style={{ 
            backgroundImage: 'url(http://110.phy.pku.edu.cn/bwfm/ly1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <p className="tw-z-50 tw-absolute tw-bottom-10 tw-left-6 tw-font-bold tw-text-2xl tw-text-white dark:tw-text-slate-200 group-hover:tw-opacity-0 tw-transition-all tw-duration-300">共享各类课程笔记、答疑视频和相关资源<br/>
          <span className="tw-text-xl">（包括但不限于物院课程）</span></p>
        </div>
        <Card className="tw-col-span-2 tw-relative">
          <img src="github_light.png" alt="github" className="dark:tw-opacity-0 tw-absolute tw-bottom-4 tw-left-4 tw-w-3/4 tw-shadow-lg tw-transition-all tw-duration-500" />
          <img src="github_dark.png" alt="github" className="tw-opacity-0 dark:tw-opacity-100 tw-absolute tw-bottom-2 md:tw-bottom-4 tw-left-2 md:tw-left-4 tw-w-4/5 md:tw-w-3/4 tw-shadow-slate-200 tw-shadow-inner  tw-transition-all tw-duration-500" />
          <h2 className=" tw-absolute tw-top-10 tw-right-1 md:tw-right-4 tw-text-2xl md:tw-text-4xl tw-font-bold tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-br tw-from-indigo-800 tw-to-pink-600 dark:tw-from-indigo-400 dark:tw-to-pink-400 tw-w-12 md:tw-w-20">社群运营</h2>
        </Card>
        <Card className="tw-col-span-2 tw-bg-gradient-to-br tw-from-orange-400 tw-to-cyan-200 dark:tw-from-orange-400 dark:tw-to-cyan-700 tw-flex tw-flex-row tw-items-center">
          <svg width="100%" viewBox="0 0 69 29" fill="none" xmlns="http://www.w3.org/2000/svg" className=" tw-basis-1/2 filter:drop-shadow(0 2px 10px rgba(0, 0, 0, .1))" ><path fillRule="evenodd" clipRule="evenodd" d="M66.375 0.375H2.625C1.38236 0.375 0.375 1.38236 0.375 2.625V25.875C0.375 27.1176 1.38236 28.125 2.625 28.125H66.375C67.6176 28.125 68.625 27.1176 68.625 25.875V2.625C68.625 1.38236 67.6176 0.375  66.375 0.375ZM23.625 5.75368V9.375V21.875H20.625V12.9963L16.1857 17.4357L15.125 18.4963L14.0643 17.4357L9.75 13.1213V22H6.75V9.5V5.87868L9.31066 8.43934L15.125 14.2537L21.0643 8.31434L23.625 5.75368ZM29.5607 12.5643L33.75 16.7537V5.375H36.75V16.7537L40.9393 12.5643L43.0607 14.6857L36.3107 21.4357L35.25 22.4963L34.1893 21.4357L27.4393 14.6857L29.5607 12.5643ZM62.3105 19.5592L56.1228 13.3736L62.4357 7.06066L60.3143 4.93934L54.0011 11.2526L47.6855 4.93916L45.5645 7.06084L51.8798 13.3739L45.6893 19.5643L47.8107 21.6857L54.0014 15.4949L60.1895 21.6808L62.3105 19.5592Z" fill="#fff"></path></svg>
          <div className="tw-flex tw-flex-col tw-basis-2/3 md:tw-basis-1/2 tw-ml-2 md:tw-ml-10 tw-space-y-3">
            <h1 className="tw-text-xl md:tw-text-2xl tw-font-bold">支持MDX</h1>
            <p className="tw-text-sm md:tw-text-base tw-text-wrap">只需编写Markdown文件，即可生成为网页。此外还允许在Markdown文件中使用Web组件，创造出色的交互效果</p>
          </div>
        </Card>
        <Card>
          <h1>Card 9</h1>
        </Card>
        <div className="tw-flex tw-flex-col tw-items-center tw-p-2 tw-mt-4 md:tw-mt-0 md:tw-px-10 md:tw-py-6 tw-bg-white dark:tw-bg-[#23272f] tw-transition-all tw-duration-500 tw-rounded-2xl">
          <h1 className="tw-text-2xl md:tw-text-2xl tw-font-semibold tw-mb-2 tw-text-transparent tw-bg-clip-text tw-bg-gradient-to-tr tw-from-indigo-600 tw-to-slate-800 dark:tw-from-indigo-400 dark:tw-to-slate-200">了解更多</h1>
          {/* 分割线，  */}
          <div className="tw-w-32 tw-h-1 tw-bg-sky-800 dark:tw-bg-sky-200 tw-mb-6"></div>
          <a href="/about/community.html" className="tw-text-lg md:tw-text-xl tw-transition-all tw-duration-200 tw-font-semibold hover:tw-underline hover:tw-text-sky-800 tw-underline-offset-2 dark:hover:tw-text-sky-200 tw-cursor-pointer">关于本项目</a>
          <a href="/about/about.html" className="tw-text-lg md:tw-text-xl tw-font-semibold hover:tw-underline tw-underline-offset-2 tw-transition-all tw-duration-200 hover:tw-text-sky-800 dark:hover:tw-text-sky-200 tw-cursor-pointer">社区公约</a>
        </div>
      </div>
    </div>
  )
}

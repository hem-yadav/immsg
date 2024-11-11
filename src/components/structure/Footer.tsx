import { Logo } from './Logo';
import { FacebookIcon, InstagramIcon, XIcon, GithubIcon, YoutubeIcon} from "../../icons/index";
import { Link } from 'react-router-dom';

const footerItems = [{
  name: "About",
  path: "/about"
},
{
  name: "Blog",
  path: "/blog"
},
{
  name: "Jobs",
  path: "/jobs"
},
{
  name: "Press",
  path: "/press"
},
{
  name: "Accessibilty",
  path: "/accessibility"
},
{
  name: "Partners",
  path: "/partners"
}];

export const RenderFooter = () => {
return (
<footer className="bg-red-1">
  <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <Logo className="h-12 w-auto ml-2 sm:ml-0" color="white"/>
    <div className='flex-1 flex flex-col items-start sm:items-center'>
        <div className='flex flex-col sm:flex-row justify-center w-full py-2'>
            {footerItems.map((item) => (
               <Link to={item.path} key={item.name}>
                    <div
                         key={item.name}
                         className='bg-transparent text-white rounded-md px-3 py-2 text-sm font-medium'
                    >
                         {item.name}
                    </div>
              </Link>
            ))}
        </div>
        <div className='w-full mb-4 border-b border-gray-outline'></div>
        <div className='flex flex-col items-start sm:items-center text-white ml-2 sm:ml-0'>
          <p>© 2024 Newland Chase</p>
          <p>Australian Migration Agents Registration Authority Number 9902581</p>
          <div className='flex justify-center gap-10 my-2'>
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <GithubIcon/>
            <YoutubeIcon/>
          </div>
        </div>
    </div>
    <div className='flex flex-col text-white ml-2 sm:ml-0'>
      <div className='font-semibold'>Global<br/> Headquarters</div>
      <div className='whitespace-pre-line'>
        Skyline House,<br/>
        200 Union St<br/>
        London SE1 0LX
      </div>
    </div>
  </div>
</footer>
)
}



/* 
*/


/* const menuItems = [{
      name: "Immigration News",
      path: "/immigration-news"
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy"
    },
    {
      name: "Security",
      path: "/Security"
    },
    {
      name: "Documentation",
      path: "/documentation"
    },
    {
      name: "Corporate",
      path: "/corporate"
    },
    {
      name: "Careers",
      path: "/careers"
    },
    {
      name: "Contact Us",
      path: "/contact-us"
  }];

export const RenderFooter = () => {
  return (
    <footer className="bg-white shadow-top pt-10">
      <div className='flex flex-row justify-between items-center gap-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className=''>Icons</div>
        <div className='flex-1 flex flex-col'>
            <Menu>
              <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right 
              rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition 
              focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 
              data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    {
                      //@ts-ignore
                      menuItems.map(({name})=> <Item {...{name}}/>)  
                    }
              </MenuItems>
            </Menu>
            <div>
              <p>© 2024 Newland Chase</p>
              <p>Australian Migration Agents Registration Authority Number 9902581</p>
            </div>
        </div>
        <div className='flex flex-col'>
          <div className='font-semibold'>Global<br/> Headquarters</div>
          <div className='whitespace-pre-line'>
            Skyline House,<br/>
            200 Union St<br/>
            London SE1 0LX
          </div>
        </div>
      </div>
    </footer>
  )
}

//@ts-ignore
const Item = ({name}) => {
  return (
      <MenuItem>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
      >
        {name}
      </a>
    </MenuItem>  
  )
}
 */
  
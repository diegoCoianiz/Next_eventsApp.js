import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image alt="logo" src={"/logo_black.png"} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about-us'>About Us</Link>
            </li>
            <li>
              <Link href='/events'>Events</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="headerTitle">Events Page</h1>
    </header>
  )
}


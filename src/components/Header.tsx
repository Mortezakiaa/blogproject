import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header">
        <div>
          <ul>
            <li>
              <Link style={{ color: "#fff", textDecoration: "none" }} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                href="/addblog"
              >
                addBlogs
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

import { Outlet } from "react-router-dom";

export const Layout = () => {
  // liste contenant les liens sous la forme route: nom à afficher
  const links = [
    {
      id: 1,
      route: "/",
      nom: "accueil",
    },
    {
      id: 2,
      route: "/page1",
      nom: "page1",
    }
  ];

  // maps pour faire les balises <li>
  const linksRender = links.map((link) => (
    <li>
      <a href={link.route}>{link.nom}</a>
    </li>
  ));

  return (
    <main>
      {/* Header */}
      <div>
        {/* Nav bar */}
        <nav className="">
          <ul>{linksRender}</ul>
          
        </nav>
      </div>

      {/* Page content */}
      <hr />
      <Outlet/>
      <hr />

      {/* Footer */}
      <div>
      </div>
    </main>
  );
};

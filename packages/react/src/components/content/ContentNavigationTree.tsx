import React from "react";
import PropTypes from "prop-types";
import {NavigationTreeLink} from "@mockline/themes";

export const MContentNavigationTree = ({ links, getClasses }: { links: NavigationTreeLink[]; getClasses: Function }) => {
  const isLinkActive = (link: any) => {
    if (typeof window !== "undefined") {
      return window.location.pathname.startsWith(link.path) || link.active === true;
    }
    return false;
  };

  return (
    <nav className={getClasses("root")}>{links?.length > 0 && (
      <ul className={getClasses("list")}>
        {links.map((link, index) => (
          <li key={index} className={getClasses("item", { active: isLinkActive(link), disabled: link.disabled })}>
            <a href={link.path} className={getClasses("link")}>
              {link.icon && <i className={getClasses("icon")}>{link.icon}</i>}
              <span className={getClasses("title")}>{link.title}</span>
              {link.badge && <span className={getClasses("badge")}>{link.badge}</span>}
            </a>
            {link.children?.length && link.children?.length > 0 && (
              <ul className={getClasses("list")}>
                {link.children.map((child, index) => (
                  <li key={index} className={getClasses("item", { active: isLinkActive(child), disabled: child.disabled })}>
                    <a href={child.path} className={getClasses("link")}>
                      {child.icon && <i className={getClasses("icon")}>{child.icon}</i>}
                      <span className={getClasses("title")}>{child.title}</span>
                      {child.badge && <span className={getClasses("badge")}>{child.badge}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )}</nav>
  );
};

MContentNavigationTree.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      badge: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          active: PropTypes.bool,
          disabled: PropTypes.bool,
          icon: PropTypes.string,
          badge: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  getClasses: PropTypes.func.isRequired,
};

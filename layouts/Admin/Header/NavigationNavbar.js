import React from 'react'

import { NavbarNav, NavbarNavDropdown, NavbarDropdownContent, NavbarDropdownItem, NavbarDropdownHeader } from '@behelit/components'

const BreadcrumbNavbar = () => (
  <NavbarNav width="6rem">
    <NavbarNavDropdown>
      <NavbarDropdownHeader>Management</NavbarDropdownHeader>
      <NavbarDropdownContent>
        <NavbarDropdownItem href="/admin/articles">Articles</NavbarDropdownItem>
        <NavbarDropdownItem href="/admin/comments">Comments</NavbarDropdownItem>
        <NavbarDropdownItem href="/admin/projects">Projects</NavbarDropdownItem>
        <NavbarDropdownItem href="/admin/reviews">Reviews</NavbarDropdownItem>
        <NavbarDropdownItem href="/admin/tags">Tags</NavbarDropdownItem>
        <NavbarDropdownItem href="/admin/users">Users</NavbarDropdownItem>
      </NavbarDropdownContent>
    </NavbarNavDropdown>
  </NavbarNav>
)

export default BreadcrumbNavbar

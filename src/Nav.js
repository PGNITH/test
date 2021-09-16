import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <img style={{marginLeft:"30px"}} height={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAABhYWG4uLicnJw3NzcnJyfAwMCgoKDm5ualpaXr6+vS0tIYGBghISHOzs6QkJDW1tZoaGj39/dtbW3x8fGGhoZmZmaNjY1CQkJ1dXXGxsYxMTFMTEzf398cHBwRERFVVVWtra2AgIATExMORnuRAAAD+klEQVR4nO2d61LiQBBGE0ATuSXc1IUFhd33f8ZVAuxMEqBsu9tdPOenZfjqhJlJMqG6kwRuiFlWTjvaLPuTi6GT/lw9c/qYzVqiHuapEaP+Wb/81Sp0/lDPKq2i3hm1f49DM793enHY1jLrjW6L4M44sxOGrY3D0jRrCHbNMwPFZ/OwNB3UBB8cMkvPsHRbM/zhEXo8rR2PsHQYCa5cMpdV2MIl7JjmelbTmdOUr4gMnTKrBe6XU1q41kycMkvPARNNRJ9p+HZr0zDs5D1F8nwUfPYqMMyCv49y3dDIp2GYJ7rcB58dXvRDw3vlzPyiYe/K0R/lKwx7GKqCIYYSMNQFQwwlYKgLhhhKwFAXDDGUgKEuGGIoAUNdMMRQAoa6YIihBAx1wRBDCRjqgiGGEjDUBUMMJWCoC4YYSsBQFwwxlIChLhhiKAFDXTDEUAKGumCIoQQMdcEQQwkY6oIhhhIw1AVDDCVgqAuGGEq4bHj7tU3Gd7oEHx3Vp4kq8ChnjhuGZgUTa4Q1hoZOmVWNod71f1RhERg61Rc7rCuFT9g4miyj6wdocBg3PmFlZOhRyDA9VVDzGaaLyHDgknm6NHiExV9hkjx6hJ7SHGbiz8Zl6/76QZ8lWL371lmvi4ah/TjdhXHGtRPvmoJvV4yftqG1urcby3qi9TnoMRfXjVLJSfFkE/VStn2Bh5H6bFQseb5qD5ysuspkw+aprA2eItMOLa5lAgAAAMC/zabQvkXMhudvuysWQ/370k17VDG1uc0fX3q2KF9sQufDRpbp8+HzGUHT58Nay5BbfMaPGr/c5j5NsI3hsNd21zAcXz/os/xtwmSf9TX7pS/HMNNuVificerSvSc9dgtzCau9XnbZ8k5HVZhTv5B419sn8zATfQbpsW+P5yA9vpox2idtELaXc3pneWjB9BXv8cNfKti/x/9ev8W4/d/TYPhRMMRQAoa6YIihBAx1wRBDCRjqgiGGEjDUBUMMJWCoC4YYSsBQFwwxlIChLhhiKAFDXTDEUAKGumCIoQQMdcEQQwkY6oIhhhIw1AVDDCVgqAuGGErAUBcMMZSAoS4YYigBQ10wxFAChrpgiKEEDHXBEEMJ373PTCfvKZLnYaOOc4ajXDc08tmnedUYKgJDrxpDT/s0n7JbaRpWpNw4ZT7u04xrJp6IJotTZlVY0KlvzzwydGrBdKgvZlS4tEYRGfpMxONZdSmetq6t6WuP0FMNU4+adPWODB6nNbh/2ZqHZUkd+wVuG8ZtjcO6DcEk2RlnduI404E6nrQIJsnEqExyReMWe2C2ov7etent6Ru1mUnT6aAlbtYtpx1tlv1m3emQYX+pnjntrWYXQ+E/4w+yqngY/UpymQAAAABJRU5ErkJggg=="/>
        &nbsp; <NavbarBrand href="/">Catalogue</NavbarBrand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
           
           
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;

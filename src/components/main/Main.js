import React, { useState } from "react";
import "../../styles/main/main.css";

import home from '../../assets/main/svg/home.svg';
import clipboard from '../../assets/main/svg/clipboard.svg';
import aboutUs from '../../assets/main/svg/users.svg';
import settings from '../../assets/main/svg/settings.svg';
import logout from '../../assets/main/svg/logout.svg';



const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<h2>Infinity</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="Register"
						>
							<img className="menu-item-icon" src={home} alt="" srcset="" />
							{isExpanded && <p>Início</p>}
						</a>

						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="Register"
						>
							<img className="menu-item-icon" src={clipboard} alt="" srcset="" />
							{isExpanded && <p>Agenda</p>}
						</a>

						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="Login"
						>
							<img className="menu-item-icon" src={aboutUs} alt="" srcset="" />
							{isExpanded && <p>Sobre a Infinity</p>}
						</a>

						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="Register"
						>
							<img className="menu-item-icon" src={settings} alt="" srcset="" />
							{isExpanded && <p>Configurações</p>}
						</a>

						
	
				</div>
			</div>
			<div className={isExpanded ? "nav-footer" : "nav-footer nav-footer-NX"}>
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Harry</p>
							<p className="nav-footer-user-position">#84578</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src={logout} title="Logout" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
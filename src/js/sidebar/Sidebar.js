import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SidebarMenuItem from './SidebarMenuItem';

export default function Sidebar(props) {
	return (
		<div className="modal-bg">
			<div className="modal">
				<div className="modal-close">
					<div
						className="modal-close-button"
						onClick={() => props.setBar(prevShow => !prevShow)}
					>
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="modal-body">
					<div className="social">
						<div className="title">Social</div>
						<div className="items">
							<SidebarMenuItem id="social" name="Behance" />
							<SidebarMenuItem id="social" name="Dribble" />
							<SidebarMenuItem id="social" name="Instagram" />
							<SidebarMenuItem id="social" name="YouTube" />
							<SidebarMenuItem id="social" name="Patreon" />
							<SidebarMenuItem id="social" name="Facebook" />
						</div>
					</div>
					<div className="menu">
						<div className="title">Menu</div>
						<div className="links">
							<SidebarMenuItem id="menu" name="Work" />
							<SidebarMenuItem id="menu" name="About" />
							<SidebarMenuItem id="menu" name="Services" />
							<SidebarMenuItem id="menu" name="Contacts" />
						</div>
					</div>
				</div>
				<div className="modal-footer">
					<div className="title">Get in Touch</div>
					<div className="info">
						<a href="mailto:info@cuberto.com">info@cuberto.com</a>
					</div>
				</div>
			</div>
		</div>
	);
}

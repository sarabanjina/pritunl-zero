/// <reference path="../References.d.ts"/>
import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
import Loading from './Loading';
import Settings from './Settings';

document.body.className = 'root pt-dark';

const css = {
	nav: {
		overflowX: 'auto',
		overflowY: 'hidden',
	} as React.CSSProperties,
	link: {
		color: 'inherit',
	} as React.CSSProperties,
	heading: {
		marginRight: '11px',
	} as React.CSSProperties,
};

export default class Main extends React.Component<{}, {}> {
	render(): JSX.Element {
		return <ReactRouter.HashRouter>
			<div>
				<nav className="pt-navbar layout horizontal" style={css.nav}>
					<div className="pt-navbar-group pt-align-left flex">
						<div className="pt-navbar-heading"
							style={css.heading}
						>Pritunl Zero</div>
						<Loading size="small"/>
					</div>
					<div className="pt-navbar-group pt-align-right">
						<ReactRouter.Link to="/console/settings" style={css.link}>
							<button
								className="pt-button pt-minimal pt-icon-cog"
							>Settings</button>
						</ReactRouter.Link>
						<button
							className="pt-button pt-minimal pt-icon-refresh"
							onClick={() => {}}
						>Refresh</button>
					</div>
				</nav>

				<ReactRouter.Route path="/console/settings" render={() => (
					<Settings/>
				)}/>
			</div>
		</ReactRouter.HashRouter>;
	}
}

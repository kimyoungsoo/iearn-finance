//i18n => {"home.Text.1":"Dashboard","home.Text.2":"{ \"Get a quick glance at how your portfolio is growing while invested in yearn's products.\" }","home.Text.3":"{ t(\"Home.Vaults\") }","home.Text.4":"{ \"Vaults follow unique strategies that are designed to maximize the yield of the deposited asset and minimize risk.\" }","home.Text.5":"{ t(\"Home.Earn\") }","home.Text.6":"{ t(\"Home.Zap\") }","home.Text.7":"{ \"Zaps help you save on gas fees. Zap directly into or out of Curve pools from the base assets.\" }","home.Text.8":"{ t(\"Home.Cover\") }","home.Text.9":"{ \"Get cover with Nexus Mutual from yinsure.finance\" }","home.Text.10":"Stats","home.Text.11":"{ \"Get a quick glance at how yearn's vaults are performing.\" }"}
import i18next from "i18next";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
	Card,
	Typography,
} from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { colors } from '../../theme';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import SecurityIcon from '@material-ui/icons/Security';

const styles = theme => ({
	root: {
		flex: 1,
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		}
	},
	card: {
		flex: '1',
		height: '25vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		cursor: 'pointer',
		borderRadius: '0px',
		transition: 'background-color 0.2s linear',
		[theme.breakpoints.up('sm')]: {
			height: '100vh',
			minHeight: '50vh',
		}
	},
	earn: {
		backgroundColor: colors.white,
		'&:hover': {
			backgroundColor: colors.pink,
			'& .title': {
				color: colors.white
			},
			'& .icon': {
				color: colors.white
			},
			'& .description': {
				display: 'block',
				color: colors.white,
				padding: '48px',
				textAlign: 'center'
			}
		},
		'& .title': {
			color: colors.pink
		},
		'& .icon': {
			color: colors.pink
		},
		'& .description': {
			display: 'none'
		}
	},
	zap: {
		backgroundColor: colors.white,
		'&:hover': {
			backgroundColor: colors.blue,
			'& .title': {
				color: colors.white,
			},
			'& .icon': {
				color: colors.white
			},
			'& .description': {
				display: 'block',
				color: colors.white,
				padding: '48px',
				textAlign: 'center'
			}
		},
		'& .title': {
			color: colors.blue,
			display: 'block'
		},
		'& .soon': {
			color: colors.blue,
			display: 'none'
		},
		'& .icon': {
			color: colors.blue
		},
		'& .description': {
			display: 'none'
		}
	},
	apr: {
		backgroundColor: colors.white,
		'&:hover': {
			backgroundColor: colors.lightBlack,
			'& .title': {
				color: colors.white
			},
			'& .icon': {
				color: colors.white
			},
			'& .description': {
				display: 'block',
				color: colors.white,
				padding: '48px',
				textAlign: 'center'
			}
		},
		'& .title': {
			color: colors.lightBlack
		},
		'& .icon': {
			color: colors.lightBlack
		},
		'& .description': {
			display: 'none'
		}
	},
	vault: {
		backgroundColor: colors.white,
		'&:hover': {
			backgroundColor: colors.tomato,
			'& .title': {
				color: colors.white,
			},
			'& .icon': {
				color: colors.white
			},
			'& .description': {
				display: 'block',
				color: colors.white,
				padding: '48px',
				textAlign: 'center'
			}
		},
		'& .title': {
			color: colors.tomato,
		},
		'& .icon': {
			color: colors.tomato
		},
		'& .description': {
			display: 'none'
		}
	},
	cover: {
		backgroundColor: colors.white,
		'&:hover': {
			backgroundColor: colors.compoundGreen,
			'& .title': {
				color: colors.white,
			},
			'& .icon': {
				color: colors.white
			},
			'& .description': {
				display: 'block',
				color: colors.white,
				padding: '48px',
				textAlign: 'center'
			}
		},
		'& .title': {
			color: colors.compoundGreen,
		},
		'& .icon': {
			color: colors.compoundGreen
		},
		'& .description': {
			display: 'none'
		}
	},
	title: {
		padding: '24px',
		paddingBottom: '0px',
		[theme.breakpoints.up('sm')]: {
			paddingBottom: '24px'
		}
	},
	icon: {
		fontSize: '60px',
		[theme.breakpoints.up('sm')]: {
			fontSize: '100px',
		}
	},
	link: {
		textDecoration: 'none'
	}
});

class Home extends Component {

	constructor(props) {
		super();

		this.state = {
		};
	}

	render() {
		const { classes, t, location } = this.props;

		return (
			<div className={ classes.root }>
				<Card className={ `${classes.card} ${classes.apr}` } onClick={ () => { this.nav(location.pathname+'dashboard'); } }>
					<BarChartIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.1" >{i18next.t('home.Text.1')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` } id="home.Text.2" >{i18next.t('home.Text.2')}</Typography>
				</Card>
				<Card className={ `${classes.card} ${classes.vault}` } onClick={ () => { this.nav(location.pathname+'vaults'); }}>
					<PieChartIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.3" >{i18next.t('home.Text.3')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` } id="home.Text.4" >{i18next.t('home.Text.4')}</Typography>
				</Card>
				<Card className={ `${classes.card} ${classes.earn}` } onClick={ () => { this.nav(location.pathname+'earn'); } }>
					<AttachMoneyIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.5" >{i18next.t('home.Text.5')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` }>{ "Earn performs profit switching for lending providers, moving your funds between dydx, Aave, Compound autonomously." }</Typography>
				</Card>
				<Card className={ `${classes.card} ${classes.zap}` } onClick={ () => { this.nav(location.pathname+'zap'); } }>
					<FlashOnIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.6" >{i18next.t('home.Text.6')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` } id="home.Text.7" >{i18next.t('home.Text.7')}</Typography>
				</Card>
				<Card className={ `${classes.card} ${classes.cover}` } onClick={ () => { window.open("https://yinsure.finance", "_blank"); } }>
					<SecurityIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.8" >{i18next.t('home.Text.8')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` } id="home.Text.9" >{i18next.t('home.Text.9')}</Typography>
				</Card>
				<Card className={ `${classes.card} ${classes.apr}` } onClick={ () => { this.nav(location.pathname+'stats'); } }>
					<BarChartIcon className={ `${classes.icon} icon` } />
					<Typography variant={'h3'} className={ `${classes.title} title` } id="home.Text.10" >{i18next.t('home.Text.10')}</Typography>
					<Typography variant={'h4'} className={ `${classes.description} description` } id="home.Text.11" >{i18next.t('home.Text.11')}</Typography>
				</Card>
			</div>
		);
	};

  nav = (screen) => {
  	this.props.history.push(screen);
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));

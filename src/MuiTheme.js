import { createMuiTheme } from '@material-ui/core/styles';
import Logger from './libs/Logger';

export const createTheme = () =>{
	const theme = createMuiTheme({
	});
	Logger.log({theme})
	return theme;
}

const mainTheme = createTheme();
export default mainTheme;
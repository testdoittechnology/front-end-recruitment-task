import React from 'react'
import Home from './scenes/Home';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './redux/store';
import MuiTheme from './MuiTheme';

class App extends React.PureComponent {

	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={MuiTheme}>
					<Home />
				</MuiThemeProvider>
			</Provider>
		)
	}
}

export default App
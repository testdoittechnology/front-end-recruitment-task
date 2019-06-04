import React from 'react'
import Home from './scenes/Home';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './redux/store';

class App extends React.PureComponent {

	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					<Home />
				</MuiThemeProvider>
			</Provider>
		)
	}
}

export default App
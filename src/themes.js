/*
API:
getTheme() // by name
changeTheme(name)
*/
const themes = [
    {
        name: 'default',
        theme: {
            light: {
                primary: '#A976D2',
                secondary: '#1B4242',
                accent: '#82C1FF',
                error: '#AF5D52',
                info: '#B196E3',
                success: '#4CAF5F',
                warning: '#1FC107',
                text: 'black',
    			background: 'white',
            },
            dark: {
                primary: '#197612',
                secondary: '#422242',
                accent: '#8231FF',
                error: '#AF5252',
                info: '#C196F3',
                success: '#CCAF50',
                warning: '#1FC107',
                text: 'white',
				background: 'black',
            }
        }
    },
    {
        name: 'vetdrugs',
        theme: {
            light: {
                primary: '#C976D2',
                secondary: '#124242',
                accent: '#8221FF',
                error: '#AF5252',
                info: '#B196F3',
                success: '#4CAF50',
                warning: '#AFC107',
                text: 'black',
			    background: 'white',
            },
            dark: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                text: 'white',
				background: 'black',
            }
        }
    },
    {
        name: 'pesticides',
        theme: {
            light: {
                primary: '#F976D2',
                secondary: '#F24242',
                accent: '#F2B1FF',
                error: '#FF5252',
                info: '#F196F3',
                success: '#FCAF50',
                warning: '#FFC107',
                text: 'black'
            },
            dark: {
                primary: '#1976D2',
                secondary: '#124242',
                accent: '#12B1FF',
                error: '#1F5252',
                info: '#1196F3',
                success: '#1CAF50',
                warning: '#1FC107',
                text: 'white',
				background: 'black',
            }
        }
    },
    {
        name: 'abc-vetdrugs',
        theme: {
            light: {
                primary: '#A976D2',
                secondary: '#A24242',
                accent: '#A2B1FF',
                error: '#AF5252',
                info: '#A196F3',
                success: '#ACAF50',
                warning: '#AFC107',
                text: 'black',
			    background: 'white',
            },
            dark: {
                primary: '#1936D2',
                secondary: '#423242',
                accent: '#8231FF',
                error: '#FF3252',
                info: '#2136F3',
                success: '#4C3F50',
                warning: '#FF3107',
                text: 'white',
				background: 'black',
            }
        }
    },
    {
        name: 'abc-pesticides',
        theme: {
            light: {
                primary: '#1976F2',
                secondary: '#4242FF',
                accent: '#F2B1FF',
                error: '#FF52F2',
                info: '#F196F3',
                success: '#FCAF50',
                warning: '#FFC1F7',
                text: 'black',
			    background: 'white',
            },
            dark: {
                primary: '#197612',
                secondary: '#421242',
                accent: '#82B11F',
                error: '#1F5252',
                info: '#219611',
                success: '#4C1150',
                warning: '#1FC107',
                text: 'white',
				background: 'black',
            }
        }
    },        
];
  
  export default themes;
```
const { Component } = require('react')

class CheckboxExample extends Component {
	constructor(props) {
		super(props)
		this.state = { checked: false }
	}

	render() {
		return (
			<Checkbox
				label="Checkbox"
				onChange={(e) => this.setState({ checked: e.target.checked })}
				checked={this.state.checked}
			/>
		)
	}
}

<CheckboxExample />
```


```
const { Component } = require('react')

class ModalExample extends Component {
	constructor(props) {
		super(props)
		this.state = { show: false }
	}

	render() {
		return (
			<div>
				<Button onClick={() => this.setState({ show: true })}>Show Modal</Button>
				<Modal
					show={this.state.show}
					onClose={() => this.setState({ show: false })}
				>
					<Modal.Header>
						<Heading size="medium">Hello</Heading>
					</Modal.Header>
					<Modal.Content>
						<Paragraph>Some random text, Some random text Some random text Some random text</Paragraph>
					</Modal.Content>
					<Modal.Footer>
						<Heading size="medium">Hello</Heading>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

<ModalExample />
```

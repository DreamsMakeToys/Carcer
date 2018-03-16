import { h, Text, Component } from 'ink'
import { connect } from 'ink-redux'
import WindowSize from 'window-size'
import TextInput from './textinput'

const Shell = ({
  status,
  inputWidth,
  value,
  size,
  handleInput,
  handleSubmit
}) => (
  <div>
    <Text>
      {'╭──────────────────╮ '}
      <Text bold>Carcer: </Text>
      <Text>a toy for projection</Text>
    </Text>
    <div />
    <Text>
      {'│││││ 〉 ⏣  〈 │││││'}
      {'╭' + '─'.repeat(inputWidth) + '╮'}
    </Text>
    <div />
    <Text>
      {'││╭∩╮（︶︿︶）╭∩╮││'}
      {'│ '}
      <TextInput
        value={value}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      {' '.repeat(inputWidth - value.length - 2) + '│'}
    </Text>
    <div />
    <Text>
      {'╰──────────────────╯'}
      {'╰' + '─'.repeat(inputWidth) + '╯'}
    </Text>
  </div>
)

const select = state => ({
  evaluateCommand: state.api.evaluate
})

const applyBehavior = Comp => {
  class Instance extends Component {
    constructor(props) {
      super(props)
      const { width, height } = WindowSize.get()
      this.state = {
        size: { width, height },
        value: ''
      }
      this.setSize = this.setSize.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
      process.stdout.on('resize', this.setSize)
    }
    render({ status, carcerState }, { size, value }) {
      const inputWidth = size.width - 21 - 1
      return (
        <Comp
          status={status}
          inputWidth={inputWidth}
          value={value}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      )
    }
    setSize() {
      const { width, height } = WindowSize.get()
      const size = { width, height }
      console.clear()
      this.setState({ size })
    }
    handleInput(value) {
      this.setState({ value })
    }
    handleSubmit(value) {
      const { evaluateCommand } = this.props
      evaluateCommand(value).then(() => {
        this.setState({ value: '' })
      })
    }
  }
  return connect(select)(Instance)
}

export default applyBehavior(Shell)
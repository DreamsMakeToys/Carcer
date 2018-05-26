const Action = {
  CLIENT_CONNECTED: 'CLIENT_CONNECTED',
  COMMAND_EXECUTED: 'COMMAND_EXECUTED',
  EVALUATE_INPUT: 'EVALUATE_INPUT',
  EXECUTE_COMMAND: 'EXECUTE_COMMAND',
  PLUGIN_LOADED: 'PLUGIN_LOADED',
  SYSTEM_LOADED: 'SYSTEM_LOADED',
  SYSTEM_LOADING: 'SYSTEM_LOADING'
}

const BaseMessage = {
  LOAD_PALETTE: 'LOAD_PALETTE'
}

const ClientMessage = {
  COMMAND: 'COMMAND',
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED'
}

export { Action, BaseMessage, ClientMessage }

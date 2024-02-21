const ipc = require('node-ipc');
const { IPC_EVENTS } = require('../helper/constants');

exports.connectIPCClient = (config) => {
  ipc.config.id = 'testgridTestObservability';
  ipc.config.retry = 1500;
  ipc.config.silent = true;

  ipc.connectTo('testgridTestObservability', () => {
    ipc.of.testgridTestObservability.on('connect', () => {
      ipc.of.testgridTestObservability.emit(IPC_EVENTS.CONFIG, config);
    });
    ipc.of.testgridTestObservability.on('disconnect', () => {
    });
  });
};

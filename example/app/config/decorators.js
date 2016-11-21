export /* @ngInject */ function exceptionHandlerDecorator($log) {
  return (exception, cause) => $log.error(exception, cause);
}

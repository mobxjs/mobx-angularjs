export function ifEnv(ENV) {
  return {
    restrict: 'A',
    priority: 600,
    transclude: 'element',
    terminal: true,
    link(scope, element, attrs, ctrl, $transclude) {
      if (ENV === attrs.ifEnv) {
        $transclude((clone) => element.after(clone));
      }
    },
  };
}

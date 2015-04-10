import 'dart:html' as html;
import 'dart:math' as Math;

/// Class constructor for Spinner WSK component.
/// Implements WSK component design pattern defined at:
/// https://github.com/jasonmayes/mdl-component-design-pattern
/// @param {HTMLElement} element The element that will be upgraded.
class MaterialSpinner {

    final element;

    MaterialSpinner(this.element);

  // Initialize instance.
  init();
}

/// Store constants in one place so they can be updated easily.
/// @enum {string | number}
class _MaterialSpinnerConstant {
    final int WSK_SPINNER_LAYER_COUNT = 4;
}

/// Store strings for class names defined by this component that are used in
/// JavaScript. This allows us to simply change it in one place should we
/// decide to modify at a later date.
/// @enum {string}
class _MaterialSpinnerCssClasses {
    final String WSK_SPINNER_LAYER = 'mdl-spinner__layer';
    final String WSK_SPINNER_CIRCLE_CLIPPER = 'mdl-spinner__circle-clipper';
    final String WSK_SPINNER_CIRCLE = 'mdl-spinner__circle';
    final String WSK_SPINNER_GAP_PATCH = 'mdl-spinner__gap-patch';
    final String WSK_SPINNER_LEFT = 'mdl-spinner__left';
    final String WSK_SPINNER_RIGHT = 'mdl-spinner__right';
}

* Auxiliary method to create a spinner layer.
*/
/// MaterialSpinner.prototype.createLayer = function(index) {
void createLayer(final index) {

  final layer = new html.DivElement();
  layer.classes.add(_cssClasses.WSK_SPINNER_LAYER);
  layer.classes.add(_cssClasses.WSK_SPINNER_LAYER + '-' + index);

  final leftClipper = new html.DivElement();
  leftClipper.classes.add(_cssClasses.WSK_SPINNER_CIRCLE_CLIPPER);
  leftClipper.classes.add(_cssClasses.WSK_SPINNER_LEFT);

  final gapPatch = new html.DivElement();
  gapPatch.classes.add(_cssClasses.WSK_SPINNER_GAP_PATCH);

  final rightClipper = new html.DivElement();
  rightClipper.classes.add(_cssClasses.WSK_SPINNER_CIRCLE_CLIPPER);
  rightClipper.classes.add(_cssClasses.WSK_SPINNER_RIGHT);

  final circleOwners = [leftClipper, gapPatch, rightClipper];

  for (final i = 0; i < circleOwners.length; i++) {

    final circle = new html.DivElement();
    circle.classes.add(_cssClasses.WSK_SPINNER_CIRCLE);
    circleOwners[i].append(circle);
  }

  layer.append(leftClipper);
  layer.append(gapPatch);
  layer.append(rightClipper);

  element.append(layer);
}

* Stops the spinner animation.
* Public method for users who need to stop the spinner for any reason.
* @public
*/
/// MaterialSpinner.prototype.stop = /*function*/ () {
void stop() {

  element.classes.remove('is-active');
}

* Starts the spinner animation.
* Public method for users who need to manually start the spinner for any reason
* (instead of just adding the 'is-active' class to their markup).
* @public
*/
/// MaterialSpinner.prototype.start = /*function*/ () {
void start() {

  element.classes.add('is-active');
}

/// Initialize element.
/// MaterialSpinner.prototype.init = /*function*/ () {
void init() {

  if (element != null) {

    for (final i = 1; i <= _constant.WSK_SPINNER_LAYER_COUNT; i++) {
      createLayer(i);
    }

    element.classes.add('is-upgraded');
  }
}

// The component registers itself. It can assume componentHandler is available
// // in the global scope.

// componentHandler.register({
//   constructor: MaterialSpinner,
//   classAsString: 'MaterialSpinner',
//   cssClass: 'mdl-js-spinner'
// });

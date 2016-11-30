import { PropTypes } from 'react'
import THREE from 'three'
import Base from './Base'


// https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js
export default class Object3D extends Base {

  static contextTypes = {
    parent: PropTypes.object,
  };

  static childContextTypes = {
    parent: PropTypes.object,
  };

  // fixme: +props.obj
  // static propTypes = {
  //   obj: PropTypes.object,
  // };

  getChildContext () {
    return {
      parent: this.obj,
    }
  }

  static propTypes = {
    ...Base.propTypes,
    position: PropTypes.object,
    rotation: PropTypes.object,
    onClick: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseDown: PropTypes.func,
    onDragOver: PropTypes.func,
  };

  constructor (...args) {
    super(...args)
    this.obj = new THREE.Object3D() // placeholder

    // Component name as default Object name
    // friendly to threejs-inspector
    this.obj.name = this.constructor.name
  }

  componentDidMount () {
    this.update()
    if (this.context.parent) this.context.parent.add(this.obj)
  }

  componentDidUpdate () {
    this.update()
  }

  componentWillUnmount () {
    if (this.context.parent) this.context.parent.remove(this.obj)
  }

  // updating position & rotation
  update () {
    const { position, rotation } = this.props
    if (position) Object.assign(this.obj.position, position)
    if (rotation) Object.assign(this.obj.rotation, rotation)
    this.obj.handlers = {
      onClick: this.props.onClick,
      onMouseDown: this.props.onMouseDown,
      onMouseMove: this.props.onMouseMove,

      onDragStart: this.props.onDragStart,
      // onDrag: this.props.onDrag,
      // onDragEnd: this.props.onDragEnd,
      onDragOver: this.props.onDragOver,
      onDragDrop: this.props.onDragDrop,

      // etc...
    }
  }
}

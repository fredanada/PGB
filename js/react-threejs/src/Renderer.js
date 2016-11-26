import React, { PropTypes } from 'react'
import THREE from 'three'
import Stats from 'stats.js'
import Base from './Base'
import store from '../../../browser/store'
import {addObject, clearBrush} from '../../../browser/reducers/timelineReducer'


export default class Renderer extends Base {

  static childContextTypes = {
    setCamera: PropTypes.func.isRequired,
    setScene: PropTypes.func.isRequired,
    getSize: PropTypes.func.isRequired,
    domElement: PropTypes.object.isRequired,
    audioListener: PropTypes.object.isRequired,
  };

  getChildContext () {
    return {
      setCamera: ::this.setCamera,
      setScene: ::this.setScene,
      getSize: ::this.obj.getSize,
      domElement: this.obj.domElement,
      audioListener: this.audioListener,
    }
  }
  setCamera (camera) {
    this.camera = camera
  }
  setScene (scene) {
    this.scene = scene
  }

  // sendCoords = (coords) => {
	// 	store.dispatch(newCoords(coords))
	// }

  static propTypes = {
    ...Base.propTypes,
    size: PropTypes.object.isRequired,
    obj: PropTypes.object,
  };

  constructor (props, ...rest) {
    super(props, ...rest)
    this.animate = ::this.animate
    this.audioListener = new THREE.AudioListener()
    this.stats = new Stats()

    this.obj = props.obj || new THREE.WebGLRenderer({
      antialias: true,
    })
    this.obj.name = this.obj.name || this.constructor.name
    this.obj.setSize(props.size.width, props.size.height)
    this.obj.setClearColor(0x000000)
    this.raycaster = new THREE.Raycaster()
  }

  componentDidMount () {
    this.refs.container.appendChild(this.obj.domElement) // fixme
    this.refs.container.appendChild(this.stats.dom)
    this.animate()
  }

  componentWillUnmount () {
    // temperately not considering Renderer being unmounted
    // it is singleton & dominating
  }

  // rendering scene with camera
  animate () {
    requestAnimationFrame(this.animate)
    this.obj.render(this.scene, this.camera)
    this.stats.update()
  }

  positionFromMouseEvent(evt) {
    const {width, height} = this.obj.getSize()
    console.log('size', width, height)
    return {
      x: ( evt.clientX / width ) * 2 - 1,
      y: - ( evt.clientY / height ) * 2 + 1,
    }
  }

  getIntersections(evt) {
    const pos = this.positionFromMouseEvent(evt)
    this.raycaster.setFromCamera(pos, this.camera)
    return this.raycaster.intersectObjects(this.scene.children, true)
  }

  onClick = evt => {
    evt.preventDefault()
    const hits = this.getIntersections(evt)
    console.log('hits is', hits)
    // for ( var i = 0; i < hits.length; i++ ) {
      // hits[ 0 ].object.material.color.set( 0xff0000 );
      const object = hits[0].object
      const points = hits[0].point
      // this.sendCoords({x: points.x, y: points.y, z: 0.5})
      const brushData = store.getState().sampleBrush;
        // console.log("brushData", brushData);
        // console.log("EVT", evt)
        if (brushData) {
            // console.log("IN IF STATEMENT", evt.pageX, evt.pageY)
            const data = {
                position: {x: points.x, y: points.y, z: 0.5},
                spl: brushData.spl,
                obj: brushData.obj,
                color: brushData.color
            }
            store.dispatch(addObject(data));
            store.dispatch(clearBrush());

      }
      if (object.handlers) {
        console.log("BLAAA", object.handlers)
      } else {
        console.log(object, 'has no handlers')
      }

      if (object.handlers && object.handlers.onClick) {
        object.handlers.onClick(evt)
        // Maybe bail out at this point
      }
    //}
  }


  render() { 
    return (
    <div onClick={this.onClick}>
      <div ref="container"></div>
      <div hidden>{this.props.children}</div>
    </div>)
  }
}

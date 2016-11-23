import React from 'react'
import THREE from 'three'
console.log('THREE=', THREE)
import {Mesh} from '../../js/react-threejs/src'

export default class Dodecahedron extends Mesh {
    // constructor(props) {
    //     super(props)
    //     this.geometry = new THREE.BoxGeometry(1,1,1)
    //     this.material = new THREE.MeshBasicMaterial({color: 'white'})
    // }
    
    geometry = new THREE.DodecahedronBufferGeometry(10);
    material = new THREE.MeshBasicMaterial({ color: 0xFF00FF, wireframe: true });

    render() { 
        return (
            <Mesh geometry={this.geometry} material={this.material}>
                {this.props.children}
            </Mesh>
        )
    }
}
/*! YJM: Yijun’s Simplified JS Methods v0.0.1 */

module.exports = (function( document, undefined ) {

var YJM = {
  // Simplified query selectors which return the node list
  // in an array
  id: function( selector, context ) {
    return ( context || document ).getElementById( selector )
  },

  tag: function( selector, context ) {
    return this.makeArray(
      ( context || document ).getElementsByTagName( selector )
    )
  },

  qsa: function( selector, context ) {
    return this.makeArray(
      ( context || document ).querySelectorAll( selector )
    )
  },

  matches: function( elem, query ) {
    var Efn = Element.prototype,
        matches = Efn.matches || Efn.mozMatchesSelector || Efn.msMatchesSelector || Efn.webkitMatchesSelector

    try {
      return matches.call( elem, query )
    } catch(e) {
      return false
    }
  },

  // Create a document fragment, a text node with text
  // or an element with/without classes
  create: function( elem, clazz ) {
    var elem = '!' === elem ?
          document.createDocumentFragment() :
          '' === elem ?
            document.createTextNode( clazz || '' ) :
            document.createElement( elem )

    try {
      if ( clazz ) {
        elem.className = clazz
      }
    } catch ( e ) {}

    return elem
  },

  // Clone a node (text, element or fragment) deeply or
  // childlessly
  clone: function( node, deep ) {
    return node.cloneNode( deep || true )
  },

  // Remove a node (text, element or fragment)
  remove: function( node, parent ) {
    return ( parent || node.parentNode ).removeChild( node )
  },

  // Set attributes all in once with an object
  setAttr: function( target, attr ) {
    var len = attr.length

    if ( typeof attr !== 'object' ) {
      return
    }

    // Native NamedNodeMap
    if (
      typeof attr[ 0 ] === 'object' &&
      'name' in attr[ 0 ]
    ) {
      for ( var i = 0; i < len; i++ ) {
        if ( attr[ i ].value !== undefined ) {
          target.setAttribute( attr[ i ].name, attr[ i ].value )
        }
      }

    // Plain object
    } else {
      for ( var name in attr ) {
        if (
          attr.hasOwnProperty( name ) &&
          attr[ name ] !== undefined
        ) {
          target.setAttribute( name, attr[ name ] )
        }
      }
    }
    return target
  },

  // Return if the current node should be ignored,
  // `<wbr>` or comments
  isIgnorable: function( node ) {
    return node.nodeName === 'WBR' ||
      node.nodeType === Node.COMMENT_NODE
  },

  // Convert array-like objects into real arrays
  // for the native prototype methods
  makeArray: function( obj ) {
    return Array.prototype.slice.call( obj )
  },

  // Extend target with an object
  extend: function( target, object ) {
    var isExtensible = typeof target === 'object' ||
          typeof target === 'function' ||
          typeof object === 'object'

    if ( !isExtensible ) {
      return
    }

    for ( var name in object ) {
      if ( object.hasOwnProperty( name )) {
        target[ name ] = object[ name ]
      }
    }
    return target
  },

  xhr: function( url, callback ) {
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() {
      if ( xhr.readyState === 4 ) {
        callback( xhr.responseText )
      }
    }

    xhr.open( 'GET', url, true )
    xhr.send( '' )
  }
}

return YJM

})( window.document )

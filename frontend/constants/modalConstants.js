var CONTENT_STYLE = {
  overlay : {
    backgroundColor : 'rgba(30,30,30,0.85)',
    zIndex          : 10,
    display         : 'flex'
  },

  content : {
    position        : 'fixed',
    top             : '25%',
    bottom          : '25%',
    left            : '40%',
    right           : '40%',
    display         : 'flex',
    flexDirection   : 'column',
    justifyContent  : 'center',
    alignItems      : 'center',
    borderRadius    :  '30px',
    backgroundColor : '#222222',
    padding         : '20px',
    zIndex          : '11',
    opacity         : '0',
    transition      : 'opacity 3s',
    minHeight       : '500px',
    minWidth        : '200px',
    overflowy       : 'scroll'
  }
};


module.exports = CONTENT_STYLE;

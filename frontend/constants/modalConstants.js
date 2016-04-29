var CONTENT_STYLE = {
  overlay : {
    backgroundColor : 'rgba(30,30,30,0.85)',
    zIndex          : 10,
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
    backgroundColor : '#104DA1',
    padding         : '20px',
    zIndex          : '11',
    opacity         : '0',
    transition      : 'opacity 3s',
    minHeight       : '300px',
  }
};

module.exports = CONTENT_STYLE;
